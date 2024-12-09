import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";

const ShowDataBeforeSend = ({ title, importedData }) => {
  const [rowNumbers, setRowNumbers] = useState([]);

  useEffect(() => {
    console.log(rowNumbers.length); // Log rowNumbers whenever it changes
  }, [rowNumbers]);

  // Function to update rowNumbers state with all rowIndex values
  const updateRowNumbers = () => {
    const newRowNumbers = importedData.map((row, rowIndex) => rowIndex);
    setRowNumbers(newRowNumbers);
  };

  // Call updateRowNumbers once when component mounts
  useEffect(() => {
    updateRowNumbers();
  }, []);
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "700px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            {title.split(",").map((heading, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#a1d6b2",
                }}
              >
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {importedData.map((row, rowIndex) => {
            if (row.includes(":00:00")) {
              return (
                <TableRow hover role="checkbox" key={rowIndex}>
                  {row.split(",").map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              );
            }
            // else if (
            //   row.includes("00:00:00") ||
            //   row.includes("01:00:00") ||
            //   row.includes("02:00:00") ||
            //   row.includes("03:00:00") ||
            //   row.includes("04:00:00") ||
            //   row.includes("05:00:00") ||
            //   row.includes("06:00:00") ||
            //   row.includes("07:00:00") ||
            //   row.includes("08:00:00") ||
            //   row.includes("09:00:00") ||
            //   row.includes("10:00:00") ||
            //   row.includes("11:00:00") ||
            //   row.includes("12:00:00") ||
            //   row.includes("13:00:00") ||
            //   row.includes("14:00:00") ||
            //   row.includes("15:00:00") ||
            //   row.includes("16:00:00") ||
            //   row.includes("17:00:00") ||
            //   row.includes("18:00:00") ||
            //   row.includes("19:00:00") ||
            //   row.includes("20:00:00") ||
            //   row.includes("21:00:00") ||
            //   row.includes("22:00:00") ||
            //   row.includes("23:00:00") ||
            //   row.includes("24:00:00")
            // )
            // {
            //   return (
            //     <TableRow hover role="checkbox" key={rowIndex}>
            //       {row.split(",").map((cell, cellIndex) => (
            //         <TableCell key={cellIndex}>{cell}</TableCell>
            //       ))}
            //     </TableRow>
            //   );
            // }
            return null; // Return null if the condition is not met
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowDataBeforeSend;
