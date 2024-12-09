import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Brandenburgboundary from "../../../data/Brandenburgboundary.jsx";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import { useContext, useState } from "react";
import StationsInfo from "../../../data/Locations.jsx";

const PopupMap = (props) => {
  const { onClose, open, openWeaterLat, openWeaterLon, customWidth } = props;

  //   console.log(openWeaterLat, openWeaterLon);

  const position = [52.52, 12.805];
  const Brandenburgboundaries = Brandenburgboundary;
  const stationInformation = StationsInfo;
  const limeColor = { color: "darkGreen" };
  const redColor = { color: "darkBlue" };

  let { language } = useContext(CartContext);

  const [latInMap, setLatInMap] = useState(52.52);
  const [lngInMap, setLngInMap] = useState(13.405);
  const [cityName, setCityName] = useState("");
  return (
    <div style={{ width: customWidth }}>
      <Dialog onClose={onClose} open={open}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "green",
            justifyItems: "between",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          <DialogTitle variant="body1" sx={{ fontWeight: "bold" }}>
            Location of the station on the map
          </DialogTitle>

          <CloseIcon sx={{ cursor: "pointer" }} onClick={onClose} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={true}
            style={{
              width: "100%",
              height: 600,
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polygon
              pathOptions={limeColor}
              positions={Brandenburgboundaries}
            />
            <Marker
              position={[openWeaterLat, openWeaterLon]}
              pathOptions={redColor}
            ></Marker>
            <CircleMarker
              center={[openWeaterLat, openWeaterLon]}
              pathOptions={"#ff0000"}
              radius={20}
              fillOpacity={0.3}
              fillColor="rgb(16,94,251)"
            ></CircleMarker>
          </MapContainer>
        </Box>
      </Dialog>
    </div>
  );
};

export default PopupMap;
