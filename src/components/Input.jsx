import React from "react";

import "./Input.css";

const Input = ({ onChange }) => {
  return (
    <input
      onChange={(text) => {
        onChange(text.target.value);
        console.log(text.target.value);
      }}
      className="input"
    ></input>
  );
};

export default Input;
