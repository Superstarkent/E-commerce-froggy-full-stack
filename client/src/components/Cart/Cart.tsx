import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

import CartItem from "./CartItem";
import { AppDispatch, RootState } from "../../redux/store";
import { clearCart } from "../../redux/slices/cart";
import { saveUserDataToLocalStorage } from "../../redux/slices/user";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Items are being checked out by the best frogs!");
    dispatch(clearCart());
    dispatch(saveUserDataToLocalStorage());
  };

  return (
    <div className="product-detail">
      <Box>
        <Typography variant="h4">Your Cart</Typography>
        {cart.map((item) => (
          <CartItem key={item.product._id} cartItem={item} />
        ))}
        <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      </Box>
    </div>
  );
};

export default Cart;
