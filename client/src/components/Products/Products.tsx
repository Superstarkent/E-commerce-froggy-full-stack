import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slices/products";
import { RootState, AppDispatch } from "../../redux/store";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";

function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading === "pending") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
