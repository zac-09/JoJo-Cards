export const INCREASE_BIRTHDAYS = "INCREASE_BIRTHDAYS";
export const INCREASE_EVENTS = "INCREASE_EVENTS";
export const INCREASE_WEDDINGS = "INCREASE_WEDDINGS";
export const INCREASE_WORK = "INCREASE_WORK";

export const increaseBirthCounter = () => {
  return {
    type: INCREASE_BIRTHDAYS,
  };
};
export const increaseEventCounter = () => {
  return {
    type: INCREASE_EVENTS,
  };
};
export const increaseWeddingCounter = () => {
  return {
    type: INCREASE_WEDDINGS,
  };
};
export const increaseWorkCounter = () => {
  return {
    type: INCREASE_WORK,
  };
};
