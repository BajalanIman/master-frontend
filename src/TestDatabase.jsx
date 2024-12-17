import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../src/constants/constants";

const TestDatabase = () => {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}combinedData`);
        setCombinedData(response.data);
        console.log(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once (on component mount)

  return <div>{console.log(JSON.stringify(combinedData, null, 2))}</div>;
};

export default TestDatabase;
