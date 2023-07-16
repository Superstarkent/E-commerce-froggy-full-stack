import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { signupAsync } from "../../redux/thunk/userThunk";
import { selectUser } from "../../redux/slices/user";
import { AppDispatch } from "../../redux/store";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
const { status, isAuthenticated } = useSelector(selectUser);


  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signupAsync({ email, password }));
  };

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={status === "loading"}
        required
      />
      {status === "failed" && <div>Failed to sign up.</div>}
      <Button type="submit" disabled={status === "loading"}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
