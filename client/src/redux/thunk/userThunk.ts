import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { CartItem, SignupData, LoginData } from "../../types/type";
import { RootState } from "../store";
import { setUserId as setCartUserId } from "../slices/cart";
import { setUserId as setFavoritesUserId } from "../slices/favorites";

export const signupAsync = createAsyncThunk(
  "user/signup",
  async (userData: SignupData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        userData
      );
      dispatch(setCartUserId(response.data.userId));
      dispatch(setFavoritesUserId(response.data.userId));
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        let error: AxiosError = err as AxiosError;
        return rejectWithValue(error.response?.data);
      }
      throw err; 
    }
  }
);

export const loginAsync = createAsyncThunk(
  "user/login",
  async (userData: LoginData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        userData
      );
      dispatch(setCartUserId(response.data.userId));
      dispatch(setFavoritesUserId(response.data.userId));
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        let error: AxiosError = err as AxiosError;
        return rejectWithValue(error.response?.data);
      }
      throw err; 
    }
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
       const token = state.user.token;

       if (!userId || !token) {
         throw new Error("User is not logged in");
       }

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



