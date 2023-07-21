import React, { SyntheticEvent } from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";


type CartSnackBarProps = {
  open: boolean;
  handleClose: (
    event: SyntheticEvent | Event,
    reason: SnackbarCloseReason
  ) => void;
};

const CartSnackBar: React.FC<CartSnackBarProps> = ({ open, handleClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={
        <span>
Product is IN
        </span>
      }
    />
  );
};

export default CartSnackBar;
