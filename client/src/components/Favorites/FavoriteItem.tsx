import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";

import { RootState } from "../../redux/store";
import { Product, Props } from "../../types/type";
import {
  addToFavorites,
  removeFromFavorite,
} from "../../redux/slices/favorites";
import { saveUserDataToLocalStorage } from "../../redux/slices/user";

const FavoriteItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const isFavorite = favorites.find((fav: Product) => fav._id === product._id);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(product._id));
    } else {
      dispatch(addToFavorites(product));
      setOpen(true);
    }
    dispatch(saveUserDataToLocalStorage());
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="add to favorites"
        onClick={handleClick}
        color={isFavorite ? "secondary" : "default"}
      >
        <FavoriteIcon />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Product has been added to wishlist!"
      />
    </div>
  );
};

export default FavoriteItem;
