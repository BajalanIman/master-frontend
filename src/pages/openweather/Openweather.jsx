import { Box, Typography } from "@mui/material";
import AirPollutionForecast from "./airPolution/AirPollutionForecast";
import Weather from "./Weather";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Sensors from "./sensors/Sensors";
import { useLocation } from "react-router-dom";

const Openweather = () => {
  const location = useLocation();
  const { state } = location;

  const [currentView, setCurrentView] = useState("sensors");

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          maxWidth: "1000px",
        }}
      >
        <Box
          sx={{
            display: { xs: "inline", md: "flex" },
            paddingX: { xs: 2, md: 0 },
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            alignContent: "center",
            py: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: "inline", md: "flex" },
              bgcolor: "#C4CED2",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "center",
              py: { xs: 0, md: 2 },
              px: { xs: 0, md: 4 },
            }}
          >
            <CustomButton
              handler={() => changeView("sensors")}
              name={"Sensors "}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "inline", md: "flex" },
              bgcolor: "#A0AFB7",
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              py: { xs: 0, md: 2 },
              px: { xs: 0, md: 4 },
              gap: 9,
              ml: { md: "2px" },
            }}
          >
            <CustomButton
              handler={() => changeView("weather")}
              name={"Climate "}
            />

            <CustomButton
              handler={() => changeView("pollution")}
              name={"Air pollution "}
            />
          </Box>
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Abril Fatface",
            fontWeight: 400,
            textAlign: "center",
            mt: { xs: 2, md: 7 },
          }}
        >
          Station: {state.name}
        </Typography>
        {currentView === "weather" && <Weather />}
        {currentView === "pollution" && state && (
          <AirPollutionForecast
            name={state.name}
            infoOne={state.infoOne}
            infoTwo={state.infoTwo}
            infoThree={state.infoThree}
            stlocation={state.stlocation}
          />
        )}
        {currentView === "sensors" && <Sensors />}
      </Box>
    </Box>
  );
};

export default Openweather;
