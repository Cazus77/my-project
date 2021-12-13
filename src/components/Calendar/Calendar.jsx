import React from "react";
import "./Calendar.sass";
import * as calendar from "./index";
import classnames from "classnames";

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
        <span>{monthText}</span> <span>{year}</span>
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
                      //selected: calendar.areEqual(date, selectedDate),
                    })}
                    onClick={(event) => handleDayClick(event, date)}
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
