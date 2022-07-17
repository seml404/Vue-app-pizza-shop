import { v4 as uuidv4 } from "uuid";

const getMockCard = (url) => {
  console.log("generating mock card");
  return {
    id: uuidv4(),
    photo: url,
    name: "mockPizzaName",
    price: Math.trunc(Math.random() * 10000),
  };
};
export { getMockCard };
