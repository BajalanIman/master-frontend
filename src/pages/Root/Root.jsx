import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import styles from "./Root.module.css";

const RootLayout = () => {
  const [darkSide, setDarkside] = useState(false);

  const darkModeHandler = (darkSide) => {
    setDarkside(!darkSide);
  };

  return (
    <>
      <div
        className={`${styles.rootContainer} ${
          darkSide ? styles.darkMode : styles.lightMode
        }`}
      >
        <NavigationBar darkModeHandler={darkModeHandler} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default RootLayout;
