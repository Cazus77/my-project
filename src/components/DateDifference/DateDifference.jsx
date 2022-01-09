import React, { useState } from "react";

export default function DateDifference({ beforeDate, fromDate, dispatch }) {
  const result =
    beforeDate && fromDate
      ? (beforeDate - fromDate) / (1000 * 60 * 60) / 24
      : "";

  const [value, setValue] = useState("");

  function handleInput(event) {
    let inputData = event.target.value * 24 * 60 * 60 * 1000;
    setValue(event.target.value);
    let beforeDates = new Date(+fromDate + inputData);
    console.log(beforeDates);
    dispatch({ type: "INPUT_NUMBER_DAYS", payload: beforeDates });
  }
  return (
    <>
      {result ? (
        <input value={result} />
      ) : (
        <input value={value} onChange={(event) => handleInput(event)} />
      )}
    </>
  );
}
