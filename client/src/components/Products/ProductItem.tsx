import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import FavoriteItem from "../Favorites/FavoriteItem";
import { Props } from "../../types/type";

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-detail">
      <Card sx={{ maxWidth: 600, outline: 'none' }}>
        <CardActionArea>
          <Link
            to={`/products/${product._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
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
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold", fontSize: "20px" }}
            >
              ${product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <FavoriteItem product={product} />
      </Card>
    </div>
  );
};

export default ProductItem;
