import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

function createData(name, value) {
  return { name, value };
}

const TableCurrentAirPollution = ({ openWeaterAll }) => {
  const rows = [
    createData("Carbon Monoxide (CO)", openWeaterAll.co),
    createData("Ammonia (NH3)", openWeaterAll.nh3),
    createData("Nitrogen Monoxide (NO)", openWeaterAll.no),
    createData("Nitrogen Dioxide (NO2)", openWeaterAll.no2),
    createData("Ozone (O3)", openWeaterAll.o3),
    createData("Sulfur Dioxide (SO2)", openWeaterAll.so2),
    createData("pm2_5", openWeaterAll.pm2_5),
    createData("pm10", openWeaterAll.pm10),
  ];

  return (
    <Box sx={{ width: { xs: "350px", md: "450px" } }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  height: "34px",
                }}
              >
                components
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  height: "56px",
                }}
              >
                Value &nbsp;(μg/m3)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCurrentAirPollution;
