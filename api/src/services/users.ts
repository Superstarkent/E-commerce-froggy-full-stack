import jwt from "jsonwebtoken";

import User from "../models/user"

export function generateToken(user: any) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1d" });
}

export async function findUserByEmail(email: string) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}