import React, { useEffect, useState } from "react";
import { Pannellum } from "pannellum-react";
import { Box, Typography } from "@mui/material";
// I used useLocation to recieve data that was sent by Link
import { useLocation } from "react-router-dom";
import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";
import { useContext } from "react";

import ImageViewerCustom from "./ImageViewerCustom.jsx";
import axios from "axios";
import { BASE_URL } from "../../constants/constants.js";

const Panoramas = () => {
  const [mainPhotos, setMainPhotos] = useState([]);
  const [photoData, setPhotoData] = useState([]);

  let { language } = useContext(CartContext);

  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <p>{localize(language, "DataNotAvailable")}</p>;
  }
  const { name } = state;
  const stationName = state?.name || "";

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

  console.log(stationName);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}photos`);
        setMainPhotos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const stationId = getStationId(stationName);

  useEffect(() => {
    if (stationId !== null) {
      const filteredClimateData = mainPhotos.filter(
        (el) => el.station_id === stationId
      );
      setPhotoData(filteredClimateData);
    }
  }, [mainPhotos, stationId]);

  console.log(stationId);

  useEffect(() => {
    window.pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: `/images/${stationId}.jpg`,
      // panorama: "https://photos.apppanonumber.goo.gl/c4iVXGaio1XywW8p6",
      autoLoad: true,
      autoRotate: 2,
    });
  }, []);

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
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "100%",
        paddingBottom: { xs: "20px", md: "40px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          paddingX: { xs: 3, md: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "rows",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              textAlign: "center",

              justifyContent: "center",
              paddingY: { xs: "20px", md: "34px" },
              fontFamily: "Abril Fatface",
              fontWeight: 300,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant={`h6`}
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginButtom: 3,
              color: "blue",
            }}
          >
            {localize(language, "PanoramaDescription")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: customWidth,
          }}
        >
          <div
            id="panorama"
            className="max-w-[1400px] w-[100vh] h-[60vh]"
          ></div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "start",
              textAlign: "justify",
              gap: "20px",
              paddingTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: customWidth,
              }}
            ></Box>
            <ImageViewerCustom photoData={photoData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Panoramas;
