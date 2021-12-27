export const initialState = {
  date: new Date(),
  currentDate: new Date(),
  inputDate: null,
  inputBefore: null,
  inputFrom: null,
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
// const defaultData = {
//
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "HANDLE_INPUT_CHANGE":
//       console.log(1);
//       return;
//
//     case "CLICK_DATE_FROM":
//       console.log(2);
//       return;
//
//     case "CLICK_DATE_BEFORE":
//       console.log(3);
//       return;
//
//     default:
//       return state;
//   }
// };
