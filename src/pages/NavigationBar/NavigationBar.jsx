import {
  AppBar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";
import Dashboard from "./login/Dashboard.jsx";
import { useContext } from "react";

import AllStations from "./AllStations.jsx";
import Search from "./Search";
import ChangeLanguage from "./ChangeLanguage";
import { useState } from "react";
import NavigationBarMobile from "./NavigationBarMobile.jsx";

const NavigationBar = ({ darkModeHandler }) => {
  let { language } = useContext(CartContext);
  const [darkSide, setDarkside] = useState(false);

  const darkModeHandlers = (checked) => {
    setDarkside(checked);
    darkModeHandler(!darkSide);
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "darkgreen",
        position: { xs: "static", md: "sticky" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          flexDirection: "row",
          paddingY: "3px",
        }}
      >
        <Toolbar sx={{ display: "flex", gap: "15px" }}>
          <p
            onClick={() => {
              window.location.reload();
            }}
          >
            <Link className="w-18" to={"/"}>
              {localize(language, "Home")}
            </Link>
          </p>
          <Link className="w-18" to="/about">
            {localize(language, "About")}
          </Link>
          <Link className="w-18" to="/help">
            {localize(language, "Help")}
          </Link>
        </Toolbar>

        <Toolbar sx={{ width: "450px" }}>
          <AllStations />
        </Toolbar>
        <div className="my-1">
          <ChangeLanguage />
        </div>

        <Toolbar sx={{ display: "flex", gap: "20px" }}>
          <Box>
            <DarkModeSwitch
              checked={darkSide}
              onChange={darkModeHandlers}
              style={{ color: "#CCCC00" }}
              sunColor={"#666600"}
            />
          </Box>
          <Dashboard></Dashboard>
        </Toolbar>
      </Box>
      {/* Mobile form */}
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          flexDirection: "row",
          paddingY: "8px",
        }}
      >
        <NavigationBarMobile darkModeHandler={darkModeHandler} />
      </Box>
    </AppBar>
  );
};

export default NavigationBar;
