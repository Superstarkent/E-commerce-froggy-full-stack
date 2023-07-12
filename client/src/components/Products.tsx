import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../redux/slices/products";
import { RootState, AppDispatch } from "../redux/store";

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
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <div>
            {product.image.map((img, index) => (
              <img key={index} src={img} alt={product.name} />
            ))}
          </div>
          <div>
            {product.colors.map((color, index) => (
              <p key={index}>{color}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
