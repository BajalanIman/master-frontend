import { Typography } from "@mui/material";
import React from "react";

const TextInBody = ({ variant, text, titleStyle }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        ...titleStyle,
        paddingX: 2,
      }}
    >
      {text}
    </Typography>
  );
};

export default TextInBody;
