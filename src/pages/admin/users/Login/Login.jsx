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
import styles from "./Login.module.css";
import CloseBTN from "../CloseBTN";

import { BASE_URL } from "../../../../constants/constants";

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
      const response = await axios.post(`${BASE_URL}login`, {
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
    <div className={styles.login_container}>
      <h5 className={styles.login_title}>Log in to your account</h5>
      <div className={styles.box_container}>
        <CloseBTN />
        <p className={styles.error}>{errorMessage}</p>
        <form onSubmit={submitFormHandler}>
          <div className={styles.inputs_box}>
            <Input
              sx={{ width: "100%" }}
              type="text"
              value={emailValue}
              onChange={(event) => setEmailValue(event.target.value)}
              disableUnderline={true}
              placeholder="example@email.com"
            />
            <Email sx={{ marginRight: "7px", color: "gray" }} />
          </div>
          <p className={styles.inputs_info}>Please import your email</p>
          <div className={styles.inputs_box}>
            <Input
              sx={{ width: "100%" }}
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
          </div>
          <p className={styles.inputs_info}>Please write your password</p>
          <button className={styles.buttons} type="submit">
            Login
          </button>
        </form>
        <div className={styles.text_container}>
          <p className={styles.texts} onClick={forgetPasswordHandler}>
            Do you forget your information?
          </p>
          <Link to="/newuser">
            <p className={styles.texts}>Are you a new user?</p>
          </Link>
        </div>
      </div>
      {showInfoPassword && (
        <p className={styles.alert}>
          Please contact the admin <strong>(admin@hnee.de)</strong>
        </p>
      )}
    </div>
  );
};

export default Login;
