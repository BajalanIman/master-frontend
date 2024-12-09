import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import { applySolidInversion } from "@mui/joy/colorInversion";

const Footer = () => {
  const [color, setColor] = React.useState("neutral");
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== "neutral" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: { lg: "1450px" },
        }}
      >
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = [
              "primary",
              "neutral",
              "danger",
              "success",
              "warning",
            ];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <a
            href="https://www.facebook.com/iman.bajalan/friends_all"
            target="blank"
          >
            <FacebookRoundedIcon />
          </a>
        </IconButton>
        <IconButton variant="plain">
          <a href="https://github.com/BajalanIman" target="blank">
            <GitHubIcon />
          </a>
        </IconButton>
        <IconButton variant="plain">
          <a
            href="https://www.instagram.com/imanbajalan1987?igsh=NWZhb3BxNDdhNmE0"
            target="blank"
          >
            <Instagram />
          </a>
        </IconButton>
        <IconButton variant="plain">
          <Twitter />
        </IconButton>
        <IconButton variant="plain">
          <YouTube />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}
        />
      </Box>
      <Box>
        <Divider
          sx={{
            my: 2,
            width: { lg: "1450px" },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-start" },
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          width: { lg: "1450px" },
        }}
      >
        <a
          href="https://www.hnee.de/en/Startseite/HNE-Eberswalde-Startseite-E9875.htm"
          target="blank"
          className="pointer"
        >
          <Card
            variant="soft"
            size="sm"
            sx={{
              flexDirection: { xs: "row", md: "column" },
              minWidth: { xs: "100%", md: "auto" },
              gap: 1,
            }}
          >
            <AspectRatio
              ratio="21/9"
              minHeight={80}
              sx={{ flexBasis: { xs: 200, md: "initial" } }}
            >
              <img
                alt=""
                src="https://www.tourismus-studieren.de/fileadmin/user_upload/Inhalte/profile/Hochschule-fuer-Nachhaltige-Entwicklung-Eberswalde/Header1_HNEE_20200630.jpg"
              />
            </AspectRatio>
            <CardContent>
              <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
                Eberswalde University for Sustainable Development
              </Typography>
            </CardContent>
          </Card>
        </a>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{
            flexGrow: 0,
            "--ListItem-radius": "8px",
            "--ListItem-gap": "0px",
          }}
        >
          <ListItem
            nested
            sx={{ width: { xs: "50%", md: 200 }, marginTop: { md: 3 } }}
          >
            <ListSubheader sx={{ fontWeight: "xl" }}>
              IMPORTANT LINKS
            </ListSubheader>
            <List>
              <ListItem>
                <Link to="/about">
                  <ListItemButton>About</ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/help">
                  <ListItemButton>Help</ListItemButton>
                </Link>
              </ListItem>

              <ListItem>
                <Link to="/login">
                  <ListItemButton>Log in</ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">
                  <ListItemButton>Contact us</ListItemButton>
                </Link>
              </ListItem>
            </List>
          </ListItem>
          <ListItem
            nested
            sx={{
              width: { xs: "50%", md: 280 },
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ListSubheader sx={{ fontWeight: "xl" }}></ListSubheader>
            <List sx={{ "--ListItemDecorator-size": "32px" }}>
              <ListItem>
                <ListItemButton
                  sx={{
                    marginBottom: { md: "-50px" },
                    fontSize: { xs: "12px" },
                  }}
                >
                  <strong>Tel.:</strong> (+49) 03334 000 000
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  sx={{
                    marginBottom: { lg: "-30px" },
                    fontSize: { xs: "12px" },
                  }}
                >
                  <strong>Fax: </strong> (+49) 03334 000 000
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  fontSize: { xs: "12px" },
                }}
              >
                <ListItemButton>
                  <strong>Email: </strong> Iman.Bajalan@hnee.de
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ marginBottom: { lg: "-50px" } }}>
                  Alfred-Möller-Str. 1
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton sx={{ marginBottom: { lg: "-30px" } }}>
                  16225 Eberswalde,
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Germany</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
        <Box>
          <Divider
            sx={{
              mt: 2,
              width: { lg: "1450px" },
            }}
          />
        </Box>
        <Typography level="body-xs">
          @ This application has been created by Iman Bajalan.
        </Typography>
      </Box>
    </Sheet>
  );
};
export default Footer;
