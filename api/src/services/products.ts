// product services
import Product, { ProductDocument } from "../models/Product";

export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument | undefined> => {
  try {
    return product.save();
  } catch (error) {
    console.log(error);
  }
};

export const getProductsService = async (): Promise<
  ProductDocument[] | undefined
> => {
  try {
    return Product.find();
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByIdService = async (
  productId: string
): Promise<ProductDocument | undefined> => {
  try {
    const productById = await Product.findById(productId);
    if (productById) {
      return productById;
    } else {
      console.log("Couldn't find product by id ribbit");
    }
  } catch (error) {
    console.log(error);
  }
};

export default { createProductService };
