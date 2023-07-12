import { Product } from "../../types/type";

export const fetchProductDetailsApi = async (_id: string): Promise<Product> => {
  const response = await fetch(`http://localhost:8000/products/${_id}`);
  const product = (await response.json()) as Product;
  return product;
};
