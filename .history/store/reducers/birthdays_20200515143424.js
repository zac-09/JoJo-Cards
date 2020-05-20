import {
  DELETE_BIRTHDAY,
  CREATE_BIRTHDAY,
  UPDATE_BIRTHDAY,
} from "../actions/birthdays";
import Birthday from "../../models/Birthdays";
const initialState = {
  birthdays: [],
};

const birthdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BIRTHDAY:
      const newBirthday = new Birthday(
        action.data.name,
        action.data.date,
        action.data.phoneNumber
      );
      return {
        ...state,
        birthdays: state.birthdays.concat(newBirthday),
      };
    case UPDATE_BIRTHDAY:
      const birhdayIndex = state.birthdays.findIndex(
        (birthday) => birthday.id === action.id
      );
      const updated = new Birthday(
        action.id,
        action.data.name,
        action.data.date,
        action.data.phoneNumber
      );
      const updatedBirthdays = [...state.birthdays];
      updatedBirthdays[birhdayIndex] = updated;
      return {
        ...state,
        Birthdays: updatedBirthdays,
      };

    case DELETE_BIRTHDAY:
      return {
        ...state,
        birthdays: state.birthdays.filter(
          (birthday) => birthday.id !== action.id
        ),
      };
    default:
      return state;
  }
};
export default birthdayReducer;
