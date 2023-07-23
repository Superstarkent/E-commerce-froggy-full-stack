import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupAsync, loginAsync, getUserAsync } from "../thunk/userThunk";
import { clearCart } from "./cart";
import { clearFavorites } from "./favorites";
import { RootState, AppDispatch, AppThunk } from "../store";
import { setCart } from "./cart";
import { setFavorites } from "./favorites";
import { CartItem, Product } from "../../types/type";
import { setUserId as setCartUserId } from "./cart";
import { setUserId as setFavoritesUserId } from "./favorites";

export interface UserState {
  userId: string | null;
  token: string | null;
  username: string | null;
  email: string | null;
  isAuthenticated: boolean;
  status: "idle" | "loading" | "failed";
}

interface AuthResponse {
  message: string;
  userId: string;
  token: string;
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
      .addCase(signupAsync.pending, (state: UserState) => {
        state.status = "loading";
      })
      .addCase(
        signupAsync.fulfilled,
        (state: UserState, action: PayloadAction<AuthResponse>) => {
          state.status = "idle";
          state.isAuthenticated = true;
          state.userId = action.payload.userId;
          state.token = action.payload.token;
          localStorage.setItem("userId", action.payload.userId);
        }
      )
      .addCase(signupAsync.rejected, (state: UserState) => {
        state.status = "failed";
      })
      .addCase(loginAsync.pending, (state: UserState) => {
        state.status = "loading";
      })
      .addCase(
        loginAsync.fulfilled,
        (state: UserState, action: PayloadAction<AuthResponse>) => {
          state.status = "idle";
          state.isAuthenticated = true;
          state.userId = action.payload.userId;
          state.token = action.payload.token;
          localStorage.setItem("userId", action.payload.userId);
        }
      )
      .addCase(loginAsync.rejected, (state: UserState) => {
        state.status = "failed";
      })
      .addCase(
        getUserAsync.fulfilled,
        (
          state: UserState,
          action: PayloadAction<{ username: string; email: string }>
        ) => {
          state.username = action.payload.username;
          state.email = action.payload.email;
        }
      );
  },
});

export const { logout } = userSlice.actions;

export const logoutAndClearData =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();

    if (state.user.userId) {
      localStorage.setItem(
        `${state.user.userId}_cart`,
        JSON.stringify(state.cart.items)
      );
      localStorage.setItem(
        `${state.user.userId}_favorites`,
        JSON.stringify(state.favorite.favorites)
      );
    }

    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearFavorites());
  };

export const saveUserDataToLocalStorage =
  (): AppThunk => async (dispatch, getState) => {
    const state = getState();

    if (state.user.userId) {
      localStorage.setItem(
        `${state.user.userId}_cart`,
        JSON.stringify(state.cart.items)
      );
      localStorage.setItem(
        `${state.user.userId}_favorites`,
        JSON.stringify(state.favorite.favorites)
      );
    }

    return Promise.resolve();
  };

export const rehydrateUserData =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();

    if (state.user.userId) {
      const cart: CartItem[] = JSON.parse(
        localStorage.getItem(`${state.user.userId}_cart`) || "[]"
      );
      const favorites: Product[] = JSON.parse(
        localStorage.getItem(`${state.user.userId}_favorites`) || "[]"
      );

      dispatch(setCart(cart));
      dispatch(setFavorites(favorites));
    }

    return Promise.resolve();
  };

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
