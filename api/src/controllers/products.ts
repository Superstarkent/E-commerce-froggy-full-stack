// product controller here
import { Request, Response, NextFunction } from "express";

import Product from "../models/Product";
import {
  createProductService,
  getProductsService,
  getProductsByIdService,
} from "../services/products";
import { InternalServerError } from "../helpers/apiError";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productInformation = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      category: req.body.category,
      colors: req.body.colors,
    });
    const product = await createProductService(productInformation);
    res.status(200).json(product);
  } catch (error) {
    next(
      new InternalServerError(
        "An error occurred while creating the product",
        error
      )
    );
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const productList = await getProductsService();
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const product = await getProductsByIdService(productId);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
