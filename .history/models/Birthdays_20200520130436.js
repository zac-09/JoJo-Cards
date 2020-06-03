import moment from "moment";
class Birthday {
  constructor(id, name, date, phoneNumber) {
    const today = moment();
    const newDate = moment(date);

    if (newDate.format("M") < today.format("M")) {
      newDate.set("year", moment().format("Y") + 1);
    } 
    else if(newDate.format("M") == today.format("M") && newDate.format("D") < today.format("D") ){
      newDate.set("year", moment().format("Y") + 1);

    }
    
    else {
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
  }
}

export default Birthday;
