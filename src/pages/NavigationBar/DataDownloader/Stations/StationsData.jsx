import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
import { BASE_URL } from "../../../../constants/constants";

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
  const [uniqueYears, setUniqueYears] = useState([]);
  const [uniqueMonths, setUniqueMonths] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${endPoint}`);
        setStationInformation(response.data);
        // Extract unique years and months
        const years = new Set();
        const months = new Set();
        response.data.forEach((el) => {
          const [year, month] = el.date_time.split("-");
          years.add(year);
          months.add(month);
        });
        setUniqueYears([...years].sort());
        setUniqueMonths([...months].sort((a, b) => parseInt(a) - parseInt(b)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Update months dynamically when selectedYears changes
  useEffect(() => {
    if (selectedYears.length > 0) {
      // Filter months based on selected year(s)
      const filteredMonths = new Set();
      stationInformation.forEach((el) => {
        const [year, month] = el.date_time.split("-");
        if (selectedYears.includes(year)) {
          filteredMonths.add(month);
        }
      });
      setUniqueMonths(
        [...filteredMonths].sort((a, b) => parseInt(a) - parseInt(b))
      );
    } else {
      // If no year is selected, show all months
      const allMonths = new Set();
      stationInformation.forEach((el) => {
        const [, month] = el.date_time.split("-");
        allMonths.add(month);
      });
      setUniqueMonths([...allMonths].sort((a, b) => parseInt(a) - parseInt(b)));
    }
  }, [selectedYears, stationInformation]);

  const handleStationChange = (event) => {
    setSelectedStation(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYears(event.target.value);
    setSelectedMonths([]); // Reset months when year selection changes
  };

  const handleMonthChange = (event) => {
    setSelectedMonths(event.target.value);
  };

  const filterData = () => {
    const filtered = stationInformation.filter((el) => {
      const [year, month] = el.date_time.split("-");

      // Filter conditions
      const matchesStation =
        !selectedStation || el.station?.station_name === selectedStation;

      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(year);

      const matchesMonth =
        selectedMonths.length === 0 || selectedMonths.includes(month);

      return matchesStation && matchesYear && matchesMonth;
    });

    setFilteredData(filtered);
  };

  const downloadCSV = () => {
    console.log(filteredData);
    const csvHeader = ` Station Name,Date Time,${attributeId},${attributeName},Unit,Value\n`;
    const csvRows = filteredData.map(
      (row) =>
        `${row.station.station_name},${row.date_time},${row[attributeId]},${row[attribute][attributeName]},${row[attribute][attributeUnit]},${row.value}`
    );
    const csvString = csvHeader + csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `filtered_${variable}_data.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const uniqueStations = Array.from(
    new Set(
      stationInformation
        .map((el) => el.station?.station_name)
        .filter((name) => name)
    )
  );

  return (
    <Box
      sx={{
        margin: "0 auto",
        mt: 4,
        width: "400px",
        boxShadow: "1px 1px 1px 1px gray",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h4 className="mb-4 font-bold">{variable} variables</h4>
      <p className="mb-4">
        Please select your station and download your chosen {variable} variables
      </p>

      {/* Station Selection */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="station-label">Station</InputLabel>
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
        <InputLabel id="year-label">Year</InputLabel>
        <Select
          labelId="year-label"
          multiple
          value={selectedYears}
          onChange={handleYearChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {uniqueYears.map((yearOption, index) => (
            <MenuItem key={index} value={yearOption}>
              {yearOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Month Selection (Multiple) */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="month-label">Month</InputLabel>
        <Select
          labelId="month-label"
          multiple
          value={selectedMonths}
          onChange={handleMonthChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {uniqueMonths.map((monthOption, index) => (
            <MenuItem key={index} value={monthOption}>
              {monthOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Filter and Download Buttons */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={filterData}
        sx={{ mb: 2 }}
      >
        Select Data
      </Button>

      {filteredData.length > 0 && (
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={downloadCSV}
        >
          Download Selected Data
        </Button>
      )}
    </Box>
  );
};

export default StationsData;
