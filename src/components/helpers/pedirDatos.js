import { stock } from "../data/stock";

export const pedirDatos = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(stock);
    }, 2000);
  });
};
