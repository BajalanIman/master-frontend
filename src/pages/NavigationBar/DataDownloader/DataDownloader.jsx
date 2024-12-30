import React, { useContext } from "react";
import styles from "./DataDownloader.module.css";
import StationsData from "./Stations/StationsData";
import { Divider } from "@mui/material";

import { CartContext } from "../../../App.jsx";
import { localize } from "../../../Translation.jsx";

const DataDownloader = () => {
  let { language } = useContext(CartContext);

  return (
    <div className={styles.download_page}>
      <div className={styles.download_container}>
        <h5 className={styles.titles}>
          {localize(language, "dataDownloadWelcome")}
        </h5>
        <StationsData
          variable={"Soil"}
          endPoint={"soil_measurements"}
          attribute={"soil_attribute"}
          attributeId={"soil_attribute_id"}
          attributeName={"soil_attribute_name"}
          attributeUnit={"soil_attribute_unit"}
        />
        <Divider
          sx={{
            bgcolor: "darkGray",
            width: "300px",
            bgcolor: "blue",
            mt: 5,
          }}
        />
        <StationsData
          variable={"Climate"}
          endPoint={"climate_measurements"}
          attribute={"climate_attribute"}
          attributeId={"climate_attribute_id"}
          attributeName={"climate_attribute_name"}
          attributeUnit={"climate_attribute_unit"}
        />
      </div>
    </div>
  );
};

export default DataDownloader;
