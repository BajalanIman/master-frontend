import {
  Visibility,
  VisibilityOff,
  Email,
  Person,
  Person3,
  PhoneIphone,
} from "@mui/icons-material";
import { Box, Button, Typography, Input } from "@mui/material";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseBTN from "./CloseBTN";

import PopupEnrolment from "./PopupEnrolment";
import axios from "axios";
import { BASE_URL } from "../../../constants/constants";

const NewUsers = () => {
  const [nameValue, setNameValue] = useState("");
  const [familyValue, setFamilyValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setinputPassword] = useState("password");

  const navigate = useNavigate();

  const onChangeNameHandeler = (event) => {
    setNameValue(event.target.value);
  };
  const onChangeFamilyHandeler = (event) => {
    setFamilyValue(event.target.value);
  };
  const onChangePhoneHandeler = (event) => {
    setPhoneValue(event.target.value);
  };

  const onChangeEmailHandeler = (event) => {
    setEmailValue(event.target.value);
  };

  const onChangePasswordHandeler = (event) => {
    setPasswordValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    if (!emailValue.includes("@") || !emailValue.includes(".com")) {
      event.preventDefault();
      setErrorMessage("Your email is not correct!");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } else if (passwordValue.length < 7) {
      event.preventDefault();
      setErrorMessage("Your password is not correct!");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } else if (
      !emailValue.length ||
      !nameValue.length ||
      !familyValue.length ||
      !passwordValue.length ||
      !phoneValue.length
    ) {
      event.preventDefault();
      setErrorMessage("You must fill in all of the empty fields!");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } else {
      event.preventDefault();
      // setEmailValue("");
      // setPasswordValue("");
      // localStorage.setItem("username", emailValue);
      // localStorage.setItem("password", passwordValue);
      // const { password, first_name, last_name, phone_number, email, role } =
      const data = {
        password: passwordValue,
        first_name: nameValue,
        last_name: familyValue,
        phone_number: phoneValue,
        email: emailValue,
        role: "normal",
      };
      axios.post(`${BASE_URL}users`, data).then((res) => {
        console.log(res.data);
        if (res.data.message == "Record inserted successfully") {
          setPasswordValue("");
          setNameValue("");
          setFamilyValue("");
          setPhoneValue("");
          setEmailValue("");
          localStorage.setItem("name", nameValue);
          localStorage.setItem("username", emailValue);
          localStorage.setItem("password", passwordValue);
          setOpen(true);
        }
      });
    }
  };

  const showPasswordHandler = () => {
    if (showPassword) {
      setShowPassword(false);
      setinputPassword("password");
    }
    if (!showPassword) {
      setShowPassword(true);
      setinputPassword("text");
    }
  };

  let inputClassStyle = {
    display: "flex",
    justifyContent: "space-between",

    gap: "30px",
    alignItems: "center",
    border: "1px solid ",
    borderColor: "darkgreen",
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
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const linkStyle = {
    textDecoration: "underline",
    color: "blue",
    marginLeft: "5px",
  };

  return (
    <>
      <div className="w-full h-screen justify-center items-center flex flex-col mt-14 mb-32">
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "15px",
            fontFamily: "Abril Fatface",
            fontWeight: 300,
          }}
        >
          Create account
        </Typography>

        <Box
          sx={{
            width: {
              xs: "300px",
              sm: "400px",
              md: "400px",
              lg: "450px",
              xl: "500",
            },
            paddingY: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderColor: "lightgray",
            borderRadius: "7px",
            boxShadow: "3px 3px  lightgray",
            position: "relative",
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
            <Box sx={inputClassStyle}>
              <Input
                type={"text"}
                value={nameValue}
                onChange={onChangeNameHandeler}
                disableUnderline={true}
                placeholder={"Name"}
              />
              <Person sx={{ marginRight: "7px", color: "gray" }} />
            </Box>
            <Typography sx={{ marginLeft: "20px", marginBottom: "30px" }}>
              {"Please write your name"}
            </Typography>
            <Box sx={inputClassStyle}>
              <Input
                type={"text"}
                value={familyValue}
                onChange={onChangeFamilyHandeler}
                disableUnderline={true}
                placeholder={"Last name"}
              />
              <Person3 sx={{ marginRight: "7px", color: "gray" }} />
            </Box>
            <Typography sx={{ marginLeft: "20px", marginBottom: "30px" }}>
              {"Please write your last name"}
            </Typography>
            <Box sx={inputClassStyle}>
              <Input
                type={"text"}
                value={phoneValue}
                onChange={onChangePhoneHandeler}
                disableUnderline={true}
                placeholder={"Phone number"}
              />
              <PhoneIphone sx={{ marginRight: "7px", color: "gray" }} />
            </Box>
            <Typography sx={{ marginLeft: "20px", marginBottom: "30px" }}>
              {"Please write your phone number"}
            </Typography>
            <Box sx={inputClassStyle}>
              <Input
                type={"text"}
                value={emailValue}
                onChange={onChangeEmailHandeler}
                disableUnderline={true}
                placeholder={"example@email.com"}
              />
              <Email sx={{ marginRight: "7px", color: "gray" }} />
            </Box>
            <Typography sx={{ marginLeft: "20px", marginBottom: "30px" }}>
              {"Please import your email"}
            </Typography>
            <Box sx={inputClassStyle}>
              <Input
                type={inputPassword}
                value={passwordValue}
                onChange={onChangePasswordHandeler}
                disableUnderline={true}
                placeholder="Set password"
              ></Input>
              <Button
                onClick={showPasswordHandler}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                {showPassword && <Visibility />}
                {!showPassword && <VisibilityOff sx={{ color: "gray" }} />}
              </Button>
            </Box>
            <Typography sx={{ marginLeft: "20px" }}>
              {"Please write your password"}
            </Typography>
            <Box>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "green",
                  height: "50px",
                  width: {
                    xs: "270px",
                    sm: "330px",
                    md: "350px",
                    lg: "380px",
                    xl: "380px",
                  },
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  marginTop: "50px",
                  ":hover": {
                    backgroundColor: "#2E8B57",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
          <Link to="/">
            <Button
              sx={{
                backgroundColor: "#4169E1",
                height: "50px",
                width: {
                  xs: "270px",
                  sm: "330px",
                  md: "350px",
                  lg: "380px",
                  xl: "380px",
                },
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                marginTop: "20px",
                ":hover": {
                  backgroundColor: "#6495ED",
                },
              }}
            >
              Cancel
            </Button>
          </Link>
          <Typography sx={{ marginLeft: "20px", marginTop: "30px" }}>
            {"Already a member?"}
            <Link style={linkStyle} to={"/login"}>
              Sign in
            </Link>
          </Typography>
        </Box>
        <PopupEnrolment open={open} onClose={handleClose}></PopupEnrolment>
      </div>
    </>
  );
};

export default NewUsers;
