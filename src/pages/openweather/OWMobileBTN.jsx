import { Box, Button, Fab, Typography } from "@mui/material";
import React from "react";
import * as Icons from "@mui/icons-material";
import { Link } from "react-router-dom";

const OWMobileBTN = ({
  size,
  Color,
  bgColor,
  icon,
  text,
  ariaLabel,

  handler,
}) => {
  const IconComponent = Icons[icon];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: "6px",
        }}
      >
        <Fab
          size={size}
          style={{
            backgroundColor: bgColor,
            color: Color,
            border: "1px solid",
            borderColor: "green",
          }}
          aria-label={ariaLabel}
        >
          <IconComponent />
        </Fab>
        {text && (
          <Button
            onClick={handler}
            sx={{
              bgcolor: "green",
              color: "white",
              width: 120,
              display: "flex",
              justifyContent: "start",
              border: "1px solid lightgreen",
              borderRadius: "15px 0px 15px 0px",
              ":hover": { bgcolor: "green" },
              ":active": { color: "green" },
            }}
          >
            {text}
          </Button>
        )}
      </Box>
      {/* <Box
        sx={{
          position: "fixed",
          display: "flex",
          bottom: 32,
          left: 12,
          zIndex: 9999,
        }}
      ></Box> */}
    </div>
  );
};

export default OWMobileBTN;
