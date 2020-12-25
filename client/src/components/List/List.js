import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Show from "./Show";
import "./List.css";

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/main/list").then((response) => {
      setData(response.data);
    });
  }, []);

  const dataList = () => {
    return data.map((currentdata) => {
      return <Show data={currentdata} key={currentdata._id} />;
    });
  };

  return (
    <div className="container2">
      <div className="sub">List Of Places</div>
      <br />

      <div>{dataList()}</div>
    </div>
  );
};

export default List;
