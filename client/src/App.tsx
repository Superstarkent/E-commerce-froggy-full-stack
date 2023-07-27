import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wishlist from "./pages/WishList";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import PrivateRoute from "./components/Routing/PrivateRoute"; 
import { rehydrateUserData } from "./redux/slices/user"
import { AppDispatch } from "./redux/store";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Productspage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import About from "./pages/About";


function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(rehydrateUserData());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <div className="main-content"> 
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/products" element={<Productspage />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route
            path="/user-profile"
            element={<PrivateRoute element={<UserProfile />} />}
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
