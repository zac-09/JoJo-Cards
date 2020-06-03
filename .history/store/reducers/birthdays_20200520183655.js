import {
  DELETE_BIRTHDAY,
  CREATE_BIRTHDAY,
  UPDATE_BIRTHDAY,
} from "../actions/birthdays";
import Birthday from "../../models/Birthdays";
const initialState = {
  birthdays: [],
  counter: 9,
};
// const dispatch = useDispatch();

const birthdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BIRTHDAY:
      const newBirthday = new Birthday(
        Math.floor(Math.random() * (1000 - 20)) + 20,
        action.data.name,
        action.data.date,
        action.data.phoneNumber
      );
      // dispatch(dataActions.increaseBirthCounter());
      return {
        ...state,
        birthdays: state.birthdays.concat(newBirthday),
        counter: state.counter + 1,
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
      console.log("this is the updated birthday", updated);
      const updatedBirthdays = [...state.birthdays];
      updatedBirthdays[birhdayIndex] = updated;
      console.log("this is the updated birthdays nigga", updatedBirthdays);

      return {
        ...state,
        birthdays: updatedBirthdays,
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
