import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import FavoriteItem from "../Favorites/FavoriteItem";
import { fetchProductDetails } from "../../redux/slices/productDetails";
import { addToCart } from "../../redux/slices/cart";
import { RootState, AppDispatch } from "../../redux/store";
import { CartItem } from "../../types/type";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedItem, setSelectedItem] = useState(0);

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
        <Grid item xs={2} md={2}>
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.name}
              onClick={() => setSelectedItem(index)}
              style={{ cursor: "pointer", width: "100%", margin: "10px 0" }}
            />
          ))}
        </Grid>
        <Grid item xs={10} md={10}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
              </CardContent>
              <Carousel
                selectedItem={selectedItem}
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                showThumbs={false}
                emulateTouch={true}
              >
                {product.image.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={product.name} />
                  </div>
                ))}
              </Carousel>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
                <Link to={`/products/`}>Back to Products</Link>
              </CardContent>
            </CardActionArea>
            <FavoriteItem product={product} />
            <Box display="flex" justifyContent="center">
              <Button variant="contained" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    );
  } else {
    return <div>No product found</div>;
  }
}

export default ProductDetails;
