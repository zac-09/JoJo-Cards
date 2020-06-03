import {
  DELETE_BIRTHDAY,
  CREATE_BIRTHDAY,
  UPDATE_BIRTHDAY,
} from "../actions/birthdays";
const PushNotification = require("react-native-push-notification");
// import Push from 'react-native-push-notification'
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,

  requestPermissions: true,
});
import Birthday from "../../models/Birthdays";
const initialState = {
  birthdays: [],
  counter: 0,
};
// const dispatch = useDispatch();
const pushReminder = () => {
  PushNotification.localNotification({
    /* Android Only Properties */
    ticker: "zac's birthday", // (optional)
    autoCancel: true, // (optional) default: true
    largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
    smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
    // bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
    // subText: "This is a subText", // (optional) default: none
    color: "red", // (optional) default: system default
    vibrate: true, // (optional) default: true
    vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    tag: "some_tag", // (optional) add tag to message
    group: "group", // (optional) add group to message
    ongoing: false, // (optional) set whether this is an "ongoing" notification
    priority: "high", // (optional) set notification priority, default: high
    visibility: "private", // (optional) set notification visibility, default: private
    importance: "high", // (optional) set notification importance, default: high
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)

    /* iOS only properties */
    alertAction: "view", // (optional) default: view
    category: "", // (optional) default: empty string
    userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)

    /* iOS and Android properties */
    title: "Birthday Reminder", // (optional)
    message: "Zac's birthday", // (required)
    playSound: true, // (optional) default: true
    soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    actions: '["Yes", "No"]', // (Android only) See the doc for notification actions to know more
  });
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
