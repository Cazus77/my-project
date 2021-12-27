import "./App.sass";
import Calendar from "../src/components/Calendar/Calendar";
import DateDifference from "./components/DateDifference/DateDifference";
import React, { useState } from "react";
import * as calendar from "./components/Calendar/index";
import { useDispatch, useSelector } from "react-redux";

//////////////////////////////////////////////store////////////////
// const defaultData = {
//   monthNames: [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
//   ],
//   weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
// };
// const objState = {
//   date: new Date(),
//   currentDate: new Date(),
//   selectedDate: null,
// };
/////////////////////////////////////////////////////////////////////////////////

function App() {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);
  const monthNames = useSelector((state) => state.monthNames);
  const weekDayNames = useSelector((state) => state.weekDayNames);
  const year = date.getFullYear();
  const month = date.getMonth();

  console.log(monthNames);
  console.log(weekDayNames);
  // const [data, setData] = useState(date);

  // const [inputFrom, setInputFrom] = useState();
  // const [inputBefore, setInputBefore] = useState();
  //
  // const { monthNames, weekDayNames } = defaultData;
  // const { currentDate, selectedDate } = state;
  //

  ////////////////////////////////////////////////////////////////////////////
  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    console.log(date);
    //setData({ date });
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    console.log(date);
    //setData({ date });
  };
  //
  // const handleDayClick = (event, date) => {
  //   setState({ ...state, ...{ selectedDate: date } });
  //   event.target.className !== "day selected"
  //     ? (event.target.className = "day selected")
  //     : (event.target.className = "day");
  //   console.log(date);
  //   !selectedDate ? setInputFrom(date) : setInputBefore(date);
  // };

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
          // currentDate={currentDate}
          // selectedDate={selectedDate}
          // handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month - 1)}
        />
        <Calendar
          year={year}
          monthText={monthNames[month]}
          weekDayNames={weekDayNames}
          // currentDate={currentDate}
          // selectedDate={selectedDate}
          // handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month)}
        />
        <Calendar
          year={calendar.yearText(year, month + 1)}
          monthText={calendar.monthText(month + 1, monthNames)}
          weekDayNames={weekDayNames}
          // currentDate={currentDate}
          // selectedDate={selectedDate}
          // handleDayClick={handleDayClick}
          monthData={calendar.getMonthData(year, month + 1)}
        />
        <button onClick={handleNextMonthButtonClick}>{">"}</button>
      </div>
      <DateDifference
      // inputFrom={inputFrom}
      // inputBefore={inputBefore}
      // setInputBefore={setInputBefore}
      // state={state}
      // setState={setState}
      // selectedDate={selectedDate}
      // handleDayClick={handleDayClick}
      />
    </div>
  );
}

export default App;
