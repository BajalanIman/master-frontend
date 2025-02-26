import { Box, Divider, Typography } from "@mui/material";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";

import React, { useContext } from "react";
import styles from "./Help.module.css";

const Help = () => {
  let { language } = useContext(CartContext);

  return (
    <div className={styles.help_container}>
      <div className={styles.help}>
        <Typography
          variant="h5"
          sx={{ marginTop: "30px", marginBottom: "10px", fontWeight: "bold" }}
        >
          {localize(language, "helpNavigating")}
        </Typography>
        <p className={styles.paragraphs}>
          {localize(language, "helpNavigatingP")}
        </p>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
        >
          1. {localize(language, "gettingStarted")}
        </Typography>
        <p className={styles.paragraphs}>
          {localize(language, "gettingStartedP")}
        </p>
        <h4 className={styles.sub_titles}>
          {"1.1. "} {localize(language, "exploreFeatures")}
        </h4>
        <p className={styles.paragraphs}>
          {localize(language, "exploreFeaturesP")}
        </p>
        <h4 className={styles.sub_titles}>
          {"1.2. "} {localize(language, "navigatingDashboard")}
        </h4>
        <p className={styles.paragraphs}>
          {localize(language, "navigatingDashboardP")}
        </p>
        <h4 className={styles.sub_titles}>
          {"1.3. "} {localize(language, "interactiveMapsHelp")}
        </h4>
        <p className={styles.paragraphs}>
          {localize(language, "interactiveMapsHelpP1")}
        </p>
        <h4 className={styles.sub_titles}>
          {"1.4. "} {localize(language, "accessingData")}
        </h4>
        <p className={styles.paragraphs}>
          {localize(language, "accessingDataP1")}
        </p>
        <hr className={styles.deviders}></hr>{" "}
        <Typography
          variant="h6"
          sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
        >
          2. {localize(language, "frequentlyAskedQuestions")}
        </Typography>
        <h5 className={styles.sub_titles}>
          2.1. {localize(language, "howFrequentlyUpdated")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "howFrequentlyUpdatedP1")}{" "}
        </p>
        <h5 className={styles.sub_titles}>
          2.2. {localize(language, "canAccessHistoricalData")}{" "}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "canAccessHistoricalDataP1")}
        </p>
        <h5 className={styles.sub_titles}>
          2.3 {localize(language, "HowCanInterpretDat")}{" "}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "HowCanInterpretDatP1")}
        </p>
        <h5 className={styles.sub_titles}>
          2.4. {localize(language, "accessibleMobileDevices")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "accessibleMobileDevicesP1")}{" "}
        </p>
      </div>
    </div>
  );
};

export default Help;
