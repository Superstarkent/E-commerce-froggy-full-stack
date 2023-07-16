import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupAsync = createAsyncThunk(
  "user/signup",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:8000/users/register", {
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
