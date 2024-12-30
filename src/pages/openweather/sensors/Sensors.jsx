import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Box, Divider, Typography } from "@mui/material";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";

import SensorsLinechartMulti from "./SensorsLinechartMulti";
import SensorsLinechartMultiClimate from "./SensorsLinechartMultiClimate.jsx";
import SensorsLinechartMultiClimateTwoside from "./SensorsLinechartMultiClimateTwoside.jsx";
import { BASE_URL } from "../../../constants/constants.js";

const Sensors = () => {
  const { language } = useContext(CartContext);
  const location = useLocation();
  const { state } = location;
  const stationName = state?.name || "";
  const [soilMeasurements, setSoilMeasurements] = useState([]);
  const [soilData, setSoilData] = useState([]);
  const [climateMeasurements, setClimateMeasurements] = useState([]);
  const [climateData, setClimateData] = useState([]);

  const getStationId = (name) => {
    switch (name) {
      case "Haselberg: Digital forest lab":
        return 6;
      case "Eberswalde: Buche":
        return 7;
      case "Eberswalde: Clear cut station":
        return 8;
      case "Eberswalde: Pure pine station":
        return 9;
      case "Alt-Madlitz: Conventional":
        return 10;
      case "Alt-Madlitz: Clear cut":
        return 11;
      case "Alt-Madlitz: Mikado":
        return 12;
      case "Alt-Madlitz: Syntropic":
        return 13;
      case "Alt-Madlitz: Natural succession dynamics":
        return 14;
      case "Agroforst (1)":
        return 15;
      case "Agroforst (2)":
        return 16;
      case "Agroforst (3)":
        return 17;
      case "Agroforst (4)":
        return 18;
      default:
        return null;
    }
  };

  const stationId = getStationId(stationName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}soil_measurements`);
        setSoilMeasurements(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}climate_measurements`);
        setClimateMeasurements(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (stationId !== null) {
      const filteredData = soilMeasurements.filter(
        (e) => e.station_id === stationId
      );
      setSoilData(filteredData);
      const filteredClimateData = climateMeasurements.filter(
        (el) => el.station_id === stationId
      );
      setClimateData(filteredClimateData);
    }
  }, [soilMeasurements, climateMeasurements, stationId]);

  console.log(stationId);
  return (
    <div className="mt-6 lg:mb-28 flex-cols gap-4 min-h-screen">
      {(stationId === 10 ||
        stationId === 11 ||
        stationId === 12 ||
        stationId === 13 ||
        stationId === 14) && (
        <Box>
          <Typography
            variant="body1"
            sx={{ mt: 4, paddingX: { xs: 2, md: 0 }, textAlign: "justify" }}
          >
            {localize(language, "SensorsPage")}
          </Typography>
          <SensorsLinechartMulti
            title={localize(language, "SoilTemperature")}
            attribute_id_One={4}
            attribute_id_Two={8}
            attribute_id_Three={12}
            paragraph={localize(language, "soilDifferentDeep")}
            Ylabel={`${localize(language, "SoilTemperature")} (°C)`}
            VariableOne={"10 cm"}
            VariableTwo={"30 cm"}
            VariableThree={"60 cm"}
            mainData={soilData}
            XCaption={localize(language, "SoilTemperatureXCaption")}
          />
          <Divider />
          <SensorsLinechartMulti
            title={localize(language, "WaterContent")}
            attribute_id_One={3}
            attribute_id_Two={7}
            attribute_id_Three={11}
            paragraph={localize(language, "waterDifferentDeep")}
            Ylabel={`${localize(language, "WaterContent")} (%)`}
            VariableOne={"10 cm"}
            VariableTwo={"30 cm"}
            VariableThree={"60 cm"}
            mainData={soilData}
            XCaption={localize(language, "WaterContentXCaption")}
          />
          <Divider />
          <SensorsLinechartMulti
            title={localize(language, "Permittivity")}
            attribute_id_One={2}
            attribute_id_Two={6}
            attribute_id_Three={10}
            paragraph={localize(language, "PermittivityParagraph")}
            Ylabel={`${localize(language, "Permittivity")} (ε)`}
            VariableOne={"10 cm"}
            VariableTwo={"30 cm"}
            VariableThree={"60 cm"}
            mainData={soilData}
            XCaption={localize(language, "PermittivityXCaption")}
          />
          <Divider />
          {/* <SensorsLinechartMultiClimate
            title={"Relative humidity"}
            attribute_id_One={2}
            attribute_id_Two={3}
            paragraph={
              "Relative humidity (RH) is a measure of the amount of moisture in the air compared to the maximum amount of moisture the air can hold at a given temperature. Maximum relative humidity represents the highest relative humidity recorded over a specific period, typically within a day. This value indicates the point at which the air is most saturated with moisture. Minimum relative humidity represents the lowest relative humidity recorded over the same period, indicating the driest point of the air. Monitoring these values helps in understanding humidity trends, assessing comfort levels, predicting dew points, and managing agricultural and industrial processes. High relative humidity can affect human comfort and health, as well as influence weather patterns and precipitation."
            }
            Ylabel={"Relative humidity (%)"}
            VariableOne={"Maximum relative humidity"}
            VariableTwo={"Minimum relative humidity"}
            mainData={climateData}
            XCaption={
              "The chart above shows the maximum and minimum relative humidity."
            }
          />{" "}
          <Divider /> */}
          <SensorsLinechartMultiClimate
            title={localize(language, "AirTemperature")}
            attribute_id_One={1}
            paragraph={localize(language, "AirTemperatureParagraph")}
            Ylabel={`${localize(language, "AirTemperature")} (°C)`}
            VariableOne={localize(language, "AirTemperature")}
            mainData={climateData}
            XCaption={localize(language, "AirTemperatureXCaption")}
          />
          <Divider />
          <SensorsLinechartMultiClimateTwoside
            title={localize(language, "SolarRadiation")}
            attribute_id_One={4}
            attribute_id_Two={5}
            paragraph={localize(language, "SolarRadiationParagraph")}
            Ylabel={`${localize(language, "AverageSolarRadiation")} (W/m^2)`}
            YlabelTwo={`${localize(language, "TotalSolarRadiation")} (MJ/m^2)`}
            VariableOne={localize(language, "AverageSolarRadiation")}
            VariableTwo={localize(language, "TotalSolarRadiation")}
            climateData={climateData}
            XCaption={localize(language, "SolarRadiationXCaption")}
          />
        </Box>
      )}

      {(stationId === 6 ||
        stationId === 8 ||
        stationId === 9 ||
        stationId === 15 ||
        stationId === 16 ||
        stationId === 17 ||
        stationId === 18) && (
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="body1"
            sx={{ px: 2, color: "darkslateblue", fontWeight: "bold" }}
          >
            {localize(language, "StationNoData")}
          </Typography>
        </Box>
      )}
      {stationId === 7 && (
        <Box sx={{ mt: 5 }}>
          <SensorsLinechartMulti
            title={localize(language, "SoilTemperature")}
            attribute_id_One={53}
            attribute_id_Two={54}
            attribute_id_Three={55}
            attribute_id_Four={56}
            paragraph={localize(language, "soilDifferentDeep")}
            Ylabel={`${localize(language, "SoilTemperature")} (°C)`}
            VariableOne={"10 cm"}
            VariableTwo={"25 cm"}
            VariableThree={"55 cm"}
            VariableFour={"110 cm"}
            mainData={soilData}
            XCaption={localize(language, "SoilTemperatureXCaption")}
          />
          <Divider />
          <SensorsLinechartMulti
            title={localize(language, "CapillaryPotential")}
            attribute_id_One={57}
            attribute_id_Two={58}
            attribute_id_Three={59}
            attribute_id_Four={60}
            paragraph={localize(language, "CapillaryPotentialParagraph")}
            Ylabel={`${localize(language, "CapillaryPotential")} (pF)`}
            VariableOne={"10 cm"}
            VariableTwo={"25 cm"}
            VariableThree={"55 cm"}
            VariableFour={"110 cm"}
            mainData={soilData}
            XCaption={localize(language, "CapillaryPotentialXCaption")}
          />
          <Divider />
          <SensorsLinechartMultiClimate
            title={localize(language, "AirHumidity")}
            attribute_id_One={11}
            attribute_id_Two={12}
            paragraph={localize(language, "AirHumidityParagraph")}
            Ylabel={`${localize(language, "AirHumidity")} (%rF)`}
            VariableOne={`${localize(language, "AirHumidity")} (200 cm)`}
            VariableTwo={`${localize(language, "AirHumidity")} (10 cm)`}
            mainData={climateData}
            XCaption={localize(language, "AirHumidityXCaption")}
          />{" "}
          <Divider />
          <SensorsLinechartMultiClimate
            title={localize(language, "Rainfall")}
            attribute_id_One={13}
            paragraph={localize(language, "RainfallParagraph")}
            Ylabel={`${localize(language, "Rainfall")} (mm)`}
            VariableOne={`${localize(language, "Rainfall")} (100 cm)`}
            mainData={climateData}
            XCaption={localize(language, "RainfallXCaption")}
          />{" "}
          <Divider />
          <SensorsLinechartMultiClimate
            title={localize(language, "WindSpeed")}
            attribute_id_One={14}
            paragraph={localize(language, "WindSpeedParagraph")}
            Ylabel={`${localize(language, "WindSpeed")} (m/s)`}
            VariableOne={`${localize(language, "WindSpeed")} (200 cm)`}
            mainData={climateData}
            XCaption={localize(language, "WindSpeedXCaption")}
          />{" "}
          <Divider />
          {/* <Typography
            variant="body1"
            sx={{ px: 2, color: "darkslateblue", fontWeight: "bold" }}
          >
            This is the Buche station.
          </Typography> */}
        </Box>
      )}
    </div>
  );
};

export default Sensors;
