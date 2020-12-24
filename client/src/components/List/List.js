import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Show from "./Show";

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
    <div>
      <div className="head">List Of Places</div>

      <div>{dataList()}</div>
    </div>
  );
};

export default List;
