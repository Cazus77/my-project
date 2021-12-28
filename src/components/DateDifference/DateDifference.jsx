import React, { useState } from "react";

export default function DateDifference({
  inputBefore,
  inputFrom,
  setInputBefore,
  setState,
  state,
}) {
  const result =
    inputBefore && inputFrom
      ? (inputBefore - inputFrom) / (1000 * 60 * 60) / 24
      : "";

  console.log(result);

  const [value, setValue] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleInput(event) {
    let inputData = event.target.value * 24 * 60 * 60 * 1000;
    let newDate = new Date(+inputFrom + inputData);
    setState({ ...state, ...{ selectedDate: newDate } });
    setInputBefore(newDate);
  }

  console.log(value);
  return (
    <input
      value={value}
      onChange={handleChange}
      onInput={(event) => handleInput(event)}
    />
  );
}
