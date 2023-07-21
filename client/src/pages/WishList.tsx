import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { RootState } from "../redux/store";

import ProductItem from "../components/Products/ProductItem";

const Wishlist: React.FC = () => {
  const favourites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  return (
    <div>
      <Grid container spacing={3}>
        {favourites.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Wishlist;
