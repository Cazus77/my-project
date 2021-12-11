import React, { useState } from "react";
import "./Calendar.sass";
import * as calendar from "./index";
import classnames from "classnames";

function Calendar({
  defaultData,
  selectMonth,
  selectYear,
  monthData,
  handleDayClick,
}) {
  console.log(defaultData);
  // console.log(selectYear);
  // console.log(monthNames[selectMonth]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="calendar">
        <header>
          <div>
            <span>{defaultData.monthNames[selectMonth]}</span>
            <span>{selectYear}</span>
          </div>
        </header>
        <table>
          <thead>
            <tr>
              {defaultData.weekDayNames.map((name) => (
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
                        today: calendar.areEqual(date, defaultData.currentDate),
                        selected: calendar.areEqual(
                          date,
                          defaultData.selectedDate
                        ),
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
    </>
  );
}

export default Calendar;
