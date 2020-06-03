import { DELETE_BIRTHDAY, CREATE_BIRTHDAY, UPDATE_BIRTHDAY, SET_BIRTHDAY } from '../actions/birthdays';
import Birthday from './../../models/Birthdays';

const initialState = {
	birthdays: [],
};

pushReminder = async (name, dateReceived) => {
	const localNotification = {
		title: 'Birthday Reminder',
		body: `its ${name}'s birthday `, 
		ios: {
			sound: true,
		},

		android: {
			channelId: 'default',
			sound: true,

			color: '#C2185B',
			priority: 'max',
			sticky: false,
			vibrate: true,
		},
	};
	var date = '2020-05-22';
	var time = '17:05';

	var timeAndDate = moment(date + ' ' + time).unix();

	console.log(timeAndDate);
	let t = new Date();
	t.setSeconds(t.getSeconds() + 10);
	const schedulingOptions = {
		time: timeAndDate,
	};
	await Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
};
const birthdayReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BIRTHDAY:
			return {
				birthdays: action.birthdays.map(
					(birthday) =>
						new Birthday(
							birthday.id.toString(),
							birthday.name,
							birthday.date,
							birthday.phoneNumber,
							birthday.avatar,
							birthday.daysLeft,
							birthday.zodiac,
							birthday.month,
							birthday.age
						)
				),
			};
		case CREATE_BIRTHDAY:
			pushReminder(name, action.data.date);
			const newBirthday = new Birthday(
				action.data.id,
				action.data.name,
				action.data.date,
				action.data.phoneNumber,
				action.data.avatar,
				action.data.daysLeft,
				action.data.zodiac,
				action.data.month,
				action.data.age
			);
		
			return {
				...state,
				birthdays: state.birthdays.concat(newBirthday),
			};
		case UPDATE_BIRTHDAY:
			const birhdayIndex = state.birthdays.findIndex((birthday) => birthday.id === action.id);
			const updated = new Birthday(
				action.id,
				action.data.name,
				action.data.date,
				action.data.phoneNumber,
				action.data.avatar
			);
			console.log('this is the updated birthday', updated);
			const updatedBirthdays = [...state.birthdays];
			updatedBirthdays[birhdayIndex] = updated;
			console.log('this is the updated birthdays nigga', updatedBirthdays);

			return {
				...state,
				birthdays: updatedBirthdays,
			};

		case DELETE_BIRTHDAY:
			return {
				...state,
				birthdays: state.birthdays.filter((birthday) => birthday.id !== action.id),
			};
		default:
			return state;
	}
};
export default birthdayReducer;
