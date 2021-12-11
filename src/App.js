import "./App.sass";
import Calendar from "../src/components/Calendar/Calendar";
import DateDifference from "./components/DateDifference/DateDifference";
import React, { useState } from "react";
import * as calendar from "./components/Calendar";

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
};

function App() {
  const [state, setState] = useState(objState);

  const { monthNames, weekDayNames } = defaultData;
  const { currentDate, selectedDate } = state;

  const year = state.date.getFullYear();
  const month = state.date.getMonth();
  console.log(currentDate);
  console.log(selectedDate);

  ////////////////////////////////////////////////////////////////////////////
  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    setState({ date });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    setState({ date });
  };

  const handleDayClick = (date) => {
    setState({ ...state, ...{ selectedDate: date } });
  };

  const monthText = (month) => {
    if (month === 12) {
      return monthNames[0];
    } else if (month === -1) {
      return monthNames[11];
    }
    return monthNames[month];
  };

  const yearText = (year, month) => {
    if (month === 12) {
      return year + 1;
    } else if (month === -1) {
      return year - 1;
    }
    return year;
  };

  //////////////////////////////////////////////////////////////////////////

  return (
    <div className="block">
      <h1 className="description">Разность дат по календарю</h1>
      <div className="block__calendar">
        <button onClick={handlePrevMonthButtonClick}>{"<"}</button>
        <Calendar
          year={yearText(year, month - 1)}
          monthText={monthText(month - 1)}
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
          year={yearText(year, month + 1)}
          monthText={monthText(month + 1)}
          weekDayNames={weekDayNames}
          currentDate={currentDate}
          selectedDate={selectedDate}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month + 1)}
        />
        <button onClick={handleNextMonthButtonClick}>{">"}</button>
      </div>
      <DateDifference />
    </div>
  );
}

export default App;
