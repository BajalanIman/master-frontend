import React from "react";
import { useNavigate } from "react-router-dom";
import { Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./StationsLocation.module.css";

const StationsLocation = ({
  name,
  stlocation,
  panorama,
  infoOne,
  infoTwo,
  infoThree,
}) => {
  const navigate = useNavigate();
  const redColor = { color: "red" };

  const panoClickHandler = () => {
    navigate("/panoramas", {
      state: {
        name: name,
        infoOne: infoOne,
        infoTwo: infoTwo,
        infoThree: infoThree,
        stlocation: stlocation,
      },
    });
  };

  const openweatherClickHandler = () => {
    navigate("/openweather", {
      state: {
        name: name,
        infoOne: infoOne,
        infoTwo: infoTwo,
        infoThree: infoThree,
        stlocation: stlocation,
      },
    });
  };

  return (
    <>
      <Marker pathOptions={redColor} position={stlocation}>
        <Popup>
          <p className={styles.title}>{name}</p>
          <button className={styles.button} onClick={panoClickHandler}>
            {panorama}
          </button>
          <br />
          <button className={styles.button} onClick={openweatherClickHandler}>
            Sensors, Climate, Pollutants
          </button>
        </Popup>
      </Marker>
    </>
  );
};

export default StationsLocation;
