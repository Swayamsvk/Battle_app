import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Count.css";

const Count = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/main/count").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container3">
      <div className="head subcont">Total Number Of Battles </div>

      <div style={{ marginLeft: "47vw", color: "white", fontSize: "7vw" }}>
        {data}
      </div>
    </div>
  );
};

export default Count;
