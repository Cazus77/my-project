import React, { useState } from "react";
import "./Calendar.sass";
import * as calendar from "./index";
import classnames from "classnames";

const defaultData = {
  years: [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ],
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

function Calendar() {
  const [state, setState] = useState(objState);

  const { years, monthNames, weekDayNames } = defaultData;
  const { currentDate, selectedDate } = state;

  const year = state.date.getFullYear();
  const month = state.date.getMonth();
  console.log(month);
  console.log(state.month);
  console.log(selectedDate);

  const handleSelectChange = () => {
    console.log(monthSelect.value);
    const year = yearSelect.value;
    const month = monthSelect.value;
    const date = new Date(year, month);
    console.log(date);

    setState({ date });
  };
  const handleDayClick = (date) => {
    setState({ ...state, ...{ selectedDate: date } });
  };

  let monthSelect;
  let yearSelect;

  const monthData = calendar.getMonthData(year, month);
  console.log(month);
  return (
    <div className="calendar">
      <header>
        <select
          ref={(element) => (monthSelect = element)}
          value={month}
          onChange={handleSelectChange}
        >
          {monthNames.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>
        <select
          ref={(element) => (yearSelect = element)}
          value={year}
          onChange={handleSelectChange}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </header>
      <table>
        <thead>
          <tr>
            {weekDayNames.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthData.map((week, index) => (
            <tr key={index} className="week">
              {week.map((date, index) =>
                date ? (
                  <td
                    key={index}
                    className={classnames("day", {
                      today: calendar.areEqual(date, currentDate),
                      selected: calendar.areEqual(date, selectedDate),
                    })}
                    onClick={() => handleDayClick(date)}
                  >
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={index} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
