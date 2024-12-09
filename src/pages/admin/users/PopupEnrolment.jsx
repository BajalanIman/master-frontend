import Dialog from "@mui/material/Dialog";
import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { localize } from "../../../Translation.jsx";
import { CartContext } from "../../../App";
import { useContext } from "react";

const PopupEnrolment = (props) => {
  const { onClose, open } = props;

  let { language } = useContext(CartContext);

  const navigate = useNavigate("");

  const closePopupHandler = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <Dialog onClose={onClose} open={open}>
        <Alert severity="success">
          <Box
            color={"success"}
            sx={{
              paddingX: { xs: "20px", sm: "40px" },
              paddingY: { xs: "10px", sm: "20px" },
            }}
          >
            <AlertTitle>
              <strong>Success</strong>
            </AlertTitle>
            <Typography sx={{ marginTop: "20px" }}>
              Your information was successfully sent.
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
                onClick={closePopupHandler}
                sx={{
                  border: "solid 1px black",
                  backgroundColor: "green",
                  color: "white",
                  width: "180px",
                  ":hover": { backgroundColor: "#3CB371" },
                }}
              >
                Ok
              </Button>
            </Box>
          </Box>
        </Alert>
      </Dialog>
    </div>
  );
};

export default PopupEnrolment;
