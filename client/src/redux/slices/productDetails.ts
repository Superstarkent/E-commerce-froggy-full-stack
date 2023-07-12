import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ProductDetailsState } from "../../types/type";
import { fetchProductDetailsApi } from "../thunk/productDetailsApi";

const initialState: ProductDetailsState = {
  product: null,
  loading: "idle",
  error: null,
};

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchProductDetails",
  async (_id: string) => {
    return await fetchProductDetailsApi(_id);
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.product = action.payload;
        state.error = null;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || null;;
      });
  },
});

export default productDetailsSlice.reducer;
