import MarkerClusterGroup from "react-leaflet-cluster";
import Brandenburgboundary from "../../data/Brandenburgboundary.jsx";
import StationsLocation from "./StationsLocation.jsx";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

// import StationsInfo from "../../data/Locations";
import TextInBody from "../panorama/TextInBody.jsx";
import { Box, Typography } from "@mui/material";

const MapBrandenbur = () => {
  const position = [52.52, 13.405];
  const Brandenburgboundaries = Brandenburgboundary;
  // const stationInformation = StationsInfo;
  const limeColor = { color: "darkGreen" };

  let { language } = useContext(CartContext);

  const [latInMap, setLatInMap] = useState(52.52);
  const [lngInMap, setLngInMap] = useState(13.405);
  const [cityName, setCityName] = useState("");

  const [stationInformation, setStationInformation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8800/station");
        setStationInformation(response.data);
        // setAllStationData(response.data);
        // console.log(stationInformation);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const titleStyle = {
    paddingY: "1%",
    fontWeight: "bold",
  };
  const paragraphStyle = {
    fontWeight: "normal",
    paddingTop: "22px",
  };
  const titleInParagraphStyle = {
    ...paragraphStyle,
    paddingTop: "50px",
    paddingBottom: "12px",
    fontWeight: "bold",
  };

  const paragraphStyleTwo = {
    ...paragraphStyle,
    paddingY: { sx: "3px", md: "12px" },
  };

  const informations = [
    localize(language, "AppFeaturOne"),
    localize(language, "AppFeaturTwo"),
    localize(language, "AppFeaturThree"),
    localize(language, "AppFeaturFour"),
  ];

  return (
    <Box
      sx={{
        width: "full",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          maxWidth: "1470px",
          paddingTop: 3,
          paddingBottom: 5,
          paddingX: 2,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <TextInBody></TextInBody>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "Yeseva One",
              fontWeight: 700,
              color: "black",
              mt: 3,
            }}
          >
            {localize(language, "WelcomeText")}
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "1200px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <MapContainer
              center={position}
              zoom={7}
              scrollWheelZoom={true}
              style={{
                width: "100%",
                height: 500,
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polygon
                pathOptions={limeColor}
                positions={Brandenburgboundaries}
              />

              <MarkerClusterGroup
                autoPan:true
                onMouseOver={(e) => {
                  const { lat, lng } = e.latlng;
                  setLatInMap(lat);
                  setLngInMap(lng);
                  axios
                    .get(
                      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=992c20977dbb20bd9b6b36c9a376dc7c`
                    )
                    .then((res) => {
                      if (res.data && res.data.length > 0) {
                        const firstLocation = res.data[0];
                        setCityName(firstLocation.name);
                        e.propagatedFrom
                          .bindTooltip(` ${firstLocation.name}`)
                          .openTooltip();
                      }
                    })
                    .catch((error) => {
                      console.error("Error fetching data:", error);
                    });
                }}
                onMouseOut={(e) => {
                  e.propagatedFrom.unbindTooltip();
                }}
                chunkedLoading
              >
                {stationInformation.map((el) => {
                  const location =
                    el.latitude && el.longitude
                      ? [el.longitude, el.latitude]
                      : [52.52, 13.405];
                  return (
                    <StationsLocation
                      key={el.station_id}
                      name={el.station_name}
                      stlocation={location}
                      panorama={"Panorama"}
                      infoOne={"el.infoOne"}
                      infoTwo={"el.infoTwo"}
                      infoThree={"el.infoThree"}
                    ></StationsLocation>
                  );
                })}
              </MarkerClusterGroup>
            </MapContainer>
            <Box>
              <Typography variant="body1" sx={{ mt: 3 }}>
                {localize(language, "InfoHomePage")}
              </Typography>
              <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
                {localize(language, "KeyFeatures")}
              </Typography>
              {informations.map((e, index) => (
                <Typography variant="body1" key={index} sx={{ mt: 1 }}>
                  {e}
                </Typography>
              ))}
            </Box>
            {/* <p>{localize(language, "AppCreator")}</p> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MapBrandenbur;
