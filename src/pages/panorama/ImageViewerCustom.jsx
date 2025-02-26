import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { CartContext } from "../../App.jsx";
import { localize } from "../../Translation.jsx";

const ImageViewerCustom = ({ photoData = [] }) => {
  const { language } = useContext(CartContext);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    // Safely handle photoData and extract images
    const validPhotoData = Array.isArray(photoData) ? photoData : [];
    const imagesArray = validPhotoData
      .filter((item) => item?.photo) // Filter out items without photo
      .map((item) => ({
        src: item.photo,
        alt: item.photos_id || `Photo ${item.photos_id || Date.now()}`,
        id: item.photos_id || Math.random().toString(36).substr(2, 9),
      }));
    setImages(imagesArray);
  }, [photoData]);

  console.log(photoData);

  const handleImageClick = (img) => {
    setCurrentImage(img);
    setOpen(true);
  };

  if (images.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1">
          {localize(language, "NoPhotosAvailable")}
        </Typography>
      </Box>
    );
  }

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
        {images.map((img) => (
          <ImageListItem key={img.id}>
            <img
              src={`${img.src}?auto=compress&cs=tinysrgb&w=400`}
              alt={img.alt}
              loading="lazy"
              className="cursor-pointer bg-slate-50 p-2"
              style={{ borderRadius: 8 }}
              onClick={() => handleImageClick(img.src)}
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
        <IconButton
          aria-label={localize(language, "Close")}
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
            minHeight: 300,
          }}
        >
          {currentImage && (
            <img
              src={`${currentImage}?auto=compress&cs=tinysrgb&w=1600`}
              alt={localize(language, "FullView")}
              style={{
                maxWidth: "80vw",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageViewerCustom;
