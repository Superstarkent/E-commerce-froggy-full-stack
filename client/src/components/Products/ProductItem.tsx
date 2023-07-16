import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/type";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  product: Product;
};



const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-detail">
      <Link to={`/products/${product._id}`}>
        <Card sx={{ maxWidth: 600, backgroundColor: "#3F497F" }}>
          <CardActionArea>
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
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default ProductItem;

