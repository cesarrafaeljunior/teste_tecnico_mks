import { IProducts } from "../../../interfaces/productsInterface";
import { instaceAxios } from "../Instance";

const getProducts = async (): Promise<IProducts[]> => {
  const { data } = await instaceAxios.get("products");
  return data.products;
};

export { getProducts };
