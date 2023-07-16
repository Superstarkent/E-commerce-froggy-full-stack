import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchProductDetails } from "../../redux/slices/productDetails";
import { RootState, AppDispatch } from "../../redux/store";

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

  if (loading === "pending") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (product) {
    return (
      <div>
        <h1>{product.name}</h1>
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
        <Link to={`/products/${product._id}`}>Back to Products</Link>
      </div>
    );
  } else {
    return <div>No product found</div>;
  }
}

export default ProductDetails;
