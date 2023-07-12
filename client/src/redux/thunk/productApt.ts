import { Product } from '../../types/type'

export const fetchProductsApi = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:8000/products");
  return (await response.json()) as Product[];
};