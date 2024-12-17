import React from "react";
import { localize } from "../../Translation.jsx";
import { CartContext } from "../../App";
import { useContext } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Box, Typography } from "@mui/material";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function LineChartMulti({
  days,
  newDataOne,
  newDataTwo,
  newDataThree,
  labelOne,
  labelTwo,
  labelThree,
  yText,
  fullName,
}) {
  let { language } = useContext(CartContext);

  //   console.log(newData);
  const data = {
    labels: days,
    datasets: [
      {
        label: labelOne,
        data: newDataOne,
        backgroundColor: "rgba(170 150 110 / 75%)",
        borderColor: "rgba(170 150 110 / 75%)",
        pointBorderColor: "rgba(230 150 110 / 75%)",
        backgroundColor: "rgba(220 150 110 / 75%)",
        fill: false,
        tension: 0.4,
      },
      {
        label: labelTwo,
        data: newDataTwo,
        borderColor: "rgba(145 180 50 / 75%)",
        pointBorderColor: "rgba(105 180 50 / 75%)",
        backgroundColor: "rgba(105 180 50 / 75%)",
        fill: false,
        tension: 0.4,
      },
      {
        label: labelThree,
        data: newDataThree,
        backgroundColor: "rgba(90 165 255 / 75%)",
        borderColor: "rgba(90 165 255 / 75%)",
        pointBorderColor: "rgba(90 165 255 / 75%)",
        backgroundColor: "rgba(180 90 255 / 75%)",
        fill: false,
        tension: 0.4,
      },
    ],
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
          text: "Date and time",
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
          text: yText,
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
        // min: 3,
        // max: 6,
      },
    },
  };

  const chartWidth = {
    xs: "400px",
    sm: "450px",
    md: "600px",
    lg: "1000px",
    xl: "1400px",
  };
  const chartHeight = {
    xs: "300px",
    sm: "350px",
    md: "450px",
    lg: "600px",
    xl: "800px",
  };

  return (
    <Box
      sx={{
        width: chartWidth,
        height: chartHeight,
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingBottom: { lg: "120px" },
      }}
    >
      <Line data={data} options={options}></Line>
      <Typography
        variant="p"
        sx={{
          width: "65%",
          fontWeight: "bold",
          display: "inline",
          textAlign: "center",
        }}
      >
        {fullName} {localize(language, "pollutingGasesForecast")}
      </Typography>
    </Box>
  );
}

export default LineChartMulti;
