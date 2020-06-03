import { INCREASE_BIRTHDAYS } from "../actions/data";

const initialState = {
  birthdays: {
    id: Math.random().toString,
    name: "cake",
    text: "Birthdays",
    counter: 0,
    route: "birthdays",
  },
  events: {
    id: Math.random().toString,
    name: "perm-contact-calendar",
    text: "Events",
    counter: 1,
    route: "events",
  },
  weddings: {
    id: Math.random().toString,
    name: "people-outline",
    text: "Wedding Anniversaries",
    counter: 1,
    route: "weddings",
  },
  work: {
    id: Math.random().toString,
    name: "account-balance-wallet",
    text: "Sales Points",
    counter: 4,
    route: "sales",
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action) {
    case INCREASE_BIRTHDAYS:
      const birthdays = state.birthdays;
      birthdays.counter = birthdays.counter + 1;
      return {
        ...state,
        birthdays: birthdays,
      };

    default:
      return state;
  }
};

export default dataReducer;
