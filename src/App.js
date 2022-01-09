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
};

function App() {
  const [data, setData] = useState(objState);

  const { monthNames, weekDayNames } = defaultData;
  const { currentDate } = data;

  const year = data.date.getFullYear();
  const month = data.date.getMonth();

  const dispatch = useDispatch();
  const fromDate = useSelector((state) => state.selectedFromDate);
  const beforeDate = useSelector((state) => state.selectedBeforeDate);
  const inputValue = useSelector((state) => state.inputValue);

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
    let classNameSelect = event.target.className;

    if (!fromDate) {
      dispatch({ type: "SELECT_FROM_DATA", payload: date });
    } else if (
      calendar.areEqual(date, fromDate) &&
      classNameSelect === "day selected"
    ) {
      dispatch({ type: "DELETE_FROM_DATA", payload: null });
    } else if (fromDate && !beforeDate) {
      dispatch({ type: "SELECT_BEFORE_DATA", payload: date });
    } else if (
      calendar.areEqual(date, beforeDate) &&
      classNameSelect === "day selected"
    ) {
      dispatch({ type: "DELETE_BEFORE_DATA", payload: null });
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
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month - 1)}
          fromDate={fromDate}
          beforeDate={beforeDate}
          inputValue={inputValue}
        />
        <Calendar
          year={year}
          monthText={monthNames[month]}
          weekDayNames={weekDayNames}
          currentDate={currentDate}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month)}
          fromDate={fromDate}
          beforeDate={beforeDate}
          inputValue={inputValue}
        />
        <Calendar
          year={calendar.yearText(year, month + 1)}
          monthText={calendar.monthText(month + 1, monthNames)}
          weekDayNames={weekDayNames}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month + 1)}
          fromDate={fromDate}
          beforeDate={beforeDate}
          inputValue={inputValue}
        />
        <button onClick={handleNextMonthButtonClick}>{">"}</button>
      </div>
      <DateDifference
        fromDate={fromDate}
        beforeDate={beforeDate}
        handleDayClick={handleDayClick}
        inputValue={inputValue}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
