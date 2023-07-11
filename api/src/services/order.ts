import Order, { OrderDocument } from "../models/order";

export const createOrderService = async (
  order: OrderDocument
): Promise<OrderDocument | undefined> => {
    return order.save();
};
