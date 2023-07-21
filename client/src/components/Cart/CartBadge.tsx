import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

import { RootState } from "../../redux/store";

const CartBadge: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Typography variant="h6" color="primary">
      {cartItems.reduce((count, item) => count + item.quantity, 0)}
    </Typography>
  );
};

export default CartBadge;
