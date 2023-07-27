import mongoose, { Collection, Document } from "mongoose";

export type ProductDocument = Document & {
  name: string;
  price: number;
  image: string[];
  description: string;
  category: string;
  colors: string[];
};

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    colors: {
      type: [String],
    },
  },
);

export default mongoose.model<ProductDocument>("Clothing", ProductSchema);