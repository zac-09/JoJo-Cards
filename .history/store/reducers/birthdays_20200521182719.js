import {
  DELETE_BIRTHDAY,
  CREATE_BIRTHDAY,
  UPDATE_BIRTHDAY,
} from "../actions/birthdays";
// import PushNotification from "react-native-push-notification";
// import Push from 'react-native-push-notification'
import { Notifications } from "expo";
import Birthday from "../../models/Birthdays";
const initialState = {
  birthdays: [],
  counter: 0,
};
// const dispatch = useDispatch();
const pushReminder = () => {
  const localNotification = {
    title: "Birthday Reminder",
    body: "its zac birthday", // (string) — body text of the notification.
    ios: {
      // (optional) (object) — notification configuration specific to iOS.
      sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
    },
    // (optional) (object) — notification configuration specific to Android.
    android: {
      sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
      //icon (optional) (string) — URL of icon to display in notification drawer.
      //color (optional) (string) — color of the notification icon in notification drawer.
      priority: "high", // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
      sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
      vibrate: [0, 250, 250, 250], // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
      // link (optional) (string) — external link to open when notification is selected.
    },
  };
  let t = new Date();
  t.setSeconds(t.getSeconds() + 10);
  const schedulingOptions = {
    time: t, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
    repeat: repeat,
  };
  Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );
};
const localNotification = {
  title: "Birthday Reminder",
  body: "its zac birthday", // (string) — body text of the notification.
  ios: {
    // (optional) (object) — notification configuration specific to iOS.
    sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
  },
  // (optional) (object) — notification configuration specific to Android.
  android: {
    sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
    //icon (optional) (string) — URL of icon to display in notification drawer.
    //color (optional) (string) — color of the notification icon in notification drawer.
    priority: "high", // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
    sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
    vibrate: [0, 250, 250, 250], // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
    // link (optional) (string) — external link to open when notification is selected.
  },
};
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
      pushReminder();
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
