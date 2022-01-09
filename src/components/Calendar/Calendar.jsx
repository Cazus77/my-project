import React from "react";
import "./Calendar.sass";
import * as calendar from "./index";
import classnames from "classnames";

function Calendar({
  year,
  monthText,
  weekDayNames,
  handleDayClick,
  monthData,
  currentDate,
  fromDate,
  beforeDate,
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
                      selected:
                        calendar.areEqual(date, fromDate) ||
                        calendar.areEqual(date, beforeDate),
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
