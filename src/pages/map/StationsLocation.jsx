import React from "react";
// I used useNavigate to send data from one component to another one using Link
import { Link, useNavigate } from "react-router-dom";
import { Popup, Marker, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
      <Marker
        pathOptions={redColor}
        position={stlocation}
        style={{ color: "red" }}
      >
        <Popup>
          <p className="font-bold text-[14px]">{name}</p>
          {/* <Link to={{ pathname: "/panoramas", state: dataToPass }}>
            {panorama}
          </Link> */}
          <button className="text-blue-500" onClick={panoClickHandler}>
            {panorama}
          </button>
          <br />
          <button
            className="text-blue-500 pt-2"
            onClick={openweatherClickHandler}
          >
            Sensors, Climate, Pollutants
          </button>
          {/* <p>Data</p> */}
        </Popup>
      </Marker>
      {/* <div className="animate-ping">
        <CircleMarker
          center={stlocation}
          pathOptions={redColor}
          radius={10}
        ></CircleMarker>
      </div> */}
    </>
  );
};

export default StationsLocation;
// onMouseOver={(e) => {
//   e.propagatedFrom
//     .bindTooltip(
//       `Area: ${stationInformation.map((el) => {
//         console.log(el.name);
//       })}`
//     )
//     .openTooltip();
// }}
// onMouseOut={(e) => {
//   e.propagatedFrom.unbindTooltip();
// }}
