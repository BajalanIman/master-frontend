import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { BASE_URL } from "../../../../constants/constants";
import { CartContext } from "../../../../App.jsx";
import { localize } from "../../../../Translation.jsx";
import { useNavigate } from "react-router-dom";

const StationsData = ({
  variable,
  endPoint,
  attribute,
  attributeId,
  attributeName,
  attributeUnit,
}) => {
  const [stationInformation, setStationInformation] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [uniqueStations, setUniqueStations] = useState([]);
  const [loading, setLoading] = useState(true);

  const { language } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}${endPoint}`);
        setStationInformation(response.data);

        // Extract unique stations
        const stations = new Set();
        response.data.forEach((el) => {
          if (el.station?.station_name) {
            stations.add(el.station.station_name);
          }
        });
        setUniqueStations([...stations]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint]);

  // Calculate available years based on selected station
  const availableYears = selectedStation
    ? Array.from(
        new Set(
          stationInformation
            .filter((el) => el.station?.station_name === selectedStation)
            .map((el) => el.date_time.split("-")[0])
        )
      ).sort()
    : [];

  // Calculate available months based on selected station and years
  const availableMonths =
    selectedStation && selectedYears.length > 0
      ? Array.from(
          new Set(
            stationInformation
              .filter(
                (el) =>
                  el.station?.station_name === selectedStation &&
                  selectedYears.includes(el.date_time.split("-")[0])
              )
              .map((el) => el.date_time.split("-")[1])
          )
        ).sort((a, b) => a - b)
      : [];

  useEffect(() => {
    // Automatically filter data when selections change
    const filtered = stationInformation.filter((el) => {
      const [year, month] = el.date_time.split("-");
      return (
        (!selectedStation || el.station?.station_name === selectedStation) &&
        (selectedYears.length === 0 || selectedYears.includes(year)) &&
        (selectedMonths.length === 0 || selectedMonths.includes(month))
      );
    });
    setFilteredData(filtered);
  }, [selectedStation, selectedYears, selectedMonths, stationInformation]);

  const handleStationChange = (event) => {
    setSelectedStation(event.target.value);
    setSelectedYears([]);
    setSelectedMonths([]);
  };

  const handleYearChange = (event) => {
    setSelectedYears(event.target.value);
    setSelectedMonths([]);
  };

  const handleMonthChange = (event) => {
    setSelectedMonths(event.target.value);
  };

  const downloadCSV = () => {
    const csvHeader = `Station Name,Date Time,${attributeId},${attributeName},Unit,Value\n`;
    const csvRows = filteredData.map(
      (row) =>
        `${row.station.station_name},${row.date_time},${row[attributeId]},${row[attribute][attributeName]},${row[attribute][attributeUnit]},${row.value}`
    );
    const csvString = csvHeader + csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `filtered_${variable}_${selectedStation}_data.csv`;
    link.click();
    URL.revokeObjectURL(url);
    // navigate("/");
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <div className="h-56 flex flex-col justify-center items-center gap-4">
          <p>{localize(language, "DataLoading")}</p>
          <CircularProgress size={24} sx={{ mt: 2 }} />
        </div>
      ) : (
        <Box
          sx={{
            margin: "0px",
            mt: 4,
            width: "350px",
            boxShadow: "1px 1px 1px 1px gray",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        >
          <h4 className="mb-4 font-bold">{variable} variables</h4>
          <p className="mb-4">{localize(language, "downloadVariables")}</p>

          {/* Station Selection */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="station-label">
              {localize(language, "Station")}
            </InputLabel>
            <Select
              labelId="station-label"
              value={selectedStation}
              onChange={handleStationChange}
            >
              {uniqueStations.map((name, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Year Selection (Multiple) */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="year-label">
              {localize(language, "Year")}
            </InputLabel>
            <Select
              labelId="year-label"
              multiple
              value={selectedYears}
              onChange={handleYearChange}
              renderValue={(selected) => selected.join(", ")}
              disabled={!selectedStation}
            >
              {availableYears.map((yearOption, index) => (
                <MenuItem key={index} value={yearOption}>
                  {yearOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Month Selection (Multiple) */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="month-label">
              {localize(language, "Month")}
            </InputLabel>
            <Select
              labelId="month-label"
              multiple
              value={selectedMonths}
              onChange={handleMonthChange}
              renderValue={(selected) => selected.join(", ")}
              disabled={selectedYears.length === 0}
            >
              {availableMonths.map((monthOption, index) => (
                <MenuItem key={index} value={monthOption}>
                  {monthOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Download Button */}
          {filteredData.length > 0 && (
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={downloadCSV}
            >
              {localize(language, "DownloadData")}
            </Button>
          )}
        </Box>
      )}
    </>
  );
};

export default StationsData;
