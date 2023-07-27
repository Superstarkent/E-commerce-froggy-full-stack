import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../redux/slices/products";
import { RootState, AppDispatch } from "../../redux/store";
import ProductItem from "./ProductItem";


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
      <h1>All-range frog clothing</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={12} md={4} key={product._id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
