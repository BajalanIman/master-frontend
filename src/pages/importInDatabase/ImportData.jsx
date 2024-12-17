import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/constants";

const ImportData = () => {
  const [dataFromDatabase, setDataFromDatabase] = useState([]);

  useEffect(() => {
    const fetchAllperson = async () => {
      try {
        const res = await axios.get(`${BASE_URL}forstbotanischer`);
        setDataFromDatabase(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllperson();
  }, []);

  return (
    <>
      <p className="bg-green-600 mt-5">
        The below data comes from our database
      </p>
      {dataFromDatabase.map((pers, index) => (
        <div key={index}>
          <div key={index} className="bg-green-300 flex justify-start text-xs ">
            <p className="w-44">Name: {pers.name}</p>
            <p className="w-20 bg-blue-100">A1: {pers.A1}</p>
            <p className="w-20 bg-blue-100">A2: {pers.A2}</p>
            <p className="w-20 bg-blue-100">A3: {pers.A3}</p>
            <p className="w-20 bg-blue-100">A4: {pers.A4}</p>
            <p className="w-20 bg-blue-100">A5: {pers.A5}</p>
            <p className="w-20 bg-blue-100">A6: {pers.A6}</p>
            <p className="w-20 bg-blue-100">A7: {pers.A7}</p>
            <p className="w-20 bg-blue-100">A8: {pers.A8}</p>
            <p className="w-20 bg-blue-100">A9: {pers.A9}</p>
            <p className="w-20 bg-blue-100">A10: {pers.A10}</p>
            <p className="w-20 bg-blue-100">A11: {pers.A11}</p>
            <p className="w-20 bg-blue-100">A12: {pers.A12}</p>
            <p className="w-20 bg-blue-100">A13: {pers.A13}</p>
            <p className="w-20 bg-blue-100">A14: {pers.A14}</p>
            <p className="w-20 bg-blue-100">A15: {pers.A15}</p>
            <p className="w-20 bg-blue-100">A16: {pers.A16}</p>
            <p className="w-20 bg-blue-100">A17: {pers.A17}</p>
            <p className="w-20 bg-blue-100">A18: {pers.A18}</p>
            <p className="w-20 bg-blue-100">A19: {pers.A19}</p>
            <p className="w-20 bg-blue-100">A20: {pers.A20}</p>
            <p className="w-20 bg-blue-100">A21: {pers.A21}</p>
            <p className="w-20 bg-blue-100">A22: {pers.A22}</p>
            <p className="w-20 bg-blue-100">A23: {pers.A23}</p>
            <p className="w-20 bg-blue-100">A24: {pers.A24}</p>
            <p className="w-20 bg-blue-100">A25: {pers.A25}</p>
          </div>

          {/*<img
            src=ges: {`/images/${pers.Picture}`}
            alt="My Image"
            style={{ width: "200px", height: "150px" }}
      />*/}
        </div>
      ))}
    </>
  );
};

export default ImportData;
