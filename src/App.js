import "./App.sass";
import Calendar from "../src/components/Calendar/Calendar";
import PrevMonthButton from "./components/PrevMounthButton/PrevMounthButton";
import NextMonthButton from "./components/NextMounthButton/NextMounthButton";
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

  const year = state.date.getFullYear();
  const month = state.date.getMonth();

  ////////////////////////////////////////////////////////////////////////////
  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    setState({ date });
    console.log(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    setState({ date });
  };
  //////////////////////////////////////////////////////////////////////////
  return (
    <div className="block">
      <h1 className="description">Разность дат по календарю</h1>
      <div className="block__calendar">
        <button onClick={handlePrevMonthButtonClick}>{"<"}</button>
        <Calendar />
        <Calendar />
        <Calendar />
        <button onClick={handleNextMonthButtonClick}>{">"}</button>
      </div>
    </div>
  );
}

export default App;
