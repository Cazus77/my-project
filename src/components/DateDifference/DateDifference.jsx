import React, { useState } from "react";

export default function DateDifference({
  inputBefore = 0,
  inputFrom = 0,
  currentDate,
}) {
  const result =
    inputBefore && inputFrom
      ? (inputBefore - inputFrom) / (1000 * 60 * 60) / 24
      : (inputFrom - currentDate) / (1000 * 60 * 60) / 24;
  const [value, setValue] = useState(0);

  console.log(inputFrom);
  console.log(value);
  console.log(inputBefore);

  function handleChange(event) {
    console.log(event.target.value);
    setValue(result);
  }

  return <input value={Math.floor(result)} onChange={handleChange} />;
}
//inputUntil && inputFrom ? console.log(1) : console.log(2);
