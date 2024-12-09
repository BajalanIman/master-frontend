import { Box, Divider, Typography } from "@mui/material";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App.jsx";

import React, { useContext } from "react";

const Help = () => {
  let { language } = useContext(CartContext);

  return (
    <div className="flex justify-center  relative items-center flex-col ">
      <Box
        sx={{
          maxWidth: "1450px",
          position: "relative",
          paddingX: { xs: 2, md: 0 },
          textAlign: "justify",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: 8,
            mb: 3,
            fontFamily: "Abril Fatface",
            fontWeight: 300,
            textAlign: { xs: "start", md: "justify" },
          }}
        >
          {localize(language, "helpNavigating")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          {localize(language, "helpNavigatingP")}
        </Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          {localize(language, "gettingStarted")}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "gettingStartedP")}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {"1: "} {localize(language, "exploreFeatures")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "exploreFeaturesP")}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {"2: "} {localize(language, "navigatingDashboard")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "navigatingDashboardP")}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {"3: "} {localize(language, "interactiveMapsHelp")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "interactiveMapsHelpP1")}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {"4: "} {localize(language, "accessingData")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "accessingDataP1")}
        </Typography>
        <Divider sx={{ padding: 2 }}></Divider>
        <Typography
          variant="h5"
          sx={{ mt: 5, mb: 3, fontWeight: "bold", fontFamily: "Abril Fatface" }}
        >
          {localize(language, "frequentlyAskedQuestions")}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: { xs: "start", md: "justify" } }}
        >
          {localize(language, "howFrequentlyUpdated")}{" "}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "howFrequentlyUpdatedP1")}{" "}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {localize(language, "canAccessHistoricalData")}{" "}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "canAccessHistoricalDataP1")}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: { xs: "start", md: "justify" } }}
        >
          {localize(language, "HowCanInterpretDat")}{" "}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "HowCanInterpretDatP1")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: { xs: "start", md: "justify" } }}
        >
          {localize(language, "accessibleMobileDevices")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 8 }}>
          {localize(language, "accessibleMobileDevicesP1")}{" "}
        </Typography>
      </Box>
    </div>
  );
};

export default Help;
