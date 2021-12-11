import "./App.sass";
import Calendar from "../src/components/Calendar/Calendar";
import PrevMonthButton from "./components/PrevMounthButton/PrevMounthButton";
import NextMonthButton from "./components/NextMounthButton/NextMounthButton";
import DateDifference from "./components/DateDifference/DateDifference";
import { useState } from "react";
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
  const [selectMonth, setSelectMonth] = useState(state.month);
  const [selectYear, setSelectYear] = useState(state.year);

  const { currentDate, selectedDate } = state;
  const { years, monthNames, weekDayNames } = defaultData;
  const monthData = calendar.getMonthData(selectYear, selectMonth);
  /////////////////////////////////////////////////////////////////////////////////
  const handleDayClick = (date) => {
    setState({ ...state, ...{ selectedDate: date } });
  };
  const handlePrevMonthButtonClick = () => {
    const date = new Date(state.year, state.month - 1);
    console.log(date);
    setState({ date });
  };
  /////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="block">
      <h1 className="description">Разность дат по календарю</h1>
      <div className="block__calendar">
        <PrevMonthButton
          handlePrevMonthButtonClick={handlePrevMonthButtonClick}
        />
        <Calendar
          defaultData={defaultData}
          selectMonth={selectMonth}
          selectYear={selectYear}
          monthData={monthData}
          objState={objState}
          handleDayClick={handleDayClick}
        />{" "}
        <Calendar
          defaultData={defaultData}
          selectMonth={selectMonth}
          selectYear={selectYear}
          monthData={monthData}
          objState={objState}
          handleDayClick={handleDayClick}
        />{" "}
        <Calendar
          defaultData={defaultData}
          selectMonth={selectMonth}
          selectYear={selectYear}
          monthData={monthData}
          objState={objState}
          handleDayClick={handleDayClick}
        />
        <NextMonthButton />
      </div>
      <DateDifference />
    </div>
  );
}

export default App;
