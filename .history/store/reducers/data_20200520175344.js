import { INCREASE_BIRTHDAYS } from "../actions/data";

const initialState = {
  birthdays: {
    id: Math.floor(Math.random() * 101),
    name: "cake",
    text: "Birthdays",
    counter: 0,
    route: "birthdays",
  },
  events: {
    id: Math.floor(Math.random() * 101),
    name: "perm-contact-calendar",
    text: "Events",
    counter: 1,
    route: "events",
  },
  weddings: {
    id: Math.floor(Math.random() * 101),
    name: "people-outline",
    text: "Wedding Anniversaries",
    counter: 1,
    route: "weddings",
  },
  sales: {
    id: Math.floor(Math.random() * 101),
    name: "account-balance-wallet",
    text: "Sales Points",
    counter: 4,
    route: "sales",
  },
  work: {
    id: Math.floor(Math.random() * 101),
    name: "account-balance",
    text: "Work Anniversaries",
    counter: 4,
    route: "work",
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
