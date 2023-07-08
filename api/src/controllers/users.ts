// controllers/users.ts

import { Request, Response } from "express";
import User, { UserDocument } from "../models/user";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "A new frog has registered succesfully ribbit" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Sadly our frogs could not register you. Please try again!" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user: UserDocument | null = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare the passwords
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Frog logged in successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while logging in the frog" });
  }
};
