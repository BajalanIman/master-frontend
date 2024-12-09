import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { useImageViewer } from "react-image-viewer-hook";

const ImageViewerCustom = ({ photoData }) => {
  const { getOnClick, ImageViewer } = useImageViewer();

  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesArray = photoData.map((el) => el.photo);
    setImages(imagesArray);
  }, [photoData]);

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          marginTop: 8,
          fontWeight: "bold",
          fontFamily: "Lobster",
          fontWeight: 500,
          fontStyle: "large",
          textAlign: "center",
          width: "100%",
        }}
      >
        Photo gallery
      </Typography>

      <div className="flex w-full flex-wrap justify-center gap-1">
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              margin: "2px",
              flex: "0 0 auto",
              maxWidth: "450px",
              cursor: "pointer",
            }}
          >
            <a
              key={src}
              href={`${src}?auto=compress&cs=tinysrgb&w=1200`}
              onClick={getOnClick(`${src}?auto=compress&cs=tinysrgb&w=1200`)}
            >
              <img
                src={`${src}?auto=compress&cs=tinysrgb&w=400`}
                style={{
                  width: "450px",
                  height: "300px",
                  cursor: "pointer",
                  gap: 2,
                }}
                className="hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>

      <ImageViewer />
    </>
  );
};

export default ImageViewerCustom;
