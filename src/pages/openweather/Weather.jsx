import OnlineWeather from "./Weather/OnlineWeather";
import WeatherForecast from "./Weather/WeatherForecast";
import temperatureIcon from "./../../../public/images/temperature.png";
import humidityIcon from "./../../../public/images/humidity.png";
import pressureIcon from "./../../../public/images/Pressure.png";
import windspeed from "./../../../public/images/windspeed.png";
import weatherOne from "./../../../public/images/weather.png";

import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";

import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import { Box, Divider, Grid, Typography } from "@mui/material";

const Weather = () => {
  const { language } = useContext(CartContext);

  const location = useLocation();
  const { state } = location;

  if (!state) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          gap: "15px",
        }}
      >
        <Typography>At the moment this page is not available.</Typography>
        <Link to="/">
          <Typography
            sx={{
              color: "blue",
              fontWeight: "bold",
              ":hover": { color: "lightblue", textDecoration: "underline" },
            }}
          >
            Tap to back home!
          </Typography>
        </Link>
      </Box>
    );
  }

  const { name, stlocation } = state;
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    if (stlocation) {
      setLat(stlocation[0]);
      setLon(stlocation[1]);
    }
  }, [stlocation]);

  const [data, setData] = useState({});
  const [onlineWeatherObject, setOnlineWeatherObject] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ae1f24cd90993757247d8601739d2cf8&units=metric`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (lat && lon) {
      getData();
    }
  }, [lat, lon]);

  useEffect(() => {
    if (data?.list) {
      setOnlineWeatherObject(data.list);
    }
  }, [data]);

  let allData = [];
  let date = [];
  let humidity = [];
  let temperature = [];
  let pressure = [];
  let windSpeed = [];
  let weather = [];

  onlineWeatherObject.map((el) => {
    allData.push(el.main);
    date.push(el.dt_txt);
    humidity.push(el.main.humidity);
    temperature.push(el.main.temp);
    pressure.push(el.main.pressure);
    windSpeed.push(el.wind.speed);
    weather.push(el.weather[0].main);
    // console.log(el);
  });

  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          marginTop: 7,
          textAlign: "justify",
          paddingX: { xs: 2, lg: 0 },
        }}
      >
        {localize(language, "weatherInsights")}
      </Typography>

      <Divider sx={{ marginY: { xs: 3, lg: 7 } }} />
      <Typography
        variant="body1"
        sx={{
          marginY: { xs: 3, lg: 7 },
          paddingX: { xs: 2, lg: 0 },
        }}
      >
        {localize(language, "onlineInformation")}
        <span className="font-bold text-blue-400">{name}</span>
      </Typography>
      <Grid container>
        {temperature.length > 0 && (
          <Grid
            item
            xs={6}
            md={4}
            lg={2}
            sx={{ marginBottom: { xs: 3, lg: 0 } }}
          >
            <OnlineWeather
              background={"linear-gradient(to right bottom, #36EAEF, #6B0AC9)"}
              borderColor={"lightblue"}
              title={"Temperature"}
              subTitle={`${temperature[0]} °C`}
              icon={temperatureIcon}
            />
          </Grid>
        )}
        {humidity.length > 0 && (
          <Grid
            item
            xs={6}
            md={4}
            lg={2.5}
            sx={{ marginBottom: { xs: 3, lg: 0 } }}
          >
            <OnlineWeather
              background={
                "linear-gradient(to right bottom, lightgreen, darkgreen)"
              }
              borderColor={"lightgreen"}
              title={"Humidity"}
              subTitle={`${humidity[0]} (%)`}
              icon={humidityIcon}
            />
          </Grid>
        )}
        {weather.length > 0 && (
          <Grid
            item
            xs={6}
            md={4}
            lg={2.5}
            sx={{ marginBottom: { xs: 3, lg: 0 } }}
          >
            <OnlineWeather
              background={"linear-gradient(to right bottom, gray, lightgray )"}
              borderColor={"lightgray"}
              title={"Weather"}
              subTitle={`${weather[0]}`}
              icon={weatherOne}
            />
          </Grid>
        )}
        {windSpeed.length > 0 && (
          <Grid
            item
            xs={6}
            md={4}
            lg={2.5}
            sx={{ marginBottom: { xs: 3, lg: 0 } }}
          >
            <OnlineWeather
              background={"linear-gradient(to right bottom, yellow, red)"}
              borderColor={"lightgray"}
              title={"Wind speed"}
              subTitle={`${windSpeed[0]} (m/s)`}
              icon={windspeed}
            />
          </Grid>
        )}
        {pressure.length > 0 && (
          <Grid
            item
            xs={6}
            md={4}
            lg={2.5}
            sx={{ marginBottom: { xs: 3, lg: 0 } }}
          >
            <OnlineWeather
              background={"linear-gradient(to right top, #e9fbcf ,#1d7d8e)"}
              borderColor={"lightblue"}
              title={"Pressure"}
              subTitle={`${pressure[0]} (hPa)`}
              icon={pressureIcon}
            />
          </Grid>
        )}
      </Grid>
      <Divider sx={{ marginY: { xs: 4, lg: 7 } }} />
      <WeatherForecast />
    </Box>
  );
};

export default Weather;
