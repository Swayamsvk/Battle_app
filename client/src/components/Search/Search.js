import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Show from "./Show";

const Search = (props) => {
  const [sdata, setSdata] = useState([]);
  const [fdata, setFdata] = useState("");

  const onChangeHandler = (e) => {
    setFdata(e.target.value);
  };
  const onClickHandler = () => {
    // if (fdata != "")
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
    <div>
      <input
        type="text"
        placeholder="Search"
        value={fdata}
        onChange={(e) => onChangeHandler(e)}
        className="field"
      />
      <input type="submit" value="Search" onClick={(c) => onClickHandler()} />
      <br />
      <div>{renderData()}</div>
    </div>
  );
};

export default Search;
