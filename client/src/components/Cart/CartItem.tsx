import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { CartItem as CartItemType, Product } from "../../types/type";
import { addToCart, removeFromCart } from "../../redux/slices/cart";
import { saveUserDataToLocalStorage } from "../../redux/slices/user";
import { AppDispatch } from "../../redux/store";

type Props = {
  cartItem: CartItemType;
};

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(cartItem));
    dispatch(saveUserDataToLocalStorage());
  };

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
    dispatch(saveUserDataToLocalStorage());
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={cartItem.product.image[0]}
        alt={cartItem.product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cartItem.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {cartItem.quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${(cartItem.quantity * cartItem.product.price).toFixed(2)}
        </Typography>
        <Button onClick={() => handleAddToCart(cartItem.product)}>
          Increase Quantity
        </Button>
        <Button onClick={() => handleRemoveFromCart(cartItem.product._id)}>
          Decrease Quantity
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
