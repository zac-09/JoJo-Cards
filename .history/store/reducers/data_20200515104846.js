const initialState = {
  data: [
    {
      id: Math.random().toString,
      name: "cake",
      text: "Birthdays",
      counter: "1",
      route: "birthdays",
    },
    {
      id: Math.random().toString,
      name: "perm-contact-calendar",
      text: "Events",
      counter: "1",
      route: "events",
    },
    {
      id: Math.random().toString,
      name: "people-outline",
      text: "Wedding Anniversaries",
      counter: "1",
      route: "weddings",
    },
    {
      id: Math.random().toString,
      name: "account-balance",
      text: "Work Anniversaries",
      counter: "1",
      route: "work",
    },
    {
      id: Math.random().toString,
      name: "account-balance-wallet",
      text: "Sales Points",
      counter: "4",
      route: "sales",
    },
  ],
};

const dataReducer = (state = initialState, action) => {
  return state;
};

export default dataReducer;
