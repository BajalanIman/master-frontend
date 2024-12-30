import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { CartContext } from "../../App.jsx";
import { localize } from "../../Translation.jsx";

const ImageViewerCustom = ({ photoData }) => {
  const { language } = useContext(CartContext);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const imagesArray = photoData.map((el) => el.photo);
    setImages(imagesArray);
  }, [photoData]);

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setOpen(true);
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          marginTop: 8,
          fontFamily: "Lobster",
          fontWeight: 500,
          textAlign: "center",
          width: "100%",
        }}
      >
        {localize(language, "PhotoGallery")}
      </Typography>

      <ImageList
        sx={{ width: "100%", height: "auto" }}
        cols={3}
        rowHeight={164}
      >
        {images.map((src, index) => (
          <ImageListItem key={index} onClick={() => handleImageClick(src)}>
            <img
              src={`${src}?auto=compress&cs=tinysrgb&w=400`}
              alt={`Photo ${index + 1}`}
              loading="lazy"
              className="cursor-pointer bg-slate-50 p-2"
              style={{ borderRadius: 8 }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            position: "relative",
            padding: 0,
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            zIndex: 1,
          }}
        >
          <Close />
        </IconButton>

        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <img
            src={`${currentImage}?auto=compress&cs=tinysrgb&w=1600`}
            alt="Full view"
            style={{
              maxWidth: "80vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageViewerCustom;
