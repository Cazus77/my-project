import "./App.sass";
import Calendar from "../src/components/Calendar/Calendar";
import DateDifference from "./components/DateDifference/DateDifference";
import React, { useState } from "react";
import * as calendar from "./components/Calendar/index";
import { useDispatch, useSelector } from "react-redux";

const defaultData = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
};
const objState = {
  date: new Date(),
  currentDate: new Date(),
  selectedDate: null,
  flag: false,
};

function App() {
  const [data, setData] = useState(objState);
  //const [inputFrom, setInputFrom] = useState();
  //const [inputBefore, setInputBefore] = useState();

  const { monthNames, weekDayNames } = defaultData;
  const { currentDate, selectedDate } = data;

  const year = data.date.getFullYear();
  const month = data.date.getMonth();

  const dispatch = useDispatch();
  const fromDate = useSelector((state) => state.selectedFromDate);
  const beforeDate = useSelector((state) => state.selectedBeforeDate);

  console.log(data);
  console.log(fromDate);
  console.log(beforeDate);

  ////////////////////////////////////////////////////////////////////////////
  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    setData({ date });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    setData({ date });
  };

  const handleDayClick = (event, date) => {
    if (!fromDate) {
      dispatch({ type: "SELECT_FROM_DATA", payload: date });
      event.target.className !== "day selected"
        ? (event.target.className = "day selected")
        : (event.target.className = "day");
    } else if (fromDate && !beforeDate) {
      dispatch({ type: "SELECT_BEFORE_DATA", payload: date });
      event.target.className !== "day selected"
        ? (event.target.className = "day selected")
        : (event.target.className = "day");
    }
  };

  //////////////////////////////////////////////////////////////////////////

  return (
    <div className="block">
      <h1 className="description">Разность дат по календарю</h1>
      <div className="block__calendar">
        <button onClick={handlePrevMonthButtonClick}>{"<"}</button>
        <Calendar
          year={calendar.yearText(year, month - 1)}
          monthText={calendar.monthText(month - 1, monthNames)}
          weekDayNames={weekDayNames}
          currentDate={currentDate}
          selectedDate={selectedDate}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month - 1)}
        />
        <Calendar
          year={year}
          monthText={monthNames[month]}
          weekDayNames={weekDayNames}
          currentDate={currentDate}
          selectedDate={selectedDate}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month)}
        />
        <Calendar
          year={calendar.yearText(year, month + 1)}
          monthText={calendar.monthText(month + 1, monthNames)}
          weekDayNames={weekDayNames}
          currentDate={currentDate}
          selectedDate={selectedDate}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month + 1)}
        />
        <button onClick={handleNextMonthButtonClick}>{">"}</button>
      </div>
      <DateDifference
        // inputFrom={inputFrom}
        // inputBefore={inputBefore}
        // setInputBefore={setInputBefore}
        state={data}
        setState={setData}
        selectedDate={selectedDate}
        handleDayClick={handleDayClick}
      />
    </div>
  );
}

export default App;
