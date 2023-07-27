import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectUser } from "../../redux/slices/user"; 

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useSelector(selectUser);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
