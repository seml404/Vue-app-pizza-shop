import { apiGetPhotos } from "../../assets/api.js";
import { status } from "../../assets/utils.js";

import { v4 as uuidv4 } from "uuid";
export const actionsComposition = () => {
  return {
    async getPhotos() {
      if (this.status.photosList !== status.success) {
        this.status.photosList = status.pending;
        try {
          const data = await apiGetPhotos();
          this.photosList = data.data;
          this.status.photosList = status.success;
        } catch (e) {
          this.status.photosList = status.error;
        }
      }
    },
    async createMockCards() {
      if (this.status.cardsList !== status.success) {
        this.status.cardsList = status.pending;
        console.log(this.photosList);
        try {
          for (let i = 0; i < this.photosList.length; i++) {
            this.cardsList.push({
              id: uuidv4(),
              photo: this.photosList[i].url,
              price: Math.trunc(Math.random() * 10000),
            });
          }
        } catch (e) {
          this.status.cardsList = status.error;
        }
      }
    },
    async getInitializationData() {
      await this.getPhotos();
      await this.createMockCards();
    },
  };
};
