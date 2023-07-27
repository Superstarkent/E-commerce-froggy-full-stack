import { useEffect, useState } from "react";
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
    let descriptionText = product.description
      .split(" ")
      .map((word, index) => ((index + 1) % 10 === 0 ? word + "\n" : word))
      .join(" ");

    return (
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={2} md={2} container justifyContent="center">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                onClick={() => setSelectedItem(index)}
                style={{
                  cursor: "pointer",
                  width: "30%",
                  height: "auto",
                  margin: "5px 0",
                }}
              />
            ))}
          </div>
        </Grid>
        <Grid item xs={10} md={10} style={{ marginLeft: "-100px" }}>
          <Card sx={{ maxWidth: 600, maxHeight: 1060 }}>
            <CardActionArea>
              <CardContent></CardContent>
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
            </CardActionArea>
          </Card>
          <CardContent
            style={{ position: "absolute", bottom: 420, left: 1355 }}
          >
            <Typography variant="body2" color="text.secondary" fontSize="30px">
              ${product.price}
            </Typography>
            <Link to={`/products/`}>Back to Products</Link>
          </CardContent>
          <Box
            display="flex"
            justifyContent="center"
            style={{ position: "absolute", bottom: 350, right: 410 }}
          >
            <Button variant="contained" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <CardContent style={{ position: "absolute", bottom: 0, right: 300 }}>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="product-description" 
              >
                {descriptionText}
              </Typography>
            </CardContent>
            <CardContent
              style={{ position: "absolute", bottom: 480, right: 690 }}
            >
              <FavoriteItem product={product} />
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    );
  } else {
    return <div>No product found</div>;
  }
}

export default ProductDetails;
