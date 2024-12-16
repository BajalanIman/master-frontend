import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";
import Dashboard from "../login/Dashboard.jsx";
import { useContext } from "react";

import AllStations from "../AllStations.jsx";
import ChangeLanguage from "../ChangeLanguage.jsx";
import { useState } from "react";
import NavigationBarMobile from "../NavigationBarMobile/NavigationBarMobile.jsx";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({ darkModeHandler }) => {
  let { language } = useContext(CartContext);
  const [darkSide, setDarkside] = useState(false);

  const darkModeHandlers = (checked) => {
    setDarkside(checked);
    darkModeHandler(!darkSide);
  };
  return (
    <div className={styles.navigation_container}>
      <div className={styles.navigation_large_screen}>
        <p
          onClick={() => {
            window.location.reload();
          }}
        >
          <Link to={"/"}>{localize(language, "Home")}</Link>
        </p>
        <Link to="/about">{localize(language, "About")}</Link>
        <Link to="/help">{localize(language, "Help")}</Link>
        <AllStations />
        <ChangeLanguage />
        <DarkModeSwitch
          checked={darkSide}
          onChange={darkModeHandlers}
          style={{ color: "#CCCC00" }}
          sunColor={"#666600"}
        />
        <Dashboard />
      </div>
      {/* Mobile form */}
      <div className={styles.navigation_mobile_container}>
        <NavigationBarMobile darkModeHandler={darkModeHandler} />
      </div>
    </div>
  );
};

export default NavigationBar;
