import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const Count = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/main/count").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="head">Count : </div>

      <div>{data}</div>
    </div>
  );
};

export default Count;
