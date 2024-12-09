import axios from "axios";
import React, { useEffect, useState } from "react";
import TableCurrentAirPollution from "./TableCurrentAirPollution";
import PopupMap from "./PopupMap";
import { Box, Button, Typography } from "@mui/material";

const AirPollutionToDatabase = ({ stlocation, stName, customWidth }) => {
  const lat = stlocation ? stlocation[0] : 52.52;
  const lon = stlocation ? stlocation[1] : 13.405;

  const [openWeaterLat, setOpenWeaterLat] = useState(null);
  const [openWeaterLon, setOpenWeaterLon] = useState(null);
  const [openWeaterAll, setOpenWeaterAll] = useState({});
  const [airPloObject, setAirPloObject] = useState([]);
  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8`
      );
      setAirPloObject(response.data?.list || []);
      setOpenWeaterLat(response.data.coord.lon);
      setOpenWeaterLon(response.data.coord.lat);
      setOpenWeaterAll(response.data.list[0].components);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [lat, lon]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: customWidth,
            display: { xs: "inline", lg: "flex" },
            justifyContent: "center",
            paddingX: { xs: 2, lg: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginTop: "5px",
              font: "Arial",
              textAlign: "justify",
            }}
          >
            The table below shows the current amounts of polluting gases in{" "}
            {stName}.
          </Typography>
          <Button onClick={handleClickOpen}>
            ({openWeaterLat},{openWeaterLon}).
          </Button>
        </Box>
      </Box>
      <TableCurrentAirPollution openWeaterAll={openWeaterAll} />
      <Typography variant="h6" sx={{ fontSize: "12px" }}>
        All the data shown on this page comes from the OpenWeatherMap API.
      </Typography>
      <PopupMap
        open={open}
        setOpen={setOpen}
        onClose={handleClose}
        openWeaterLat={openWeaterLat}
        openWeaterLon={openWeaterLon}
        customWidth={customWidth}
      />
    </>
  );
};

export default AirPollutionToDatabase;
