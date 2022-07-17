import { requestWithParams } from "./requests/requestTypes.js";

const baseUrl = `https://jsonplaceholder.typicode.com/`;

const methods = {
  get: "GET",
  post: "POST",
  delete: "DELETE",
};

// getPhotos

const photosUrl = `photos`;
const getPhotosProps = { method: methods.get, url: `${baseUrl}${photosUrl}` };
const getPhotosParams = { _start: 0, _limit: 30 };

export const apiGetPhotos = () =>
  requestWithParams(getPhotosProps, getPhotosParams);
