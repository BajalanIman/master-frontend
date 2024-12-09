import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";
import { Box } from "@mui/material";

const RootLayout = () => {
  const [darkSide, setDarkside] = useState(false);

  const darkModeHandler = (darkSide) => {
    setDarkside(!darkSide);
  };

  return (
    <>
      {/* <div
          className={`h-full w-full mx-auto  flex flex-col justify-top
          ${darkSide ? "dark" : ""}`}
              > 
         </div> */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: darkSide ? "rgb(31 41 55)" : "#fff",
          color: darkSide ? "#fff" : "rgb(31 41 55)",
        }}
      >
        <NavigationBar darkModeHandler={darkModeHandler} />
        <Outlet />
        <Footer></Footer>
      </Box>
    </>
  );
};
export default RootLayout;
