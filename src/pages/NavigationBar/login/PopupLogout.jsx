import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const PopupLogout = (props) => {
  const { onClose, open } = props;

  let { language } = useContext(CartContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="" onClose={onClose} open={open}>
      <Dialog onClose={onClose} open={open}>
        <Alert severity="warning">
          <Box color={"warning"} sx={{ paddingX: { xs: "20px", sm: "40px" } }}>
            <AlertTitle>
              <strong>warning</strong>
            </AlertTitle>
            <Typography sx={{ marginTop: "20px" }}>
              Are you sure you want to log out?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                gap: "15px",
              }}
            >
              <Button
                onClick={logOut}
                sx={{
                  border: "solid 1px black",
                  backgroundColor: "#E52B50",
                  color: "white",
                  width: "90px",
                  ":hover": { backgroundColor: "pink" },
                }}
              >
                Yes
              </Button>
              <Button
                onClick={onClose}
                sx={{
                  border: "solid 1px black",
                  backgroundColor: "gray",
                  color: "white",
                  width: "90px",
                  ":hover": { backgroundColor: "lightgray" },
                }}
              >
                No
              </Button>
            </Box>
          </Box>
        </Alert>
      </Dialog>
    </div>
  );
};

export default PopupLogout;
