import React, { useContext } from "react";
import { CartContext } from "../../../App.jsx";
import { Box, Divider, Typography } from "@mui/material";
import { localize } from "../../../Translation.jsx";

const About = () => {
  let { language } = useContext(CartContext);

  return (
    <div className="flex justify-center relative flex-col items-center">
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
            mb: 2,
            fontFamily: "Abril Fatface",
            fontWeight: 300,
            textAlign: { xs: "start", md: "justify" },
          }}
        >
          {localize(language, "aboutApplication")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          {localize(language, "aboutApplicationP1")}
        </Typography>
        <Typography variant="h5" sx={{ mt: 5, mb: 2, fontWeight: "bold" }}>
          {localize(language, "ourMission")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "ourMissionP1")}
        </Typography>
        <Divider sx={{ padding: 1 }}></Divider>
        <Typography variant="h5" sx={{ mt: 4, mb: 3, fontWeight: "bold" }}>
          {localize(language, "keyFeatures")}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mb: 2, fontWeight: "bold" }}>
          {localize(language, "interactiveMaps")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "interactiveMapsP1")}
        </Typography>
        <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          {localize(language, "comprehensiveData")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "comprehensiveDataP1")}
        </Typography>
        <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          {localize(language, "historicalInsights")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "historicalInsightsP1")}
        </Typography>
        <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          {localize(language, "focusOnForests")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "focusOnForestsP1")}
        </Typography>
        <Divider sx={{ padding: 2 }}></Divider>
        <Typography
          variant="h5"
          sx={{
            mt: 5,
            mb: 3,
            fontWeight: "bold",
            textAlign: { xs: "start", md: "justify" },
          }}
        >
          {localize(language, "ourCommitment")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "ourCommitmentp1")}
        </Typography>
        <Divider sx={{ padding: 2 }}></Divider>
        <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: "bold" }}>
          {localize(language, "getInvolved")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {localize(language, "getInvolvedP1")}
        </Typography>
        <Divider sx={{ padding: 2 }}></Divider>
        <Typography variant="h5" sx={{ mt: 5, mb: 3, fontWeight: "bold" }}>
          {localize(language, "contactUs")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {localize(language, "contactUsP1")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 8 }}>
          {localize(language, "contactUsP2")}
        </Typography>
      </Box>
    </div>
  );
};

export default About;
