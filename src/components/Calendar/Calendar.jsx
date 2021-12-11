import React from "react";
import "./Calendar.sass";
import * as calendar from "./index";
import classnames from "classnames";

// const defaultData = {
//   years: [
//     2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
//     2022, 2023,
//   ],
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
//
// const objState = {
//   date: new Date(),
//   year: new Date().getFullYear(),
//   month: new Date().getMonth(),
//   day: new Date().getDate(),
//   currentDate: new Date(),
//   selectedDate: null,
// };

function Calendar({
  year,
  weekDayNames,
  currentDate,
  selectedDate,
  handleDayClick,
  monthText,
  monthData,
}) {
  return (
    <div className="calendar">
      <header>
        {monthText}-{year}
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
