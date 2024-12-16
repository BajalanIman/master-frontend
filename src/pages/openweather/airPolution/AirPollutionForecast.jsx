import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Linechart from "../Linechart";
import AirPollutionToDatabase from "./AirPollutionToDatabase";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import { Box, Typography } from "@mui/material";

const AirPollutionForecast = () => {
  const { language } = useContext(CartContext);
  const location = useLocation();
  const { state } = location;

  const effectiveName = state?.name || "Unknown Station";
  const effectiveInfoOne = state?.infoOne || "No Info";
  const effectiveInfoTwo = state?.infoTwo || "No Info";
  const effectiveInfoThree = state?.infoThree || "No Info";
  const effectiveStlocation = state?.stlocation || [52.52, 13.405];

  const lat = effectiveStlocation[0];
  const lon = effectiveStlocation[1];

  const [data, setData] = useState({});
  const [airPloObject, setAirPloObject] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [lat, lon]);

  useEffect(() => {
    if (data?.list) {
      setAirPloObject(data.list);
    }
  }, [data]);

  let days = [];
  let newData = [];
  let allData = [];

  airPloObject.map((el, index) => {
    days.push(index);
    newData.push(el.components.co);
    allData.push(el.components);
  });

  const customWidth = {
    xs: "400px",
    sm: "450px",
    md: "600px",
    lg: "1000px",
    xl: "1400px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <AirPollutionToDatabase
        stlocation={effectiveStlocation}
        stName={effectiveName}
        customWidth={customWidth}
      />

      <Typography
        variant="body1"
        sx={{
          maxWidth: "1200px",
          display: "block",
          paddingY: "24px",
          textAlign: "justify",
          paddingX: 2,
        }}
      >
        {localize(language, "pollutingGasesOne")}
        <br />
        {localize(language, "pollutingGasesTwo")}
        <br />
        {localize(language, "pollutingGasesThree")}
      </Typography>
      <Linechart
        days={days}
        newData={allData.map((el) => el.co)}
        componentName={"Co (μg/m3)"}
        fullName={"Carbon monoxide (Co)"}
      />
      <Linechart
        days={days}
        newData={allData.map((el) => el.no)}
        componentName={"NO (μg/m3)"}
        fullName={"Nitrogen monoxide (No)"}
      />
      <Linechart
        days={days}
        newData={allData.map((el) => el.no2)}
        componentName={"NO2 (μg/m3)"}
        fullName={"Nitrogen dioxide (NO2)"}
      />
      <Linechart
        days={days}
        newData={allData.map((el) => el.nh3)}
        componentName={"NH3 (μg/m3)"}
        fullName={"Ammonia (NH3)"}
      />
      <Linechart
        days={days}
        newData={allData.map((el) => el.o3)}
        componentName={"O3 (μg/m3)"}
        fullName={"Ozone (O3)"}
      />
      <Linechart
        days={days}
        newData={allData.map((el) => el.so2)}
        componentName={"SO2 (μg/m3)"}
        fullName={"Sulphur dioxide (SO2)"}
      />
      <Linechart
        days={days}
        newData={allData.map((el) => el.pm10)}
        componentName={"PM10 (μg/m3)"}
        fullName={"particulat (PM10)"}
      />
      <Linechart
        days={days}
        newData={allData.map((el) => el.pm2_5)}
        componentName={"PM2.5 (μg/m3)"}
        fullName={"particulat (PM2.5)"}
      />
    </Box>
  );
};

export default AirPollutionForecast;
