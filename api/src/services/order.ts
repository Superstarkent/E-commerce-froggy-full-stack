import Order, { OrderDocument } from "../models/order";

export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument | undefined> => {
  try {
    return order.save();
  } catch (error) {
    console.log(error);
  }
};
