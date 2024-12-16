import MarkerClusterGroup from "react-leaflet-cluster";
import Brandenburgboundary from "../../../data/Brandenburgboundary.jsx";
import StationsLocation from "../StationsLocation/StationsLocation.jsx";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import styles from "./MapBrandenbur.module.css";

const MapBrandenbur = () => {
  const position = [52.52, 13.405];
  const Brandenburgboundaries = Brandenburgboundary;
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
    <div className={styles.homepage}>
      <div className={styles.main_container}>
        <div className={styles.title_container}>
          <h5 className={styles.title}>{localize(language, "WelcomeText")}</h5>
        </div>
        <div className={styles.map_main_comntainer}>
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
          <div>
            <p className="mt-3">{localize(language, "InfoHomePage")}</p>
            <h6 className={styles.key_features}>
              {localize(language, "KeyFeatures")}
            </h6>
            {informations.map((e, index) => (
              <p key={index}>{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBrandenbur;
