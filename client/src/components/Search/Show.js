import React from "react";

const Show = ({ sdata }) => {
  return (
    <div style={{ paddingLeft: 20, color: "white" }}>
      <p>Name : {sdata.name}</p>
      <p>Year :{sdata.year}</p>
      <p>Battle Number : {sdata.battle_number}</p>
      <p>Attacker King : {sdata.attacker_king}</p>
      <p>Defender King : {sdata.defender_king}</p>
      <p>Attacker 1 : {sdata.attacker_1}</p>
      <p>Attacker 2 : {sdata.attacker_2}</p>
      <p>Attacker 3 : {sdata.attacker_3}</p>
      <p>Attacker 4 : {sdata.attacker_4}</p>
      <p>Defender 1 : {sdata.defender_1}</p>
      <p>Defender 2 : {sdata.defender_2}</p>
      <p>Defender 3 : {sdata.defender_3}</p>
      <p>Defender 4 : {sdata.defender_4}</p>
      <p>Attacker Outcome : {sdata.attacker_outcome}</p>
      <p>Battle Type : {sdata.battle_type}</p>
      <p>Major Death : {sdata.major_death}</p>
      <p>Major Capture : {sdata.major_capture}</p>
      <p>Attacker Size : {sdata.attacker_size}</p>
      <p>Defender Size : {sdata.defender_size}</p>
      <p>Attacker Commander : {sdata.attacker_commander}</p>
      <p>Defender Commander : {sdata.defender_commander}</p>
      <p>Summer : {sdata.summer}</p>
      <p>Location : {sdata.location}</p>
      <p>Region : {sdata.region}</p>
      <br />
      <br />
    </div>
  );
};

export default Show;
