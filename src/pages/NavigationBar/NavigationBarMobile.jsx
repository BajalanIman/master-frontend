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
import {
  HelpOutlineOutlined,
  HomeOutlined,
  InfoOutlined,
} from "@mui/icons-material";

const NavigationBarMobile = ({ darkModeHandler }) => {
  let { language } = useContext(CartContext);
  const [darkSide, setDarkside] = useState(false);

  const darkModeHandlers = (checked) => {
    setDarkside(checked);
    darkModeHandler(!darkSide);
  };

  return (
    <div className="sm:max-w-[640px] flex flex-col mb-1 p-x-1">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Link to={"/"}>
          {/* {localize(language, "Home")} */}
          <HomeOutlined sx={{ width: 40, height: 40, marginTop: 2 }} />
        </Link>
        <Link to="/about">
          {/* {localize(language, "About")} */}
          <InfoOutlined sx={{ width: 40, height: 40, marginTop: 2 }} />
        </Link>
        <Link to="/help">
          {/* {localize(language, "Help")} */}
          <HelpOutlineOutlined sx={{ width: 40, height: 40, marginTop: 2 }} />
        </Link>
        <DarkModeSwitch
          checked={darkSide}
          onChange={darkModeHandlers}
          style={{ width: 40, height: 40, marginTop: 15, color: "white" }}
          sunColor={"#666600"}
        />
        <div className="mt-[-10px]">
          <ChangeLanguage />
        </div>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          width: { xs: "400px", sm: "640px" },
          marginTop: 1,
        }}
      >
        <Dashboard></Dashboard>
        <Toolbar sx={{ width: { xs: 170, md: 600 } }}>
          <AllStations />
        </Toolbar>
      </Box>
    </div>
  );
};

export default NavigationBarMobile;
