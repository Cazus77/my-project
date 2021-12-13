import React, { useState } from "react";

export default function DateDifference({
  inputUntil = 0,
  inputFrom = 0,
  currentDate,
}) {
  const result = inputUntil && inputFrom ? console.log(1) : console.log(2);
  // inputUntil && inputFrom
  //   ? (currentDate - inputFrom) / (1000 * 60 * 60) / 24
  //   : (inputUntil - inputFrom) / (1000 * 60 * 60) / 24;
  const [value, setValue] = useState(result);

  console.log(result);
  console.log(value);
  console.log(result);

  function handleChange(event) {
    console.log(event.target.value);
    setValue(result);
  }
  return <input value={result} onChange={(event) => handleChange(event)} />;
}
