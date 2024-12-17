import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Modal, Typography } from "@mui/material";
import { BASE_URL } from "../../../../constants/constants";

const DataSender = ({
  soilAttributeIds,
  SoilTempArrays,
  climateAttributeIds,
  ClimateArrays,
  TIMESTAMP,
  station_id,
}) => {
  const [open, setOpen] = useState(false);
  const dataSendHandler = async () => {
    console.log("Data send handler started");

    const batchSize = 1000; // Adjust batch size as per your needs
    const recordsToInsert = {
      soil: [],
      climate: [],
    };

    console.log(`TIMESTAMP size: ${TIMESTAMP.length}`);
    console.log(`soilAttributeIds size: ${soilAttributeIds.length}`);
    console.log(`SoilTempArrays size: ${SoilTempArrays.length}`);

    const processBatch = async (startIndex, batchSize, type) => {
      const batchRecords = [];
      for (
        let i = startIndex;
        i < Math.min(startIndex + batchSize, TIMESTAMP.length);
        i++
      ) {
        const timestamp = TIMESTAMP[i].replace(/\"/g, "");

        if (type === "soil") {
          soilAttributeIds.forEach((id, idx) => {
            const data = {
              station_id: station_id,
              soil_attribute_id: id,
              date_time: timestamp,
              value: parseFloat(SoilTempArrays[idx][i]),
            };
            batchRecords.push(data);
          });
        } else if (type === "climate") {
          climateAttributeIds.forEach((id, idx) => {
            const data = {
              station_id: station_id,
              climate_attribute_id: id,
              date_time: timestamp,
              value: ClimateArrays[idx][i],
            };
            batchRecords.push(data);
          });
        }

        if (i % 100 === 0) {
          console.log(`Processed ${i} ${type} timestamps`);
        }
      }

      if (type === "soil") {
        recordsToInsert.soil.push(...batchRecords);
      } else if (type === "climate") {
        recordsToInsert.climate.push(...batchRecords);
      }
    };

    const processAllData = (batchSize, type, callback) => {
      let startIndex = 0;
      const processNextBatch = () => {
        if (startIndex < TIMESTAMP.length) {
          processBatch(startIndex, batchSize, type).then(() => {
            startIndex += batchSize;
            setTimeout(processNextBatch, 0);
          });
        } else {
          console.log(
            `${
              type.charAt(0).toUpperCase() + type.slice(1)
            } data preparation complete`
          );
          callback();
        }
      };
      processNextBatch();
    };

    const chunkArray = (array, size) => {
      return Array.from(
        { length: Math.ceil(array.length / size) },
        (_, index) => array.slice(index * size, (index + 1) * size)
      );
    };

    const sendDataChunks = async (chunks, endpoint) => {
      for (let chunk of chunks) {
        console.log(`Sending ${chunk.length} records to ${endpoint}`);
        const startSending = performance.now();
        try {
          await axios.post(`${BASE_URL}bulk_${endpoint}_measurements`, chunk);
          console.log(`Sent ${endpoint} data chunk`);
        } catch (error) {
          console.error(`Error sending ${endpoint} data:`, error);
        }
        const endSending = performance.now();
        console.log(
          `Sending chunk to ${endpoint} took ${endSending - startSending} ms`
        );
      }
    };

    const sendData = async () => {
      // Chunk Soil Data
      const soilChunks = chunkArray(recordsToInsert.soil, batchSize);
      console.log(`Number of soil chunks: ${soilChunks.length}`);

      // Chunk Climate Data
      const climateChunks = chunkArray(recordsToInsert.climate, batchSize);
      console.log(`Number of climate chunks: ${climateChunks.length}`);

      // Send Soil Data Chunks
      await sendDataChunks(soilChunks, "soil");

      // Send Climate Data Chunks
      await sendDataChunks(climateChunks, "climate");

      console.log("All data sent successfully");
      // window.location.reload(); // Optionally reload after all requests complete
      // alert(
      //   "Your data has been sent to the database. Data that already exists in the database will not be sent!"
      // );
      setOpen(true);
    };

    console.log("Preparing soil data...");
    processAllData(batchSize, "soil", () => {
      console.log("Preparing climate data...");
      processAllData(batchSize, "climate", sendData);
    });
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 550,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            Important
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your data has been successfully sent to the database. Data that
            already exists in the database will not be sent!
          </Typography>
          <Box sx={{ width: "full", display: "flex", justifyContent: "end" }}>
            <Button
              onClick={handleClose}
              sx={{
                border: "1px solid gray",
                bgcolor: "lightgray",
                color: "black",
              }}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>

      <Button
        variant="button"
        onClick={dataSendHandler}
        sx={{
          mt: 3,
          width: 600,
          height: 60,
          bgcolor: "green",
          color: "white",
          fontWeight: "bold",
          fontFamily: "serif",
          fontSize: 20,
          ":hover": { bgcolor: "#2E8B57" },
        }}
      >
        Submit
      </Button>
    </>
  );
};
export default DataSender;
