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

function Linechart({ days, newData, componentName, fullName }) {
  let { language } = useContext(CartContext);

  //   console.log(newData);
  const data = {
    labels: days,
    datasets: [
      {
        label: componentName,

        data: newData,
        borderColor: "rgb(75, 192, 192)",
        pointBorderColor: "aqua",
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Hour",
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
          text: componentName,
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
        gap: 2,
        paddingX: { xs: 2, lg: 0 },
        paddingBottom: { lg: "120px" },
      }}
    >
      <Line data={data} options={options}></Line>
      <Typography
        variant="body1"
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

export default Linechart;
