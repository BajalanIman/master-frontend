import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const SensorsLinechartMulti = ({
  title,
  paragraph,
  mainData,
  attribute_id_One,
  attribute_id_Two,
  attribute_id_Three,
  attribute_id_Four,
  Ylabel,
  VariableOne,
  VariableTwo,
  VariableThree,
  VariableFour,
  XCaption,
}) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setMonth(""); // Reset the month when year is changed
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  useEffect(() => {
    if (!mainData || mainData.length === 0) {
      setFilteredData([]);
      return;
    }

    let filteredDates = mainData;

    // Apply year filter
    if (year !== "") {
      filteredDates = filteredDates.filter((el) => {
        const newYear = new Date(el.date_time).getFullYear();
        return newYear === parseInt(year, 10);
      });
    }

    // Apply month filter
    if (month !== "") {
      const monthIndex = new Date(`${month} 1, 2000`).getMonth();
      filteredDates = filteredDates.filter((el) => {
        const monthFromData = new Date(el.date_time).getMonth();
        return monthFromData === monthIndex;
      });
    }

    // Filter data to include only entries at 12:00:00
    const noonData = filteredDates.filter((el) => {
      const time = new Date(el.date_time).toISOString().split("T")[1];
      return time === "12:00:00.000Z";
    });

    // Sort data by date
    noonData.sort((a, b) => new Date(a.date_time) - new Date(b.date_time));

    setFilteredData(noonData);
  }, [year, month, mainData]);

  useEffect(() => {
    if (mainData && mainData.length > 0) {
      const years = Array.from(
        new Set(mainData.map((el) => new Date(el.date_time).getFullYear()))
      ).sort((a, b) => a - b); // Sort years in ascending order
      setAvailableYears(years);
    }
  }, [mainData]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Create a map to store data points by date
  const dataMap = {};
  filteredData.forEach((el) => {
    const timestamp = new Date(el.date_time);
    const dateLabel = `${
      monthNames[timestamp.getMonth()]
    } ${timestamp.getDate()}`;
    if (!dataMap[dateLabel]) {
      dataMap[dateLabel] = {
        variableOne: null,
        variableTwo: null,
        variableThree: null,
        variableFour: null,
      };
    }
    if (el.soil_attribute_id === attribute_id_One) {
      dataMap[dateLabel].variableOne = el.value;
    } else if (el.soil_attribute_id === attribute_id_Two) {
      dataMap[dateLabel].variableTwo = el.value;
    } else if (el.soil_attribute_id === attribute_id_Three) {
      dataMap[dateLabel].variableThree = el.value;
    } else if (el.soil_attribute_id === attribute_id_Four) {
      dataMap[dateLabel].variableFour = el.value;
    }
  });

  // Extract labels and datasets from the dataMap
  const dateLabels = Object.keys(dataMap).sort((a, b) => {
    const dateA = new Date(`${a} 2020`); // Year 2020 is arbitrary for sorting purposes
    const dateB = new Date(`${b} 2020`);
    return dateA - dateB;
  });
  const variableOne = dateLabels.map((label) => dataMap[label].variableOne);
  const variableTwo = dateLabels.map((label) => dataMap[label].variableTwo);
  const variableThree = dateLabels.map((label) => dataMap[label].variableThree);
  const variableFour = dateLabels.map((label) => dataMap[label].variableFour);

  // Check if there is any data to display
  const hasData =
    variableOne.some((value) => value !== null) ||
    variableTwo.some((value) => value !== null) ||
    variableThree.some((value) => value !== null) ||
    variableFour.some((value) => value !== null);

  // Create datasets based on the presence of data
  const datasets = [];
  if (variableOne.some((value) => value !== null)) {
    datasets.push({
      label: VariableOne,
      data: variableOne,
      fill: true,
      borderColor: "rgba(75,192,192,1)",
      tension: 0.4,
    });
  }
  if (variableTwo.some((value) => value !== null)) {
    datasets.push({
      label: VariableTwo,
      data: variableTwo,
      fill: false,
      borderColor: "#742774",
    });
  }
  if (variableThree.some((value) => value !== null)) {
    datasets.push({
      label: VariableThree,
      data: variableThree,
      fill: false,
      borderColor: "#122774",
    });
  }
  if (variableFour.some((value) => value !== null)) {
    datasets.push({
      label: VariableFour,
      data: variableFour,
      fill: false,
      borderColor: "#FF5733",
    });
  }

  const dataToDisplay = {
    labels: dateLabels,
    datasets: hasData ? datasets : [],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "#BDBDBD",
          borderColor: "grey",
          tickColor: "grey",
        },
      },
      y: {
        title: {
          display: true,
          text: Ylabel,
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: {
          color: "#BDBDBD",
          borderColor: "grey",
          tickColor: "grey",
        },
      },
    },
  };

  return (
    <>
      {mainData.length > 0 ? (
        <Box
          sx={{
            // maxWidth: {
            //   xs: "400px",
            //   sm: "450px",
            //   md: "600px",
            //   lg: "1000px",
            //   xl: "1400px",
            // },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            mb: 5,
          }}
        >
          {title && (
            <Box
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  paddingX: { xs: 2, md: 0 },
                }}
              >
                {title}
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              minWidth: { xs: 300, md: 600 },
              display: { xs: "flex", lg: "inline" },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Year */}
            <FormControl fullWidth>
              <InputLabel sx={{ color: "green" }} id="demo-simple-select-label">
                Year
              </InputLabel>
              <Select value={year} onChange={handleYearChange}>
                <MenuItem value="">Select Year</MenuItem>
                {availableYears.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* Months */}
            <FormControl fullWidth sx={{ marginTop: { lg: 5 } }}>
              <InputLabel sx={{ color: "green" }} id="demo-simple-select-label">
                Month
              </InputLabel>
              <Select value={month} onChange={handleMonthChange}>
                <MenuItem value="">All months</MenuItem>
                {monthNames.map((ele, index) => (
                  <MenuItem key={index} value={ele}>
                    {ele}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Line data={dataToDisplay} options={options} />
          {XCaption && (
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                paddingX: { xs: 2, md: 0 },
              }}
            >
              {XCaption}
            </Typography>
          )}
          {paragraph && (
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", paddingX: { xs: 2, md: 0 } }}
            >
              {paragraph}
            </Typography>
          )}
        </Box>
      ) : (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "red", paddingX: { xs: 2, md: 0 } }}
        >
          No data is available at this station for {title}.
        </Typography>
      )}
    </>
  );
};

export default SensorsLinechartMulti;
