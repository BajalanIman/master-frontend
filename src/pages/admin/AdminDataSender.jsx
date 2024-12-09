import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
// import { localize } from "../../../Translation.jsx";
// import { CartContext } from "../../../App.jsx";

import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingData from "./LoadingData";
import DataSender from "./users/sendDataToDatabase/DataSender";
import ShowDataBeforeSend from "./users/sendDataToDatabase/ShowDataBeforeSend";
import { Close } from "@mui/icons-material";
import BucheStation from "./users/sendDataToDatabase/BucheStation";

const AdminDataSender = () => {
  const [station, setStation] = useState("");
  const [loading, setLoading] = useState(false);
  // let values = [];

  //   let { language } = useContext(CartContext);

  const [fileContent, setFileContent] = useState([]);
  const [title, setTitle] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [fileName, setFileName] = useState();

  const handleFileChange = (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      const lines = content.split("\n"); // Split content by newline characters
      let mainTitle = lines.at(1);
      setTitle(mainTitle);
      const remainingLines = lines.slice(4); // Remove the first three lines
      setFileContent(remainingLines);
    };
    reader.readAsText(file);
  };

  // useEffect(() => {
  //   if (fileName && fileName.includes("Conventional")) {
  //     console.log("Havij");
  //   }
  // }, [fileName]);

  const [importedData, setImportedData] = useState([]);

  useEffect(() => {
    setImportedData(fileContent);
  }, [fileContent]);
  // let values = [];
  const [TIMESTAMP, setTIMESTAMP] = useState([]);
  const [RECORD, setRECORD] = useState([]);
  const [AirTC_Avg, setAirTC_Avg] = useState([]);
  const [PAR_Den_Avg, setPAR_Den_Avg] = useState([]);
  const [RH_Max, setRH_Max] = useState([]);
  const [RH_Min, setRH_Min] = useState([]);
  const [SlrW_Avg, setSlrW_Avg] = useState([]);
  const [SlrMJ_Tot, setSlrMJ_Tot] = useState([]);
  const [RawData10cm_Avg, setRawData10cm_Avg] = useState([]);
  const [Permitivity10cm_Avg, setPermitivity10cm_Avg] = useState([]);
  const [Watercont10cm_Avg, setWatercont10cm_Avg] = useState([]);
  const [SoilTemp10cm_Avg, setSoilTemp10cm_Avg] = useState([]);
  const [RawData30cm_Avg, setRawData30cm_Avg] = useState([]);
  const [Permitivity30cm_Avg, setPermitivity30cm_Avg] = useState([]);
  const [WaterCont30cm_Avg, setWaterCont30cm_Avg] = useState([]);
  const [SoilTemp30cm_Avg, setSoilTemp30cm_Avg] = useState([]);
  const [RawData60cm_Avg, setRawData60cm_Avg] = useState([]);
  const [Permitivity60cm_Avg, setPermitivity60cm_Avg] = useState([]);
  const [WaterCont60cm_Avg, setWaterCont60cm_Avg] = useState([]);
  const [SoilTemp60cm_Avg, setSoilTemp60cm_Avg] = useState([]);
  const [RawData10cm_C3_Avg, setRawData10cm_C3_Avg] = useState([]);
  const [Pemitivity10cm_C3_Avg, setPemitivity10cm_C3_Avg] = useState([]);
  const [WaterCont10cm_C3_Avg, setWaterCont10cm_C3_Avg] = useState([]);
  const [SoilTemp10cm_C3_Avg, setSoilTemp10cm_C3_Avg] = useState([]);
  const [RawData30cm_C3_Avg, setRawData30cm_C3_Avg] = useState([]);
  const [Permitivity30cm_C3_Avg, setPermitivity30cm_C3_Avg] = useState([]);
  const [WaterCont30cm_C3_Avg, setWaterCont30cm_C3_Avg] = useState([]);
  const [SoilTemp30cm_C3_Avg, setSoilTemp30cm_C3_Avg] = useState([]);
  const [RawData60cm_C3_Avg, setRawData60cm_C3_Avg] = useState([]);
  const [Pemitivity60cm_C3_Avg, setPemitivity60cm_C3_Avg] = useState([]);
  const [WaterCont60cm_C3_Avg, setWaterCont60cm_C3_Avg] = useState([]);
  const [SoilTemp60cm_C3_Avg, setSoilTemp60cm_C3_Avg] = useState([]);
  const [RawData10cm100_Avg, setRawData10cm100_Avg] = useState([]);
  const [Permitivity10cm100_Avg, setPermitivity10cm100_Avg] = useState([]);
  const [WaterCont10cm100_Avg, setWaterCont10cm100_Avg] = useState([]);
  const [SoilTemp10cm100_Avg, setSoilTemp10cm100_Avg] = useState([]);
  const [RawData30cm100_Avg, setRawData30cm100_Avg] = useState([]);
  const [Permitivity30cm100_Avg, setPermitivity30cm100_Avg] = useState([]);
  const [WaterCont30cm100_Avg, setWaterCont30cm100_Avg] = useState([]);
  const [SoilTemp30cm100_Avg, setSoilTemp30cm100_Avg] = useState([]);
  const [RawData60cm100_Avg, setRawData60cm100_Avg] = useState([]);
  const [Permitivity60cm100_Avg, setPermitivity60cm100_Avg] = useState([]);
  const [WaterCont60cm100_Avg, setWaterCont60cm100_Avg] = useState([]);
  const [SoilTemp60cm100_Avg, setSoilTemp60cm100_Avg] = useState([]);
  const [RawData10cm60_Avg, setRawData10cm60_Avg] = useState([]);
  const [Permitivity10cm60_Avg, setPermitivity10cm60_Avg] = useState([]);
  const [WaterCont10cm60_Avg, setWaterCont10cm60_Avg] = useState([]);
  const [SoilTemp10cm60_Avg, setSoilTemp10cm60_Avg] = useState([]);
  const [RawData30cm60_Avg, setRawData30cm60_Avg] = useState([]);
  const [Permitivity30cm60_Avg, setPermitivity30cm60_Avg] = useState([]);
  const [WaterCont30cm60_Avg, setWaterCont30cm60_Avg] = useState([]);
  const [SoilTemp30cm60_Avg, setSoilTemp30cm60_Avg] = useState([]);
  const [RawData60cm60_Avg, setRawData60cm60_Avg] = useState([]);
  const [Permitivity60cm60_Avg, setPermitivity60cm60_Avg] = useState([]);
  const [WaterCont60cm60_Avg, setWaterCont60cm60_Avg] = useState([]);
  const [SoilTemp60cm60_Avg, setSoilTemp60cm60_Avg] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (importedData) {
      const TIMESTAMPValues = [];
      const RECORDValue = [];
      const AirTC_AvgValue = [];
      const PAR_Den_AvgValue = [];
      const RH_MaxValue = [];
      const RH_MinValue = [];
      const SlrW_AvgValue = [];
      const SlrMJ_TotValue = [];
      const RawData10cm_AvgValue = [];
      const Permitivity10cm_AvgValue = [];
      const Watercont10cm_AvgValue = [];
      const SoilTemp10cm_AvgValue = [];
      const RawData30cm_AvgValue = [];
      const Permitivity30cm_AvgValue = [];
      const WaterCont30cm_AvgValue = [];
      const SoilTemp30cm_AvgValue = [];
      const RawData60cm_AvgValue = [];
      const Permitivity60cm_AvgValue = [];
      const WaterCont60cm_AvgValue = [];
      const SoilTemp60cm_AvgValue = [];
      const RawData10cm_C3_AvgValue = [];
      const Pemitivity10cm_C3_AvgValue = [];
      const WaterCont10cm_C3_AvgValue = [];
      const SoilTemp10cm_C3_AvgValue = [];
      const RawData30cm_C3_AvgValue = [];
      const Permitivity30cm_C3_AvgValue = [];
      const WaterCont30cm_C3_AvgValue = [];
      const SoilTemp30cm_C3_AvgValue = [];
      const RawData60cm_C3_AvgValue = [];
      const Pemitivity60cm_C3_AvgValue = [];
      const WaterCont60cm_C3_AvgValue = [];
      const SoilTemp60cm_C3_AvgValue = [];
      const RawData10cm100_AvgValue = [];
      const Permitivity10cm100_AvgValue = [];
      const WaterCont10cm100_AvgValue = [];
      const SoilTemp10cm100_AvgValue = [];
      const RawData30cm100_AvgValue = [];
      const Permitivity30cm100_AvgValue = [];
      const WaterCont30cm100_AvgValue = [];
      const SoilTemp30cm100_AvgValue = [];
      const RawData60cm100_AvgValue = [];
      const Permitivity60cm100_AvgValue = [];
      const WaterCont60cm100_AvgValue = [];
      const SoilTemp60cm100_AvgValue = [];
      const RawData10cm60_AvgValue = [];
      const Permitivity10cm60_AvgValue = [];
      const WaterCont10cm60_AvgValue = [];
      const SoilTemp10cm60_AvgValue = [];
      const RawData30cm60_AvgValue = [];
      const Permitivity30cm60_AvgValue = [];
      const WaterCont30cm60_AvgValue = [];
      const SoilTemp30cm60_AvgValue = [];
      const RawData60cm60_AvgValue = [];
      const Permitivity60cm60_AvgValue = [];
      const WaterCont60cm60_AvgValue = [];
      const SoilTemp60cm60_AvgValue = [];

      importedData.forEach((line) => {
        if (line.includes(":00:00")) {
          let values = [];
          values = line.split(",");
          if (
            station === "Alt-Madlitz: Conventional" &&
            fileName.includes("Conventional")
            // && values.length == 16
          ) {
            TIMESTAMPValues.push(values[0]);
            RECORDValue.push(values[1]);
            AirTC_AvgValue.push(values[2]);
            SlrW_AvgValue.push(values[3]);
            RawData10cm_AvgValue.push(values[4]);
            Permitivity10cm_AvgValue.push(values[5]);
            Watercont10cm_AvgValue.push(values[6]);
            SoilTemp10cm_AvgValue.push(values[7]);
            RawData30cm_AvgValue.push(values[8]);
            Permitivity30cm_AvgValue.push(values[9]);
            WaterCont30cm_AvgValue.push(values[10]);
            SoilTemp30cm_AvgValue.push(values[11]);
            RawData60cm_AvgValue.push(values[12]);
            Permitivity60cm_AvgValue.push(values[13]);
            WaterCont60cm_AvgValue.push(values[14]);
            SoilTemp60cm_AvgValue.push(values[15]);
          } else if (
            station === "Alt-Madlitz: Clear_cut" &&
            fileName.includes("Clear")
            // && values.length == 31
          ) {
            TIMESTAMPValues.push(values[0]);
            RECORDValue.push(values[1]);
            AirTC_AvgValue.push(values[2]);
            RH_MaxValue.push(values[3]);
            RH_MinValue.push(values[4]);
            SlrW_AvgValue.push(values[5]);
            SlrMJ_TotValue.push(values[6]);
            RawData10cm_AvgValue.push(values[7]);
            Permitivity10cm_AvgValue.push(values[8]);
            Watercont10cm_AvgValue.push(values[9]);
            SoilTemp10cm_AvgValue.push(values[10]);
            RawData30cm_AvgValue.push(values[11]);
            Permitivity30cm_AvgValue.push(values[12]);
            WaterCont30cm_AvgValue.push(values[13]);
            SoilTemp30cm_AvgValue.push(values[14]);
            RawData60cm_AvgValue.push(values[15]);
            Permitivity60cm_AvgValue.push(values[16]);
            WaterCont60cm_AvgValue.push(values[17]);
            SoilTemp60cm_AvgValue.push(values[18]);
            RawData10cm_C3_AvgValue.push(values[19]);
            Pemitivity10cm_C3_AvgValue.push(values[20]);
            WaterCont10cm_C3_AvgValue.push(values[21]);
            SoilTemp10cm_C3_AvgValue.push(values[22]);
            RawData30cm_C3_AvgValue.push(values[23]);
            Permitivity30cm_C3_AvgValue.push(values[24]);
            WaterCont30cm_C3_AvgValue.push(values[25]);
            SoilTemp30cm_C3_AvgValue.push(values[26]);
            RawData60cm_C3_AvgValue.push(values[27]);
            Pemitivity60cm_C3_AvgValue.push(values[28]);
            WaterCont60cm_C3_AvgValue.push(values[29]);
            SoilTemp60cm_C3_AvgValue.push(values[30]);
          } else if (
            station === "Alt-Madlitz: Mikado" &&
            fileName.includes("Mikado")
            // && values.length == 16
          ) {
            TIMESTAMPValues.push(values[0]);
            RECORDValue.push(values[1]);
            AirTC_AvgValue.push(values[2]);
            SlrW_AvgValue.push(values[3]);
            RawData10cm_AvgValue.push(values[4]);
            Permitivity10cm_AvgValue.push(values[5]);
            Watercont10cm_AvgValue.push(values[6]);
            SoilTemp10cm_AvgValue.push(values[7]);
            RawData30cm_AvgValue.push(values[8]);
            Permitivity30cm_AvgValue.push(values[9]);
            WaterCont30cm_AvgValue.push(values[10]);
            SoilTemp30cm_AvgValue.push(values[11]);
            RawData60cm_AvgValue.push(values[12]);
            Permitivity60cm_AvgValue.push(values[13]);
            WaterCont60cm_AvgValue.push(values[14]);
            SoilTemp60cm_AvgValue.push(values[15]);
          } else if (
            station === "Alt-Madlitz: Syntropic" &&
            fileName.includes("Syntropic")
            // && values.length == 41
          ) {
            TIMESTAMPValues.push(values[0]);
            RECORDValue.push(values[1]);
            AirTC_AvgValue.push(values[2]);
            PAR_Den_AvgValue.push(values[3]);
            SlrW_AvgValue.push(values[4]);
            RawData10cm_AvgValue.push(values[5]);
            Permitivity10cm_AvgValue.push(values[6]);
            Watercont10cm_AvgValue.push(values[7]);
            SoilTemp10cm_AvgValue.push(values[8]);
            RawData30cm_AvgValue.push(values[9]);
            Permitivity30cm_AvgValue.push(values[10]);
            WaterCont30cm_AvgValue.push(values[11]);
            SoilTemp30cm_AvgValue.push(values[12]);
            RawData60cm_AvgValue.push(values[13]);
            Permitivity60cm_AvgValue.push(values[14]);
            WaterCont60cm_AvgValue.push(values[15]);
            SoilTemp60cm_AvgValue.push(values[16]);
            RawData10cm100_AvgValue.push(values[17]);
            Permitivity10cm100_AvgValue.push(values[18]);
            WaterCont10cm100_AvgValue.push(values[19]);
            SoilTemp10cm100_AvgValue.push(values[20]);
            RawData30cm100_AvgValue.push(values[21]);
            Permitivity30cm100_AvgValue.push(values[22]);
            WaterCont30cm100_AvgValue.push(values[23]);
            SoilTemp30cm100_AvgValue.push(values[24]);
            RawData60cm100_AvgValue.push(values[25]);
            Permitivity60cm100_AvgValue.push(values[26]);
            WaterCont60cm100_AvgValue.push(values[27]);
            SoilTemp60cm100_AvgValue.push(values[28]);
            RawData10cm60_AvgValue.push(values[29]);
            Permitivity10cm60_AvgValue.push(values[30]);
            WaterCont10cm60_AvgValue.push(values[31]);
            SoilTemp10cm60_AvgValue.push(values[32]);
            RawData30cm60_AvgValue.push(values[33]);
            Permitivity30cm60_AvgValue.push(values[34]);
            WaterCont30cm60_AvgValue.push(values[35]);
            SoilTemp30cm60_AvgValue.push(values[36]);
            RawData60cm60_AvgValue.push(values[37]);
            Permitivity60cm60_AvgValue.push(values[38]);
            WaterCont60cm60_AvgValue.push(values[39]);
            SoilTemp60cm60_AvgValue.push(values[40]);
          } else if (
            station === "Alt-Madlitz: Natural_succession_dynamics" &&
            fileName.includes("Natural Succession")
          ) {
            TIMESTAMPValues.push(values[0]);
            RECORDValue.push(values[1]);
            AirTC_AvgValue.push(values[2]);
            RH_MaxValue.push(values[3]);
            RH_MinValue.push(values[4]);
            SlrW_AvgValue.push(values[5]);
            SlrMJ_TotValue.push(values[6]);
            RawData10cm_AvgValue.push(values[7]);
            Permitivity10cm_AvgValue.push(values[8]);
            Watercont10cm_AvgValue.push(values[9]);
            SoilTemp10cm_AvgValue.push(values[10]);
            RawData30cm_AvgValue.push(values[11]);
            Permitivity30cm_AvgValue.push(values[12]);
            WaterCont30cm_AvgValue.push(values[13]);
            SoilTemp30cm_AvgValue.push(values[14]);
            RawData60cm_AvgValue.push(values[15]);
            Permitivity60cm_AvgValue.push(values[16]);
            WaterCont60cm_AvgValue.push(values[17]);
            SoilTemp60cm_AvgValue.push(values[18]);
            RawData10cm_C3_AvgValue.push(values[19]);
            Pemitivity10cm_C3_AvgValue.push(values[20]);
            WaterCont10cm_C3_AvgValue.push(values[21]);
            SoilTemp10cm_C3_AvgValue.push(values[22]);
            RawData30cm_C3_AvgValue.push(values[23]);
            Permitivity30cm_C3_AvgValue.push(values[24]);
            WaterCont30cm_C3_AvgValue.push(values[25]);
            SoilTemp30cm_C3_AvgValue.push(values[26]);
            RawData60cm_C3_AvgValue.push(values[27]);
            Pemitivity60cm_C3_AvgValue.push(values[28]);
            WaterCont60cm_C3_AvgValue.push(values[29]);
            SoilTemp60cm_C3_AvgValue.push(values[30]);
          } else {
            console.log(`The station and dataset are not matched!`);
            setErrorMessage("The station and dataset are not matched!");
            setTimeout(() => {
              setErrorMessage("");
            }, 5000);
          }
        }
      });
      setTIMESTAMP(TIMESTAMPValues);
      setRECORD(RECORDValue);
      setAirTC_Avg(AirTC_AvgValue);
      setPAR_Den_Avg(PAR_Den_AvgValue);
      setRH_Max(RH_MaxValue);
      setRH_Min(RH_MinValue);
      setSlrW_Avg(SlrW_AvgValue);
      setSlrMJ_Tot(SlrMJ_TotValue);
      setRawData10cm_Avg(RawData10cm_AvgValue);
      setPermitivity10cm_Avg(Permitivity10cm_AvgValue);
      setWatercont10cm_Avg(Watercont10cm_AvgValue);
      setSoilTemp10cm_Avg(SoilTemp10cm_AvgValue);
      setRawData30cm_Avg(RawData30cm_AvgValue);
      setPermitivity30cm_Avg(Permitivity30cm_AvgValue);
      setWaterCont30cm_Avg(WaterCont30cm_AvgValue);
      setSoilTemp30cm_Avg(SoilTemp30cm_AvgValue);
      setRawData60cm_Avg(RawData60cm_AvgValue);
      setPermitivity60cm_Avg(Permitivity60cm_AvgValue);
      setWaterCont60cm_Avg(WaterCont60cm_AvgValue);
      setSoilTemp60cm_Avg(SoilTemp60cm_AvgValue);
      setRawData10cm_C3_Avg(RawData10cm_C3_AvgValue);
      setPemitivity10cm_C3_Avg(Pemitivity10cm_C3_AvgValue);
      setWaterCont10cm_C3_Avg(WaterCont10cm_C3_AvgValue);
      setSoilTemp10cm_C3_Avg(SoilTemp10cm_C3_AvgValue);
      setRawData30cm_C3_Avg(RawData30cm_C3_AvgValue);
      setPermitivity30cm_C3_Avg(Permitivity30cm_C3_AvgValue);
      setWaterCont30cm_C3_Avg(WaterCont30cm_C3_AvgValue);
      setSoilTemp30cm_C3_Avg(SoilTemp30cm_C3_AvgValue);
      setRawData60cm_C3_Avg(RawData60cm_C3_AvgValue);
      setPemitivity60cm_C3_Avg(Pemitivity60cm_C3_AvgValue);
      setWaterCont60cm_C3_Avg(WaterCont60cm_C3_AvgValue);
      setSoilTemp60cm_C3_Avg(SoilTemp60cm_C3_AvgValue);
      setRawData10cm100_Avg(RawData10cm100_AvgValue);
      setPermitivity10cm100_Avg(Permitivity10cm100_AvgValue);
      setWaterCont10cm100_Avg(WaterCont10cm100_AvgValue);
      setSoilTemp10cm100_Avg(SoilTemp10cm100_AvgValue);
      setRawData30cm100_Avg(RawData30cm100_AvgValue);
      setPermitivity30cm100_Avg(Permitivity30cm100_AvgValue);
      setWaterCont30cm100_Avg(WaterCont30cm100_AvgValue);
      setSoilTemp30cm100_Avg(SoilTemp30cm100_AvgValue);
      setRawData60cm100_Avg(RawData60cm100_AvgValue);
      setPermitivity60cm100_Avg(Permitivity60cm100_AvgValue);
      setWaterCont60cm100_Avg(WaterCont60cm100_AvgValue);
      setSoilTemp60cm100_Avg(SoilTemp60cm100_AvgValue);
      setRawData10cm60_Avg(RawData10cm60_AvgValue);
      setPermitivity10cm60_Avg(Permitivity10cm60_AvgValue);
      setWaterCont10cm60_Avg(WaterCont10cm60_AvgValue);
      setSoilTemp10cm60_Avg(SoilTemp10cm60_AvgValue);
      setRawData30cm60_Avg(RawData30cm60_AvgValue);
      setPermitivity30cm60_Avg(Permitivity30cm60_AvgValue);
      setWaterCont30cm60_Avg(WaterCont30cm60_AvgValue);
      setSoilTemp30cm60_Avg(SoilTemp30cm60_AvgValue);
      setRawData60cm60_Avg(RawData60cm60_AvgValue);
      setPermitivity60cm60_Avg(Permitivity60cm60_AvgValue);
      setWaterCont60cm60_Avg(WaterCont60cm60_AvgValue);
      setSoilTemp60cm60_Avg(SoilTemp60cm60_AvgValue);
      setLoading(false);
    }
  }, [importedData]);

  const cancelDataHandler = () => {
    setFileContent();
    window.location.reload();
  };

  const handleChange = (event) => {
    setStation(event.target.value);
  };
  const [lastIndex, setLastIndex] = useState(0);
  useEffect(() => {
    setLastIndex(importedData.length);
  }, [importedData]);

  //................
  const [soilAttributeIds, setSoilAttributeIds] = useState([]);
  const [SoilTempArrays, setSoilTempArrays] = useState([]);
  const [climateAttributeIds, setClimateAttributeIds] = useState([]);
  const [ClimateArrays, setClimateArrays] = useState([]);
  const [station_id, setStationId] = useState(null);

  useEffect(() => {
    if (station === "Alt-Madlitz: Conventional") {
      setSoilAttributeIds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
      setSoilTempArrays([
        RawData10cm_Avg,
        Permitivity10cm_Avg,
        Watercont10cm_Avg,
        SoilTemp10cm_Avg,
        RawData30cm_Avg,
        Permitivity30cm_Avg,
        WaterCont30cm_Avg,
        SoilTemp30cm_Avg,
        RawData60cm_Avg,
        Permitivity60cm_Avg,
        WaterCont60cm_Avg,
        SoilTemp60cm_Avg,
      ]);
      setClimateAttributeIds([1, 4]);
      setClimateArrays([AirTC_Avg, SlrW_Avg]);
      setStationId(10);
    } else if (station === "Alt-Madlitz: Clear_cut") {
      setSoilAttributeIds([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ]);
      setSoilTempArrays([
        RawData10cm_Avg,
        Permitivity10cm_Avg,
        Watercont10cm_Avg,
        SoilTemp10cm_Avg,
        RawData30cm_Avg,
        Permitivity30cm_Avg,
        WaterCont30cm_Avg,
        SoilTemp30cm_Avg,
        RawData60cm_Avg,
        Permitivity60cm_Avg,
        WaterCont60cm_Avg,
        SoilTemp60cm_Avg,
        RawData10cm_C3_Avg,
        Pemitivity10cm_C3_Avg,
        WaterCont10cm_C3_Avg,
        SoilTemp10cm_C3_Avg,
        RawData30cm_C3_Avg,
        Permitivity30cm_C3_Avg,
        WaterCont30cm_C3_Avg,
        SoilTemp30cm_C3_Avg,
        RawData60cm_C3_Avg,
        Pemitivity60cm_C3_Avg,
        WaterCont60cm_C3_Avg,
        SoilTemp60cm_C3_Avg,
      ]);
      setClimateAttributeIds([1, 2, 3, 4, 5]);
      setClimateArrays([AirTC_Avg, RH_Max, RH_Min, SlrW_Avg, SlrMJ_Tot]);
      setStationId(11);
    } else if (station === "Alt-Madlitz: Mikado") {
      setSoilAttributeIds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
      setSoilTempArrays([
        RawData10cm_Avg,
        Permitivity10cm_Avg,
        Watercont10cm_Avg,
        SoilTemp10cm_Avg,
        RawData30cm_Avg,
        Permitivity30cm_Avg,
        WaterCont30cm_Avg,
        SoilTemp30cm_Avg,
        RawData60cm_Avg,
        Permitivity60cm_Avg,
        WaterCont60cm_Avg,
        SoilTemp60cm_Avg,
      ]);
      setClimateAttributeIds([1, 4]);
      setClimateArrays([AirTC_Avg, SlrW_Avg]);
      setStationId(12);
    } else if (station === "Alt-Madlitz: Natural_succession_dynamics") {
      setSoilAttributeIds([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ]);
      setSoilTempArrays([
        RawData10cm_Avg,
        Permitivity10cm_Avg,
        Watercont10cm_Avg,
        SoilTemp10cm_Avg,
        RawData30cm_Avg,
        Permitivity30cm_Avg,
        WaterCont30cm_Avg,
        SoilTemp30cm_Avg,
        RawData60cm_Avg,
        Permitivity60cm_Avg,
        WaterCont60cm_Avg,
        SoilTemp60cm_Avg,
        RawData10cm_C3_Avg,
        Pemitivity10cm_C3_Avg,
        WaterCont10cm_C3_Avg,
        SoilTemp10cm_C3_Avg,
        RawData30cm_C3_Avg,
        Permitivity30cm_C3_Avg,
        WaterCont30cm_C3_Avg,
        SoilTemp30cm_C3_Avg,
        RawData60cm_C3_Avg,
        Pemitivity60cm_C3_Avg,
        WaterCont60cm_C3_Avg,
        SoilTemp60cm_C3_Avg,
      ]);
      setClimateAttributeIds([1, 2, 3, 4, 5]);
      setClimateArrays([AirTC_Avg, RH_Max, RH_Min, SlrW_Avg, SlrMJ_Tot]);
      setStationId(14);
    } else if (station === "Alt-Madlitz: Syntropic") {
      setSoilAttributeIds([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 26, 27, 28, 29, 30, 31, 32,
        33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
      ]);
      setSoilTempArrays([
        RawData10cm_Avg,
        Permitivity10cm_Avg,
        Watercont10cm_Avg,
        SoilTemp10cm_Avg,
        RawData30cm_Avg,
        Permitivity30cm_Avg,
        WaterCont30cm_Avg,
        SoilTemp30cm_Avg,
        RawData60cm_Avg,
        Permitivity60cm_Avg,
        WaterCont60cm_Avg,
        SoilTemp60cm_Avg,
        RawData10cm100_Avg,
        Permitivity10cm100_Avg,
        WaterCont10cm100_Avg,
        SoilTemp10cm100_Avg,
        RawData30cm100_Avg,
        Permitivity30cm100_Avg,
        WaterCont30cm100_Avg,
        SoilTemp30cm100_Avg,
        RawData60cm100_Avg,
        Permitivity60cm100_Avg,
        WaterCont60cm100_Avg,
        SoilTemp60cm100_Avg,
        RawData10cm60_Avg,
        Permitivity10cm60_Avg,
        WaterCont10cm60_Avg,
        SoilTemp10cm60_Avg,
        RawData30cm60_Avg,
        Permitivity30cm60_Avg,
        WaterCont30cm60_Avg,
        SoilTemp30cm60_Avg,
        RawData60cm60_Avg,
        Permitivity60cm60_Avg,
        WaterCont60cm60_Avg,
        SoilTemp60cm60_Avg,
      ]);
      setClimateAttributeIds([1, 6, 4]);
      setClimateArrays([AirTC_Avg, PAR_Den_Avg, SlrW_Avg]);
      setStationId(13);
    } else {
      console.log("selrct station");
    }
  }, [
    station,
    SoilTemp10cm_Avg,
    SoilTemp30cm_Avg,
    SoilTemp60cm_Avg,
    AirTC_Avg,
    RH_Max,
    RH_Min,
  ]);

  return (
    <div className="flex items-center relative flex-col min-h-screen pt-16 pb-28">
      {loading ? (
        <LoadingData />
      ) : (
        <>
          <Box
            sx={{
              boxShadow: 3,
              border: "1px solid lightgray",
              maxWidth: "1300px",
              fontFamily: "serif",
              paddingBottom: 5,
              paddingX: 5,
              paddingTop: 3,
              marginY: 3,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "end", mb: 2 }}>
              <Link to="/">
                <Close
                  sx={{
                    ":hover": { bgcolor: "lightgray" },
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontFamily: "serif" }}>
                Please select the station and choose the file from your local
                computer.
              </Typography>
              <FormControl
                color="success"
                sx={{
                  marginTop: "30px",
                  width: "500px",
                  border: "solid 1px white",
                  borderRadius: "5px",
                }}
                fullWidth
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "green" }}
                >
                  Stations
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={station}
                  label="Stations"
                  onChange={handleChange}
                >
                  <MenuItem
                    value={"Alt-Madlitz: Conventional"}
                    sx={{ fontFamily: "serif" }}
                  >
                    Alt-Madlitz: Conventional
                  </MenuItem>
                  <MenuItem
                    value={"Alt-Madlitz: Clear_cut"}
                    sx={{ fontFamily: "serif" }}
                  >
                    Alt-Madlitz: Clear cut
                  </MenuItem>
                  <MenuItem
                    value={"Alt-Madlitz: Mikado"}
                    sx={{ fontFamily: "serif" }}
                  >
                    Alt-Madlitz: Mikado
                  </MenuItem>
                  <MenuItem
                    value={"Alt-Madlitz: Syntropic"}
                    sx={{ fontFamily: "serif" }}
                  >
                    Alt-Madlitz: Syntropic
                  </MenuItem>
                  <MenuItem
                    value={"Alt-Madlitz: Natural_succession_dynamics"}
                    sx={{ fontFamily: "serif" }}
                  >
                    Alt-Madlitz: Natural succession dynamics
                  </MenuItem>
                  <MenuItem
                    value={"Eberswalde: Buche"}
                    sx={{ fontFamily: "serif" }}
                  >
                    Eberswalde: Buche
                  </MenuItem>
                </Select>
              </FormControl>
              {station && station !== "Eberswalde: Buche" && (
                <Typography
                  variant="p"
                  sx={{ color: "green", fontFamily: "serif" }}
                >
                  Station {station} is selected. Choose your file!{" "}
                </Typography>
              )}
              {station && station === "Eberswalde: Buche" && (
                <Typography
                  variant="body1"
                  sx={{ color: "blue", fontFamily: "serif", marginTop: 5 }}
                >
                  Station {station} is selected. Use the submit button to update
                  the data.
                </Typography>
              )}
              {station && station === "Eberswalde: Buche" && <BucheStation />}

              {station && station !== "Eberswalde: Buche" && (
                <input
                  type="file"
                  className="m-12"
                  onChange={handleFileChange}
                />
              )}
            </Box>
            {errorMessage && (
              <Typography sx={{ color: "red", textAlign: "center" }}>
                {errorMessage}
              </Typography>
            )}
          </Box>
          {TIMESTAMP.length > 0 && (
            <Box sx={{ boxShadow: 3, maxWidth: "1300px", padding: 5 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "serif",
                  width: "1200px",
                  textAlign: "center",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Selected file: {fileName}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "serif",
                  width: "1200px",
                  textAlign: "center",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                Please remember to verify the data before sending it!
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  width: "1200px",
                  textAlign: "center",
                  fontFamily: "serif",
                }}
              >
                The table below displays the recordings captured by sensors. If
                it does not match your original dataset, it indicates that the
                incorrect dataset was selected for this area.
              </Typography>
              <Box
                sx={{
                  marginTop: 2,
                  gap: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  height: 600,
                  width: 1220,
                  border: "1px solid lightgray",
                  boxShadow: 3,
                  paddingTop: 0,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {title && (
                  <ShowDataBeforeSend
                    title={title}
                    importedData={importedData}
                  />
                )}
              </Box>
              <DataSender
                soilAttributeIds={soilAttributeIds}
                SoilTempArrays={SoilTempArrays}
                climateAttributeIds={climateAttributeIds}
                ClimateArrays={ClimateArrays}
                TIMESTAMP={TIMESTAMP}
                station_id={station_id}
              />
              <Button
                onClick={cancelDataHandler}
                variant="button"
                sx={{
                  mt: 3,
                  width: 600,
                  height: 60,
                  bgcolor: "gray",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "serif",
                  fontSize: 20,
                  ml: 2,
                  ":hover": { bgcolor: "red" },
                }}
              >
                cancel
              </Button>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

export default AdminDataSender;
