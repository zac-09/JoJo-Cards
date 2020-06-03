import moment from 'moment-timezone';
import { Notifications } from 'expo';
import { insertBithday } from './../helpers/db';
moment().tz('Africa/Nairobi').format();
class Birthday {
	constructor(id, name, date, phoneNumber, avatar, daysLeft, zodiac, month, age) {
		this.name = name;
		this.date = date;
		this.phoneNumber = phoneNumber;
		this.age = age;
		this.avatar = avatar;
		this.daysLeft = daysLeft;
		this.zodiac = zodiac;
		this.month = month;

		this.id = id;
	}
}

export default Birthday;
