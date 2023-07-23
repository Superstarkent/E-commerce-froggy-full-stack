import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid, Box } from "@mui/material";

import FavoriteItem from "../Favorites/FavoriteItem";
import { fetchProductDetails } from "../../redux/slices/productDetails";
import { addToCart } from "../../redux/slices/cart";
import { RootState, AppDispatch } from "../../redux/store";
import { CartItem } from "../../types/type";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

const { product, loading, error } = useSelector(
  (state: RootState) => state.productDetails
);


 const handleAddToCart = () => {
   if (product) {
     const cartItem: CartItem = {
       product: product,
       quantity: 1, 
     };
     dispatch(addToCart(cartItem));
   }
 };

  if (loading === "pending") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


if (product) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={8}>
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <Link to={`/products/${product._id}`}>
              <CardMedia
                component="img"
                height="350"
                image={product.image[0]}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
              </CardContent>
            </Link>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Link to={`/products/`}>Back to Products</Link>
            </CardContent>
          </CardActionArea>
          <FavoriteItem product={product} />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
} else {
  return <div>No product found</div>;
}
}

export default ProductDetails;
