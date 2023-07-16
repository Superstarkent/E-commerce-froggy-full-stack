import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Login/SignUp";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
