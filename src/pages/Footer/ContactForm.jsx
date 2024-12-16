import { Box, Button, TextField, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React, { useState } from "react";
import {
  EmailOutlined,
  LanguageOutlined,
  WifiCalling3Outlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [names, setNames] = useState("");

  const nameHandler = (e) => {
    setNames(e.target.value);
  };

  const sendMessageHandler = () => {
    setNames("");
    console.log(names);
  };

  return (
    <div className="flex justify-center h-screen">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { lg: "1200px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "1px solid black",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: { xs: "10px", md: "0px" },
            borderBottomRightRadius: { xs: "10px", md: "0px" },
            padding: 4,
            width: "380px",
            height: "480px",
            backgroundColor: "#5a5a5a",
            color: "wheat",
            boxShadow: 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Write us
            </Typography>
            <form>
              <TextField
                onChange={nameHandler}
                id="standard-name"
                label="Name"
                variant="standard"
                sx={{ width: "300px" }}
              />
              <TextField
                id="standard-email"
                label="Email"
                variant="standard"
                sx={{ width: "300px" }}
              />
              <TextField
                id="standard-subject"
                label="Subject"
                variant="standard"
                sx={{ width: "300px" }}
              />
              <TextField
                id="standard-message"
                label="Message"
                multiline
                rows={4}
                variant="standard"
                sx={{ width: "300px" }}
              />
              <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
                <Button
                  onClick={sendMessageHandler}
                  sx={{
                    color: "white",
                    width: 140,
                    backgroundColor: "orange",
                    ":hover": { backgroundColor: "#ff7d4d" },
                  }}
                >
                  Send Message
                </Button>
                <Link to="/">
                  <Button
                    sx={{
                      color: "white",
                      width: 140,
                      backgroundColor: "orangered",
                      ":hover": { backgroundColor: "orangered" },
                    }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            border: "1px solid black",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: 4,
            width: "380px",
            height: "480px",
            backgroundColor: "black",
            color: "wheat",
            boxShadow: 3,
          }}
        >
          <Typography variant="h5"> Contact information</Typography>
          <Typography variant="p" sx={{ color: "darkgray", paddingTop: 2 }}>
            We're open for any suggestion or just to have a chat
          </Typography>

          <Box sx={{ display: "flex", paddingTop: 3 }}>
            <WifiCalling3Outlined sx={{ color: "white" }} />
            <Typography
              sx={{ color: "lightgray", fontWeight: "bold", paddingLeft: 1 }}
            >
              Phone
            </Typography>
            <Typography variant="p" sx={{ paddingLeft: 2, color: "darkgray" }}>
              (+49) 03334 000 000
            </Typography>
          </Box>
          <Box sx={{ display: "flex", paddingTop: 3 }}>
            <EmailOutlined sx={{ color: "white" }} />
            <Typography
              sx={{ color: "lightgray", fontWeight: "bold", paddingLeft: 1 }}
            >
              Email:
            </Typography>
            <Typography variant="p" sx={{ paddingLeft: 2, color: "darkgray" }}>
              bajalaniman@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", paddingTop: 3 }}>
            <LanguageOutlined sx={{ color: "white" }} />
            <Typography
              sx={{ color: "lightgray", fontWeight: "bold", paddingLeft: 1 }}
            >
              Website:
            </Typography>
            <Typography variant="p" sx={{ paddingLeft: 2, color: "darkgray" }}>
              xxxxxx.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", paddingTop: 3 }}>
            <LocationOnOutlinedIcon sx={{ color: "white" }} />
            <Typography
              variant="p"
              sx={{ color: "lightgray", fontWeight: "bold", paddingLeft: 1 }}
            >
              Addreess:
            </Typography>
            <Typography variant="p" sx={{ paddingLeft: 2, color: "darkgray" }}>
              Alfred-Möller-Str. 1 <br></br> 16225 Eberswalde
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ContactForm;
