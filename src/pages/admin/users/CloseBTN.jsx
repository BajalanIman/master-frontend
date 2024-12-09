import { Visibility, VisibilityOff, Email, Close } from "@mui/icons-material";
import { Typography } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const CloseBTN = () => {
  return (
    <>
      {" "}
      <Typography
        sx={{
          display: "flex",
          position: "absolute",
          right: "0",
          top: "0",
          marginTop: "6px",
          marginRight: "10px",
          ":hover": {
            backgroundColor: "lightgray",
          },
        }}
      >
        <Link to="/">
          <Close />
        </Link>
      </Typography>
    </>
  );
};

export default CloseBTN;
