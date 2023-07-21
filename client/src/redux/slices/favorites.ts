import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, FavoriteState } from "../../types/type";

const initialState: FavoriteState = {
  favorites: [],
  userId: null,
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const productIndex = state.favorites.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex === -1) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      const index = state.favorites.findIndex(
        (product) => product._id === action.payload
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    clearFavorites: (state) => {
      state.favorites = [];
      state.userId = null;
    },
  },
});

export const { addToFavorites, removeFromFavorite, setUserId, clearFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
