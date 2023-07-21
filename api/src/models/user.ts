import mongoose, { Document } from "mongoose";
import { Schema } from "mongoose";

export type UserDocument = Document & {
  username: string;
  email: string;
  password: string;
  cart: Schema.Types.ObjectId[];
  wishlist: Schema.Types.ObjectId[];
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default mongoose.model<UserDocument>("User", UserSchema);
