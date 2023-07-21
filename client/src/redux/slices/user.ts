import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { signupAsync, loginAsync, getUserAsync } from "../thunk/userThunk";
import { clearCart } from "./cart";
import { clearFavorites } from "./favorites"
import { RootState } from "../store";


export interface UserState {
  userId: string | null;
  token: string | null;
  username: string | null;
  email: string | null;
  isAuthenticated: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  userId: null,
  token: null,
  username: null,
  email: null,
  isAuthenticated: false,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isAuthenticated = true;
        state.username = action.payload.username;
        state.userId = action.payload.userId;
        state.token = action.payload.token;
      })
      .addCase(signupAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isAuthenticated = true;
        state.username = action.payload.username;
        state.userId = action.payload.userId;
        state.token = action.payload.token;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
      });
  },
});

export const { logout } = userSlice.actions;

export const logoutAndClearData = () => (dispatch: AppDispatch) => {
  dispatch(logout());
  dispatch(clearCart());
  dispatch(clearFavorites());
};

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
