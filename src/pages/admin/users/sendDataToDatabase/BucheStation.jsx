import React, { useState, useEffect } from "react";
import axios from "axios";
import DataSender from "./DataSender";

const BucheStation = () => {
  const [dataFromAPI, setDataFromAPI] = useState(null);
  const [TIMESTAMP, setTIMESTAMP] = useState([]);
  const [Power, setPower] = useState([]);
  const [Cold_junction, setCold_junction] = useState([]);
  const [Air_temperature_200cm, setAir_temperature_200cm] = useState([]);
  const [Air_temperature_10, setAir_temperature_10] = useState([]);
  const [Air_Humidity_200, setAir_Humidity_200] = useState([]);
  const [Air_Humdity_10, setAir_Humdity_10] = useState([]);
  const [Rainfall_100cm, setRainfall_100cm] = useState([]);
  const [Wind_Speed_200cm, setWind_Speed_200cm] = useState([]);
  const [PAR_200cm, setPAR_200cm] = useState([]);
  const [PAR_10cm, setPAR_10cm] = useState([]);
  const [Theta_10cm, setTheta_10cm] = useState([]);
  const [Theta_25cm, setTheta_25cm] = useState([]);
  const [Theta_55cm, setTheta_55cm] = useState([]);
  const [Theta_115cm, setTheta_115cm] = useState([]);
  const [Soil_Temperature_10cm, setSoil_Temperature_10cm] = useState([]);
  const [Soil_Temperature_25cm, setSoil_Temperature_25cm] = useState([]);
  const [Soil_Temperature_55cm, setSoil_Temperature_55cm] = useState([]);
  const [Soil_Temperature_115cm, setSoil_Temperature_115cm] = useState([]);
  const [Capillary_Potential_10cm, setCapillary_Potential_10cm] = useState([]);
  const [Capillary_Potential_25cm, setCapillary_Potential_25cm] = useState([]);
  const [Capillary_Potential_55cm, setCapillary_Potential_55cm] = useState([]);
  const [Capillary_Potential_115cm, setCapillary_Potential_115cm] = useState(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        "https://logstar-online.de/api/c73b3c88-441a-4b3e-a06b-b5fde1cb2d55/buche/2022-01-03/2024-06-23";

      try {
        const response = await axios.get(apiUrl);
        setDataFromAPI(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (dataFromAPI && dataFromAPI.length > 0) {
      const TIMESTAMPValue = [];
      const PowerValue = [];
      const Cold_junctionValue = [];
      const Air_temperature_200cmValue = [];
      const Air_temperature_10Value = [];
      const Air_Humidity_200Value = [];
      const Air_Humdity_10Value = [];
      const Rainfall_100cmValue = [];
      const Wind_Speed_200cmValue = [];
      const PAR_200cmValue = [];
      const PAR_10cmValue = [];
      const Theta_10cmValue = [];
      const Theta_25cmValue = [];
      const Theta_55cmValue = [];
      const Theta_115cmValue = [];
      const Soil_Temperature_10cmValue = [];
      const Soil_Temperature_25cmValue = [];
      const Soil_Temperature_55cmValue = [];
      const Soil_Temperature_115cmValue = [];
      const Capillary_Potential_10cmValue = [];
      const Capillary_Potential_25cmValue = [];
      const Capillary_Potential_55cmValue = [];
      const Capillary_Potential_115cmValue = [];

      dataFromAPI.forEach((element) => {
        if (element.dateTime.includes(":00:00")) {
          TIMESTAMPValue.push(element.dateTime);
          PowerValue.push(element.k1);
          Cold_junctionValue.push(element.k2);
          Air_temperature_200cmValue.push(element.k3);
          Air_temperature_10Value.push(element.k4);
          Air_Humidity_200Value.push(element.k5);
          Air_Humdity_10Value.push(element.k6);
          Rainfall_100cmValue.push(element.k7);
          Wind_Speed_200cmValue.push(element.k8);
          PAR_200cmValue.push(element.k9);
          PAR_10cmValue.push(element.k10);
          Theta_10cmValue.push(element.k11);
          Theta_25cmValue.push(element.k12);
          Theta_55cmValue.push(element.k13);
          Theta_115cmValue.push(element.k14);
          Soil_Temperature_10cmValue.push(element.k15);
          Soil_Temperature_25cmValue.push(element.k16);
          Soil_Temperature_55cmValue.push(element.k17);
          Soil_Temperature_115cmValue.push(element.k18);
          Capillary_Potential_10cmValue.push(element.k19);
          Capillary_Potential_25cmValue.push(element.k20);
          Capillary_Potential_55cmValue.push(element.k21);
          Capillary_Potential_115cmValue.push(element.k22);
        }
      });

      setTIMESTAMP(TIMESTAMPValue);
      setPower(PowerValue);
      setCold_junction(Cold_junctionValue);
      setAir_temperature_200cm(Air_temperature_200cmValue);
      setAir_temperature_10(Air_temperature_10Value);
      setAir_Humidity_200(Air_Humidity_200Value);
      setAir_Humdity_10(Air_Humdity_10Value);
      setRainfall_100cm(Rainfall_100cmValue);
      setWind_Speed_200cm(Wind_Speed_200cmValue);
      setPAR_200cm(PAR_200cmValue);
      setPAR_10cm(PAR_10cmValue);
      setTheta_10cm(Theta_10cmValue);
      setTheta_25cm(Theta_25cmValue);
      setTheta_55cm(Theta_55cmValue);
      setTheta_115cm(Theta_115cmValue);
      setSoil_Temperature_10cm(Soil_Temperature_10cmValue);
      setSoil_Temperature_25cm(Soil_Temperature_25cmValue);
      setSoil_Temperature_55cm(Soil_Temperature_55cmValue);
      setSoil_Temperature_115cm(Soil_Temperature_115cmValue);
      setCapillary_Potential_10cm(Capillary_Potential_10cmValue);
      setCapillary_Potential_25cm(Capillary_Potential_25cmValue);
      setCapillary_Potential_55cm(Capillary_Potential_55cmValue);
      setCapillary_Potential_115cm(Capillary_Potential_115cmValue);
    }
  }, [dataFromAPI]);

  console.log(TIMESTAMP);
  const [soilAttributeIds, setSoilAttributeIds] = useState([]);
  const [SoilTempArrays, setSoilTempArrays] = useState([]);
  const [climateAttributeIds, setClimateAttributeIds] = useState([]);
  const [ClimateArrays, setClimateArrays] = useState([]);

  useEffect(() => {
    setSoilAttributeIds([49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]); //here I have to mention the atribiut id that will be saved on database
    setSoilTempArrays([
      Theta_10cm,
      Theta_25cm,
      Theta_55cm,
      Theta_115cm,
      Soil_Temperature_10cm,
      Soil_Temperature_25cm,
      Soil_Temperature_55cm,
      Soil_Temperature_115cm,
      Capillary_Potential_10cm,
      Capillary_Potential_25cm,
      Capillary_Potential_55cm,
      Capillary_Potential_115cm,
    ]);
    setClimateAttributeIds([7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    setClimateArrays([
      Power,
      Cold_junction,
      Air_temperature_200cm,
      Air_temperature_10,
      Air_Humidity_200,
      Air_Humdity_10,
      Rainfall_100cm,
      Wind_Speed_200cm,
      PAR_200cm,
      PAR_10cm,
    ]);
  }, [
    Power,
    Cold_junction,
    Air_temperature_200cm,
    Air_temperature_10,
    Air_Humidity_200,
    Air_Humdity_10,
    Rainfall_100cm,
    Wind_Speed_200cm,
    PAR_200cm,
    PAR_10cm,
    Theta_10cm,
    Theta_25cm,
    Theta_55cm,
    Theta_115cm,
    Soil_Temperature_10cm,
    Soil_Temperature_25cm,
    Soil_Temperature_55cm,
    Soil_Temperature_115cm,
    Capillary_Potential_10cm,
    Capillary_Potential_25cm,
    Capillary_Potential_55cm,
    Capillary_Potential_115cm,
  ]);

  // console.log(
  //   soilAttributeIds,
  //   SoilTempArrays,
  //   climateAttributeIds,
  //   ClimateArrays,
  //   TIMESTAMP
  // );

  return (
    <div>
      <DataSender
        soilAttributeIds={soilAttributeIds}
        SoilTempArrays={SoilTempArrays}
        climateAttributeIds={climateAttributeIds}
        ClimateArrays={ClimateArrays}
        TIMESTAMP={TIMESTAMP}
        station_id={7}
      />
    </div>
  );
};

export default BucheStation;
