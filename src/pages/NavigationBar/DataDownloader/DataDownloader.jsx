import React from "react";
import styles from "./DataDownloader.module.css";
import StationsData from "./Stations/StationsData";
import { Divider } from "@mui/material";

const DataDownloader = () => {
  return (
    <div className={styles.download_page}>
      <div className={styles.download_container}>
        <h5 className={styles.titles}>Welcome to the data downloader page</h5>
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
