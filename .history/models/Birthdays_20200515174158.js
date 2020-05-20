import moment from "moment";
class Birthday {
  constructor(id  , name, date, phoneNumber,) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.phoneNumber = phoneNumber;
    this.today  = moment();
    
    // return eventdate.diff(todaysdate, 'days');
    this.daysLeft = eventdate.diff(today, 'days');
  }
}

export default Birthday;
