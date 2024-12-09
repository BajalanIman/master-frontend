import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllStations = () => {
  const [stationInformation, setStationInformation] = useState([]);
  const [station, setStation] = useState("");
  const [location, setLocation] = useState([]);

  const navigate = useNavigate();

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

  const handleStationChange = (event) => {
    const selectedStation = event.target.value;
    setStation(selectedStation);

    const selectedStationInfo = stationInformation.find(
      (el) => el.station_name === selectedStation
    );

    if (selectedStationInfo) {
      const locations =
        selectedStationInfo.latitude && selectedStationInfo.longitude
          ? [selectedStationInfo.latitude, selectedStationInfo.longitude]
          : [52.52, 13.405];

      setLocation(locations);
      console.log(locations); // Use locations instead of location here

      navigate("/openweather", {
        state: {
          name: selectedStationInfo.station_name,
          infoOne: selectedStationInfo.infoOne,
          infoTwo: selectedStationInfo.infoTwo,
          infoThree: selectedStationInfo.infoThree,
          stlocation: locations, // Use locations instead of location here
        },
      });
    }
  };

  return (
    <Box sx={{ minWidth: { xs: 170, md: 400 } }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "white" }} id="demo-simple-select-label">
          Station
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={station}
          label="Station"
          onChange={handleStationChange}
        >
          {stationInformation.map((el, index) =>
            el.station_name ? (
              <MenuItem key={index} value={el.station_name}>
                {el.station_name}
              </MenuItem>
            ) : null
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AllStations;
