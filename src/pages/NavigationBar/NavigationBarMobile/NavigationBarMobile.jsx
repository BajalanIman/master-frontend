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

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";
import Dashboard from "../login/Dashboard.jsx";
import { useContext } from "react";

import AllStations from "../AllStations.jsx";
import ChangeLanguage from "../ChangeLanguage.jsx";
import { useState } from "react";
import {
  HelpOutlineOutlined,
  HomeOutlined,
  InfoOutlined,
} from "@mui/icons-material";

import styles from "./NavigationBarMobile.module.css";
import HomeSVG from "../../Icons/HomeSVG.jsx";
import InfoSVG from "../../Icons/InfoSVG.jsx";
import Question from "../../Icons/Question.jsx";

const NavigationBarMobile = ({ darkModeHandler }) => {
  let { language } = useContext(CartContext);
  const [darkSide, setDarkside] = useState(false);

  const darkModeHandlers = (checked) => {
    setDarkside(checked);
    darkModeHandler(!darkSide);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.toolbar}>
        <Link to={"/"}>
          <HomeSVG width={"30px"} />
        </Link>
        <Link to="/about">
          <InfoSVG width={"30px"} />
        </Link>
        <Link to="/help">
          <Question width={"30px"} />
        </Link>
        <DarkModeSwitch
          checked={darkSide}
          onChange={darkModeHandlers}
          style={{ width: 30, height: 30, color: "white" }}
          sunColor={"#666600"}
        />
        <div>
          <ChangeLanguage />
        </div>
      </div>
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
