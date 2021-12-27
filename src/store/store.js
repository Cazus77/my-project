import { createStore } from "redux";
import CONST from "./actions/constants";

const store = createStore(reducer, {
  date: new Date(),
  currentDate: new Date(),
  inputDate: null,
  inputBefore: null,
  inputFrom: null,
});

const reducer = (state, action) => {
  switch (action.type) {
    case CONST.HANDLE_INPUT_CHANGE:
      break;

    case CONST.CLICK_DATE_FROM:
      break;

    case CONST.CLICK_DATE_BEFORE:
      break;

    default:
      return state;
  }
};

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
