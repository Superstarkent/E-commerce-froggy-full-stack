import { Product } from '../../types/type'
import { baseUrl } from '../utils';

export const fetchProductsApi = async (): Promise<Product[]> => {
  const response = await fetch(`${baseUrl}/products`);
  return (await response.json()) as Product[];
};