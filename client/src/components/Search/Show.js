import React from "react";

const Show = ({ sdata }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>Places : {sdata.name}</p>
    </div>
  );
};

export default Show;
