import { Request, Response, NextFunction } from "express";
import  Order  from "../models/order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, products } = req.body;

    const order = new Order({
      userId,
      products, 
    });

    const result = await order.save();

    res.status(201).json(result);
  } catch (error) {
    console.warn("Error while creating order:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the order" });
  }
};

export async function getOrdersByUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { userId } = req.params;
  try {
    const userOrders = await Order.find({ userId: userId })
      .populate("userId")
      .populate("products");
    if (!userOrders) {
      throw new Error("User orders not found");
    }
    res.status(200).json({
      data: userOrders,
    });
  } catch (error) {
    next(error);
  }
}
