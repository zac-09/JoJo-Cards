import moment from "moment";
class Birthday {
  constructor(id  , name, date, phoneNumber,) {
    const today = moment();
    const newDate = moment(date);

      
      newDate.set("year",moment().format('Y'))
      

      const daysLeft = newDate.diff(today, "days");
      
    this.id = id;
    this.name = name;
    this.date = date;
    this.phoneNumber = phoneNumber;
   
    this.daysLeft=daysLeft
    
    
  }
}

export default Birthday;
