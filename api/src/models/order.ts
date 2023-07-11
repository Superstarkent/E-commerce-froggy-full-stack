import mongoose, { Document } from "mongoose";

export type OrderDocument = Document & {
  userId: mongoose.Schema.Types.ObjectId;
  products: mongoose.Schema.Types.ObjectId[];
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clothing",
    },
  ],
});


export default mongoose.model<OrderDocument>("Order", orderSchema);
