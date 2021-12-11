import "./App.sass";
import Calendar from "../src/components/Calendar/Calendar";
import DateDifference from "./components/DateDifference/DateDifference";
import React, { useState } from "react";
import * as calendar from "./components/Calendar";

const defaultData = {
  years: [2017, 2018, 2019, 2020, 2021, 2022],
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
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDate(),
  currentDate: new Date(),
  selectedDate: null,
};

function App() {
  const [state, setState] = useState(objState);

  console.log(state.date);
  const { years, monthNames, weekDayNames } = defaultData;
  const { currentDate, selectedDate } = state;

  const year = state.date.getFullYear();
  const month = state.date.getMonth();

  // const monthData = calendar.getMonthData(year, month);
  // console.log(monthData);
  ////////////////////////////////////////////////////////////////////////////
  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    setState({ date });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    setState({ date });
  };

  const handleSelectChange = () => {
    // const year = yearSelect.value;
    // const month = monthSelect.value;
    // const date = new Date(year, month);
    // console.log(date);
    // setState({ date });
  };
  const handleDayClick = (date) => {
    setState({ ...state, ...{ selectedDate: date } });
  };
  //////////////////////////////////////////////////////////////////////////
  return (
    <div className="block">
      <h1 className="description">Разность дат по календарю</h1>
      <div className="block__calendar">
        <button onClick={handlePrevMonthButtonClick}>{"<"}</button>
        <Calendar
          year={year}
          years={years}
          monthText={monthNames[month - 1]}
          month={month}
          handleSelectChange={handleSelectChange}
          monthNames={monthNames}
          weekDayNames={weekDayNames}
          currentDate={currentDate}
          selectedDate={selectedDate}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month - 1)}
        />
        <Calendar
          year={year}
          years={years}
          monthText={monthNames[month]}
          month={month}
          handleSelectChange={handleSelectChange}
          monthNames={monthNames}
          weekDayNames={weekDayNames}
          currentDate={currentDate}
          selectedDate={selectedDate}
          handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month)}
        />
        <Calendar
          year={year}
          years={years}
          monthText={monthNames[month + 1]}
          month={month}
          handleSelectChange={handleSelectChange}
          monthNames={monthNames}
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
