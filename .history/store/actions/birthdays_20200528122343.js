export const CREATE_BIRTHDAY = "CREATE_BIRTHDAY";
export const UPDATE_BIRTHDAY = "UPDATE_BIRTHDAY";
export const DELETE_BIRTHDAY = "DELETE_BIRTHDAY";

export const deleteBirthday = (birthdayId) => {
  return {
    type: DELETE_BIRTHDAY,
    id: birthdayId,
   
  };
};

export const updateBirthday = (birthdayId, date, name, phoneNumber) => {
  return {
    type: UPDATE_BIRTHDAY,
    id: birthdayId,
    data: {
        date,
        name,
        phoneNumber,
      },
  };
};

export const createBirthday = (date, name, phoneNumber,avatar) => {
  return {
    type: CREATE_BIRTHDAY,
    data: {
      date,
      name,
      phoneNumber,
      avatar
    },
  };
};
