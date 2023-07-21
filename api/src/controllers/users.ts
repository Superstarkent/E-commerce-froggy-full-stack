import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../services/users";

import User, { UserDocument } from "../models/user";



export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await User.findOne({ username });

    if (userExists) {
      return res
        .status(400)
        .json({ message: "A user with this username already exists" });
    }

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    const token = generateToken(user);

    res.status(201).json({
      message: "A new frog has registered successfully ribbit",
      userId: user._id,
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Sadly our frogs could not register you. Please try again!",
    });
  }
};



export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const userWithPassword: UserDocument | null = await User.findOne({ email });

    if (!userWithPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(
      password,
      userWithPassword.password
    );

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user: UserDocument | null = await User.findOne({ email }).select(
      "-password"
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const token = generateToken(user);

    res.status(200).json({
      message: "Frog logged in successfully",
      userId: user._id,
      token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while logging in the frog" });
  }
};



export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ username: user.username, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while getting the user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updateData = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user" });
  }
};

