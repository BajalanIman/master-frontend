import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";
import { useMediaQuery } from "@mui/material";

const SensorsLinechartMultiClimate = ({
  title,
  paragraph,
  mainData,
  attribute_id_One,
  attribute_id_Two,
  attribute_id_Three,
  Ylabel,
  VariableOne,
  VariableTwo,
  VariableThree,
  XCaption,
}) => {
  const { language } = useContext(CartContext);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [years, setYears] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  useEffect(() => {
    setLoadingPage(true);
    if (!mainData || mainData.length === 0) {
      setFilteredData([]);
      return;
    }

    // Extract unique years from the dataset
    const uniqueYears = [
      ...new Set(mainData.map((el) => new Date(el.date_time).getFullYear())),
    ].sort((a, b) => a - b); // Sort years in ascending order
    setYears(uniqueYears);

    let filteredDates = mainData;

    // Apply year filter
    if (year !== "") {
      filteredDates = filteredDates.filter((el) => {
        const newYear = new Date(el.date_time).getFullYear();
        return newYear === parseInt(year);
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

    // Sort the data by date
    noonData.sort((a, b) => new Date(a.date_time) - new Date(b.date_time));
    setFilteredData(noonData);
    setLoadingPage(false);
  }, [year, month, mainData]);

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
      };
    }
    if (el.climate_attribute_id === attribute_id_One) {
      dataMap[dateLabel].variableOne = el.value;
    } else if (el.climate_attribute_id === attribute_id_Two) {
      dataMap[dateLabel].variableTwo = el.value;
    } else if (
      attribute_id_Three &&
      el.climate_attribute_id === attribute_id_Three
    ) {
      dataMap[dateLabel].variableThree = el.value;
    }
  });

  // Extract labels and datasets from the dataMap
  const dateLabels = Object.keys(dataMap);
  const variableOne = dateLabels.map((label) => dataMap[label].variableOne);
  const variableTwo = dateLabels.map((label) => dataMap[label].variableTwo);
  const variableThree = dateLabels.map((label) => dataMap[label].variableThree);

  // Check if at least one value is not null for any variable
  const hasData =
    variableOne.some((value) => value !== null) ||
    variableTwo.some((value) => value !== null) ||
    variableThree.some((value) => value !== null);

  // Create datasets based on the presence of data
  const datasets = [];

  if (hasData) {
    datasets.push({
      label: VariableOne,
      data: variableOne,
      fill: true,
      borderColor: "rgba(75,192,192,1)",
      tension: 0.4,
    });
    if (VariableTwo) {
      datasets.push({
        label: VariableTwo,
        data: variableTwo,
        fill: false,
        borderColor: "#742774",
      });
    }
    if (VariableThree) {
      datasets.push({
        label: VariableThree,
        data: variableThree,
        fill: false,
        borderColor: "#122774",
      });
    }
  }

  const data = {
    labels: dateLabels,
    datasets,
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

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const chartHeight = isSmallScreen ? 250 : 450;

  return (
    <>
      {mainData && mainData.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            mb: 5,
          }}
        >
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
              sx={{ fontWeight: "bold", paddingX: { xs: 2, md: 0 } }}
            >
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "full",
              display: "flex",
              flexDirection: "column",
              paddingX: { xs: 2, md: 0 },
              gap: 2,
              marginY: 2,
            }}
          ></Box>
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
                {localize(language, "Year")}
              </InputLabel>
              <Select value={year} onChange={handleYearChange}>
                <MenuItem value="">{localize(language, "SelectYear")}</MenuItem>
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* Months */}
            <FormControl fullWidth sx={{ marginTop: { lg: 5 } }}>
              <InputLabel sx={{ color: "green" }} id="demo-simple-select-label">
                {localize(language, "Month")}
              </InputLabel>
              <Select value={month} onChange={handleMonthChange}>
                <MenuItem value="">{localize(language, "AllMonths")}</MenuItem>
                {monthNames.map((ele, index) => (
                  <MenuItem key={index} value={ele}>
                    {ele}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Line
            data={data}
            options={options}
            width={isSmallScreen ? 300 : 600}
            height={isSmallScreen ? 200 : 350}
          />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              paddingX: { xs: 2, md: 0 },
            }}
          >
            {XCaption}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", paddingX: { xs: 2, md: 0 } }}
          >
            {paragraph}
          </Typography>
        </Box>
      ) : (
        // <Typography
        //   variant="body1"
        //   sx={{ textAlign: "center", color: "red", paddingX: { xs: 2, md: 0 } }}
        // >
        //   No data is available at this station for {title}.
        // </Typography>
        <div className="flex justify-center my-5">
          <CircularProgress color="success" />
        </div>
      )}
    </>
  );
};

export default SensorsLinechartMultiClimate;
