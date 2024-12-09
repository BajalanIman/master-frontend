import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Visibility, VisibilityOff, Email } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  Input,
  Alert,
  AlertTitle,
} from "@mui/material";

import CloseBTN from "./CloseBTN";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("password");
  const [showInfoPassword, setShowInfoPassword] = useState(false);

  const navigate = useNavigate();

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
    setInputPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (emailValue.length < 4 || !emailValue.includes("@")) {
      setErrorMessage("Your email is not correct!");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }
    if (passwordValue.length < 7) {
      setErrorMessage("Your password is not correct!");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8800/login`, {
        email: emailValue,
        password: passwordValue,
      });

      if (response.data.user) {
        console.log(1234567);
        localStorage.setItem("name", response.data.user.first_name);
        localStorage.setItem("username", response.data.user.email);
        localStorage.setItem("password", response.data.user.password);
        localStorage.setItem("role", response.data.user.role);
        setEmailValue("");
        setPasswordValue("");
        navigate("/");
        window.location.reload();
      } else {
        console.log("Login failed");
        setErrorMessage("Login failed. Please check your credentials.");
        setTimeout(() => setErrorMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorMessage("An error occurred during login. Please try again.");
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  const forgetPasswordHandler = () => {
    setShowInfoPassword(true);
    setTimeout(() => setShowInfoPassword(false), 4000);
  };

  return (
    <div className="w-full h-screen justify-center items-center flex flex-col">
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          paddingBottom: 6,
          fontFamily: "Abril Fatface",
          fontWeight: 300,
        }}
      >
        Log in to your account
      </Typography>
      <Box
        sx={{
          width: {
            xs: "300px",
            sm: "400px",
            md: "400px",
            lg: "450px",
            xl: "500px",
          },
          height: {
            xs: "420px",
            sm: "470px",
            md: "470px",
            lg: "470px",
            xl: "470px",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
          borderColor: "lightgray",
          borderRadius: "7px",
          boxShadow: "3px 3px lightgray",
          position: "relative",
          paddingTop: 4,
        }}
      >
        <CloseBTN />
        <Typography
          variant="p"
          sx={{
            color: "red",
            display: "flex",
            position: "absolute",
            top: "0",
            marginTop: "20px",
          }}
        >
          {errorMessage}
        </Typography>
        <form onSubmit={submitFormHandler}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              alignItems: "center",
              border: "1px solid",
              borderColor: "darkgreen",
              "&:hover": {
                borderColor: "darkgreen",
              },
              borderRadius: "10px",
              height: "50px",
              width: {
                xs: "270px",
                sm: "330px",
                md: "350px",
                lg: "380px",
                xl: "380px",
              },
              paddingX: "20px",
            }}
          >
            <Input
              type="text"
              value={emailValue}
              onChange={(event) => setEmailValue(event.target.value)}
              disableUnderline={true}
              placeholder="example@email.com"
            />
            <Email sx={{ marginRight: "7px", color: "gray" }} />
          </Box>
          <Typography sx={{ marginLeft: "20px", marginBottom: "30px" }}>
            Please import your email
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              alignItems: "center",
              border: "1px solid",
              borderColor: "darkgreen",
              "&:hover": {
                borderColor: "darkgreen",
              },
              borderRadius: "10px",
              height: "50px",
              width: {
                xs: "270px",
                sm: "330px",
                md: "350px",
                lg: "380px",
                xl: "380px",
              },
              paddingX: "20px",
            }}
          >
            <Input
              type={inputPassword}
              value={passwordValue}
              onChange={(event) => setPasswordValue(event.target.value)}
              disableUnderline={true}
              placeholder="password"
            />
            <Button
              onClick={showPasswordHandler}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              {showPassword ? (
                <Visibility />
              ) : (
                <VisibilityOff sx={{ color: "gray" }} />
              )}
            </Button>
          </Box>
          <Typography sx={{ marginLeft: "20px" }}>
            Please write your password
          </Typography>
          <Button
            type="submit"
            sx={{
              width: {
                xs: "270px",
                sm: "330px",
                md: "350px",
                lg: "380px",
                xl: "380px",
              },
              backgroundColor: "green",
              height: "50px",
              color: "white",
              fontWeight: "bold",
              borderRadius: "10px",
              marginTop: "30px",
              ":hover": {
                backgroundColor: "green",
              },
            }}
          >
            Login
          </Button>
        </form>
        <Box
          sx={{
            width: "100%",
            marginTop: "30px",
            paddingLeft: "10%",
            color: "blue",
          }}
        >
          <Typography
            onClick={forgetPasswordHandler}
            sx={{
              cursor: "pointer",
              ":hover": {
                color: "lightblue",
                fontStyle: "oblique",
                textDecoration: "underline",
              },
            }}
          >
            Do you forget your information?
          </Typography>
          <Link to="/newuser">
            <Typography
              sx={{
                cursor: "pointer",
                ":hover": {
                  color: "lightblue",
                  fontStyle: "oblique",
                  textDecoration: "underline",
                },
              }}
            >
              Are you a new user?
            </Typography>
          </Link>
        </Box>
      </Box>
      {showInfoPassword && (
        <Alert
          severity="info"
          sx={{
            width: "40vh",
            borderRadius: "10px",
            borderColor: "red",
            position: "absolute",
            top: "3",
          }}
        >
          <AlertTitle>
            <strong>Info</strong>
          </AlertTitle>
          Please contact the admin — <strong>admin@hnee.de</strong>
        </Alert>
      )}
    </div>
  );
};

export default Login;
