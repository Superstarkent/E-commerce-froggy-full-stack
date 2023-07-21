import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem } from "../../types/type";
import { RootState } from "../store";

export const signupAsync = createAsyncThunk(
  "user/signup",
  async ({ username, email, password }: { username: string; email: string; password: string }) => {
    const response = await axios.post("http://localhost:8000/users/register", {
      username,
      email,
      password,
    });

    return response.data;
  }
);

export const loginAsync = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:8000/users/login", {
      email,
      password,
    });

    return response.data;
  }
);

export const createOrderAsync = createAsyncThunk(
  "user/createOrder",
  async (order: { userId: string; products: CartItem[] }) => {
    const response = await axios.post("http://localhost:8000/orders", order);
    return response.data;
  }
);

export const getUserAsync = createAsyncThunk(
  "user/getUser",
  async (_, { getState }) => {
    const state = getState() as RootState; 
    const userId = state.user.userId;

    const response = await axios.get(`http://localhost:8000/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    });
    return response.data;
  }
);

export const addProductToCartAsync = createAsyncThunk(
  "user/addProductToCart",
  async ({ userId, productId }: { userId: string; productId: string }) => {
    const response = await axios.post(
      `http://localhost:8000/users/${userId}/cart`,
      {
        productId,
      }
    );

    return response.data;
  }
);

export const loadUserCartAsync = createAsyncThunk(
  "user/loadUserCart",
  async (userId: string) => {
    const response = await axios.get(
      `http://localhost:8000/users/${userId}/cart`
    );
    return response.data;
  }
);


