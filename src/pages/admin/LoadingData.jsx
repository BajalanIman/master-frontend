import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import React from "react";
import { Typography } from "@mui/material";

const LoadingData = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "lightgray",
        opacity: "90%",
        zIndex: 10,
      }}
    >
      <Typography variant="h6">Loading ...</Typography>

      <div style={{ position: "relative", width: 100, height: 100 }}>
        {/* Gray CircularProgress background */}
        <CircularProgress
          size={100}
          thickness={8}
          variant="determinate"
          value={100}
          style={{ color: "gray", borderRadius: "100%" }}
        />
        {/* Green CircularProgress for progress */}
        <CircularProgress
          size={100}
          thickness={8}
          value={54}
          style={{
            color: "green",
            borderColor: "red",
            borderRadius: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
    </Box>
  );
};

export default LoadingData;
