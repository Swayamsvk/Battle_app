import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Show from "./Show";
import "./Search.css";

const Search = (props) => {
  const [sdata, setSdata] = useState([]);
  const [fdata, setFdata] = useState("");

  const onChangeHandler = (e) => {
    setFdata(e.target.value);
  };
  const onClickHandler = () => {
    search(fdata);
  };

  const search = async (val) => {
    const res = await axios(`http://localhost:5000/main/search?king=${val}`);
    console.log(typeof res.data);
    const searchpart = await res.data;

    if (fdata != "") setSdata(searchpart);
    else setSdata([]);
    console.log(searchpart);
  };

  const renderData = () => {
    return sdata.map((currentdata) => {
      return <Show sdata={currentdata} key={currentdata._id} />;
    });
  };

  return (
    <div className="container4">
      <h3 className="subcont2">Search for a king or location</h3>
      <input
        type="text"
        placeholder="Search"
        value={fdata}
        onChange={(e) => onChangeHandler(e)}
        className="field"
      />
      <br />
      <br />
      <input
        type="submit"
        className="button1"
        value="Search"
        onClick={(c) => onClickHandler()}
      />
      <br />
      <br />

      <div>{renderData()}</div>
    </div>
  );
};

export default Search;
