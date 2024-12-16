import React, { useContext } from "react";
import { CartContext } from "../../../App.jsx";
import { localize } from "../../../Translation.jsx";
import styles from "./About.module.css";

const About = () => {
  let { language } = useContext(CartContext);

  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <h4 className={styles.titles}>
          {localize(language, "aboutApplication")}
        </h4>
        <p className={styles.paragraphs}>
          {localize(language, "aboutApplicationP1")}
        </p>
        <h5 className={styles.sub_titles}>
          {localize(language, "ourMission")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "ourMissionP1")}
        </p>
        <hr className={styles.deviders}></hr>
        <h4 className={styles.sub_titles}>
          {localize(language, "keyFeatures")}
        </h4>
        <h5 className={styles.sub_titles}>
          {localize(language, "interactiveMaps")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "interactiveMapsP1")}
        </p>
        <h5 className={styles.sub_titles}>
          {localize(language, "comprehensiveData")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "comprehensiveDataP1")}
        </p>
        <h5 className={styles.sub_titles}>
          {localize(language, "historicalInsights")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "historicalInsightsP1")}
        </p>
        <h5 className={styles.sub_titles}>
          {localize(language, "focusOnForests")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "focusOnForestsP1")}
        </p>
        <hr className={styles.deviders}></hr>
        <h4 className={styles.sub_titles}>
          {localize(language, "ourCommitment")}
        </h4>
        <p className={styles.paragraphs}>
          {localize(language, "ourCommitmentp1")}
        </p>
        <hr className={styles.deviders}></hr>
        <h5 className={styles.sub_titles}>
          {localize(language, "getInvolved")}
        </h5>
        <p className={styles.paragraphs}>
          {localize(language, "getInvolvedP1")}
        </p>
        <hr className={styles.deviders}></hr>
        <h5 className={styles.sub_titles}>{localize(language, "contactUs")}</h5>
        <p className={styles.paragraphs}>{localize(language, "contactUsP1")}</p>
        <p className={styles.paragraphs}>{localize(language, "contactUsP2")}</p>
      </div>
    </div>
  );
};

export default About;
