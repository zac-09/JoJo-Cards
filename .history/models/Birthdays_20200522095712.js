import moment from "moment";
import { Notifications } from "expo";

class Birthday {
  constructor(id, name, date, phoneNumber) {
    const today = moment();
    const newDate = moment(date);

    if (newDate.format("M") < today.format("M")) {
      newDate.set("year", moment().add(1, "years").format("Y"));
    } else if (
      newDate.format("M") === today.format("M") &&
      newDate.format("D") < today.format("D")
    ) {
      newDate.set("year", moment().add(1, "years").format("Y"));
    } else {
      newDate.set("year", moment().format("Y"));
    }

    const daysLeft = newDate.diff(today, "days");
    const age = today.diff(date, "years");
    this.id = id;
    this.name = name;
    this.date = date;
    this.phoneNumber = phoneNumber;
    this.age = age + 1;
    this.daysLeft = daysLeft;
    this.zodiac = this.find_zodiac(
      parseInt(newDate.format("M")),
      parseInt(newDate.format("D"))
    );

    this.pushReminder(name);
    // this.diffDate = newDate.format("Y")
  }

  find_zodiac = (month, day) => {
    let zodiac = "";

    if ((month == 2 && day >= 21) || (month == 3 && day <= 19)) {
      return (zodiac = "Aries");
    } else if ((month == 3 && day >= 20) || (month == 4 && day <= 20)) {
      return (zodiac = "Taurus");
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      return (zodiac = "Gemini");
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
      return (zodiac = "Cancer");
    } else if ((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
      return (Zodiac = "Leo");
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      return (zodiac = "Vigro");
    } else if ((month == 8 && day >= 23) || (month == 9) & (day <= 22)) {
      return (zodiac = "Libra");
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
      return (zodiac = "Scorpio");
    } else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
      return (zodiac = "Sagittarius");
    } else if ((month == 11 && day >= 22) || (month == 0 && day <= 19)) {
      return (zodiac = "Capricon");
    } else if ((month == 0 && day >= 20) || (month == 1 && day <= 18)) {
      return (zodiac = "Aquarius");
    } else if ((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
      return (zodiac = "Pisces");
    }
    return zodiac;
  };

  pushReminder = async (name) => {
    const localNotification = {
      title: "Birthday Reminder",
      body: `its ${name}'s birthday `, // (string) — body text of the notification.
      ios: {
        // (optional) (object) — notification configuration specific to iOS.
        sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
      },
      // (optional) (object) — notification configuration specific to Android.
      android: {
        channelId: "default",
        sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
        //icon (optional) (string) — URL of icon to display in notification drawer.
        color: "#C2185B", // (optional) (string) — color of the notification icon in notification drawer.
        priority: "max", // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
        sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
        vibrate: true, // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
        // link (optional) (string) — external link to open when notification is selected.
      },
    };
    var date = "2017-03-13";
    var time = "18:00";

    var timeAndDate = moment(date + " " + time);

    console.log(timeAndDate);
    let t = new Date();
    t.setSeconds(t.getSeconds() + 10);
    const schedulingOptions = {
      time: new Date().getTime() + 10000, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
      // repeat: repeat,
    };
    await Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  };
}

export default Birthday;
