import React, { useContext } from "react";
import { CartContext } from "../../../App.jsx";
import { localize } from "../../../Translation.jsx";
import styles from "./About.module.css";
import { Typography } from "@mui/material";

const About = () => {
  let { language } = useContext(CartContext);

  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <Typography
          variant="h5"
          sx={{ marginTop: "30px", marginBottom: "10px", fontWeight: "bold" }}
        >
          {localize(language, "aboutApplication")}
        </Typography>
        <p className={styles.paragraphs}>
          {localize(language, "aboutApplicationP1")}
        </p>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
        >
          1. {localize(language, "ourMission")}
        </Typography>
        <p className={styles.paragraphs}>
          {localize(language, "ourMissionP1")}
        </p>
        <hr className={styles.deviders}></hr>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
        >
          2. {localize(language, "keyFeatures")}
        </Typography>
        <h5 className={styles.sub_titles}>
          2.1. {localize(language, "interactiveMaps")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "interactiveMapsP1")}
        </p>
        <h5 className={styles.sub_titles}>
          2.2. {localize(language, "comprehensiveData")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "comprehensiveDataP1")}
        </p>
        <h5 className={styles.sub_titles}>
          2.3. {localize(language, "historicalInsights")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "historicalInsightsP1")}
        </p>
        <h5 className={styles.sub_titles}>
          2.4. {localize(language, "focusOnForests")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "focusOnForestsP1")}
        </p>
        <hr className={styles.deviders}></hr>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
        >
          3. {localize(language, "ourCommitment")}
        </Typography>
        <p className={styles.paragraphs}>
          {localize(language, "ourCommitmentp1")}
        </p>
        <hr className={styles.deviders}></hr>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
        >
          4. {localize(language, "getInvolved")}
        </Typography>
        <p className={styles.paragraphs}>
          {localize(language, "getInvolvedP1")}
        </p>
        <hr className={styles.deviders}></hr>
        <Typography
          variant="h6"
          sx={{ marginTop: 2, marginBottom: 1, fontWeight: "bold" }}
        >
          5. {localize(language, "contactUs")}
        </Typography>
        <p className={styles.paragraphs}>{localize(language, "contactUsP1")}</p>
        <p className={styles.paragraphs}>{localize(language, "contactUsP2")}</p>
      </div>
    </div>
  );
};

export default About;
