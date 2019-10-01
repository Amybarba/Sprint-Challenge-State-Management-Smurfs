import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfCard = ({ getSmurfs }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [height, setHeight] = useState("");

  const nameChange = e => {
    setName(e.target.value);
  };
  const ageChange = e => {
    setAge(e.target.value);
  };
  const heightChange = e => {
    setHeight(e.target.value);
  };
  const newSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        console.log(response);
        getSmurfs();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const onSubmit = e => {
    e.preventDefault();
    newSmurf({
      name: name,
      age: age,
      height: height
    });
    setName("");
    setAge();
    setHeight("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={nameChange} type="text" value={name} />
      <input onChange={ageChange} type="text" value={age} />
      <input onChange={heightChange} type="text" value={height} />
      <button type="submit">Get Smurf</button>
    </form>
  );
};

export default connect(
  null,
  { getSmurfs }
)(SmurfCard);
