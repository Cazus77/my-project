import { useState } from "react";
import DateDifference from "./DateDifference";

export default function DateDifferenceContainer({
  beforeDate,
  fromDate,
  dispatch,
}) {
  const result =
    beforeDate && fromDate
      ? (beforeDate - fromDate) / (1000 * 60 * 60) / 24
      : "";

  const [value, setValue] = useState("");

  function handleInput(event) {
    setValue(event.target.value);
    console.log(event);
    let inputData = event.target.value * 24 * 60 * 60 * 1000;
    let beforeDates = new Date(+fromDate + inputData);
    dispatch({ type: "INPUT_NUMBER_DAYS", payload: beforeDates });
  }
  return (
    <>
      <DateDifference result={result} value={value} handleInput={handleInput} />
    </>
  );
}
