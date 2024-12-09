import { Box, Typography } from "@mui/material";

const OnlineWeather = ({ title, subTitle, icon, background, borderColor }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ paddingBottom: 2 }}>
          {subTitle}
        </Typography>
        <Box
          sx={{
            width: { xs: 120, md: 130 },
            border: "1px solid",
            borderColor: borderColor,
            borderRadius: "100%",
            background: background,
            padding: 4,
          }}
        >
          <img src={icon} alt={title} />
        </Box>
      </Box>
    </Box>
  );
};

export default OnlineWeather;
