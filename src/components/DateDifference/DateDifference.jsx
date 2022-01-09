import React, { useState } from "react";

export default function DateDifference({ beforeDate, fromDate, dispatch }) {
  const result =
    beforeDate && fromDate
      ? (beforeDate - fromDate) / (1000 * 60 * 60) / 24
      : "";

  const [value, setValue] = useState("");

  function handleInput(event) {
    setValue(event.target.value);
    let inputData = event.target.value * 24 * 60 * 60 * 1000;
    let beforeDates = new Date(+fromDate + inputData);
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
