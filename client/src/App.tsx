import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Login/SignUp";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/Products/ProductDetails";
import Wishlist from "./pages/WishList";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import PrivateRoute from "./components/Routing/PrivateRoute"; // Import it

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route
          path="/user-profile"
          element={<PrivateRoute element={<UserProfile />} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
