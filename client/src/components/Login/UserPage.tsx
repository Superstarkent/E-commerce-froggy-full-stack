import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { selectUser, logoutAndClearData } from "../../redux/slices/user";
import { getUserAsync } from "../../redux/thunk/userThunk";

function UserPage() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutAndClearData());
    navigate("/login");
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default UserPage;
