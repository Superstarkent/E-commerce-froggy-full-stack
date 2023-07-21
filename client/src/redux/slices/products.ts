import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ProductsState } from "../../types/type";
import { fetchProductsApi } from "../thunk/productApt";

const initialState: ProductsState = {
  items: [],
  loading: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await fetchProductsApi();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error?.message ?? null;
      });
  },
});

export default productsSlice.reducer;