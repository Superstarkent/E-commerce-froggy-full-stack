import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";

import { ProductsState, Product } from "../../types/type";
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
      .addCase(
        fetchProducts.fulfilled,
        (state, action: { payload: Product[] }) => {
          state.loading = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(
        fetchProducts.rejected,
        (state, action: { error: SerializedError | null }) => {
          state.loading = "failed";
          state.error = action.error?.message ?? null;
        }
      );
  },
}) as {
  reducer: (state: ProductsState | undefined, action: any) => ProductsState;
  actions: unknown;
  name: string;
};

export default productsSlice.reducer;
