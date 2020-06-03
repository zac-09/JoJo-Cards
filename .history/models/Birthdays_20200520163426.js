import moment from "moment";
class Birthday {
  constructor(id, name, date, phoneNumber) {
    const today = moment();
    const newDate = moment(date);

    if (newDate.format("M") < today.format("M")) {
      newDate.set("year", moment().add(1, "years").format("Y"));
    } else if (
      newDate.format("M") == today.format("M") &&
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
    this.zodiac = this.find_zodiac(newDate.format("M"), newDate.format("D"));
    // this.diffDate = newDate.format("Y")
  }

  find_zodiac = (month, day) => {
    let zodiac = "isaac";
    console.log("month is ", month, "day is ", day);
    if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
      return (zodiac = "Aries");
    } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
      return (zodiac = "Taurus");
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      return (zodiac = "Gemini");
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
      return (zodiac = "Cancer");
    } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
      return (Zodiac = "Leo");
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return (zodiac = "Vigro");
    } else if ((month === 8 && day >= 23) || (month === 9) & (day <= 22)) {
      return (zodiac = "Libra");
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
      return (zodiac = "Scorpio");
    } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
      return (zodiac = "Sagittarius");
    } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
      return (zodiac = "Capricon");
    } else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
      return (zodiac = "Aquarius");
    } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
      return (zodiac = "Pisces");
    }
    return zodiac;
  };
}

export default Birthday;
