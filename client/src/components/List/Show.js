import React from "react";

const Show = ({ data }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>Places : {data.location}</p>
    </div>
  );
};

export default Show;
