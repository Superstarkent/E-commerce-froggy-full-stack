import { Middleware } from "@reduxjs/toolkit";


export const localStorageMiddleware: Middleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action); 
    const state = getState();

    const actionsTriggeringLocalStorageUpdate = [
      "cart/addItem",
      "cart/removeItem",
      "favorites/addFavorite",
      "favorites/removeFavorite",
    ];

    if (actionsTriggeringLocalStorageUpdate.includes(action.type)) {
      localStorage.setItem("cart", JSON.stringify(state.cart.items));
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorite.favorites)
      );
    }

    return result;
  };
