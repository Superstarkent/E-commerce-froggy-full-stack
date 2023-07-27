import { Product } from "../../types/type";
import { baseUrl } from "../utils";

export const fetchProductDetailsApi = async (_id: string): Promise<Product> => {
  const response = await fetch(`${baseUrl}/products/${_id}`);
  const product = (await response.json()) as Product;
  return product;
};
