import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/products";
import productDetailsReducer from "./slices/productDetails";
import userReducer from "../redux/slices/user"
import cartReducer from "./slices/cart";
import favoritesReducer from "./slices/favorites";

const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
