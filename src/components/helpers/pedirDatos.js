import { stock } from "../data/stock";

export const pedirDatos = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(stock);
    }, 500);
  });
};

export const pedirItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(stock.find((item) => item.id === id));
    }, 500);
  });
};
