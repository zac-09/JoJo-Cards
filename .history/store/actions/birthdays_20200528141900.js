export const CREATE_BIRTHDAY = 'CREATE_BIRTHDAY';
export const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
export const DELETE_BIRTHDAY = 'DELETE_BIRTHDAY';
export const SET_BIRTHDAY = 'SET_BIRTHDAY';
import { fetchBirthdays, insertBithday } from './../../helpers/db';
import * as FileSystem from 'expo-file-system';
export const deleteBirthday = (birthdayId) => {
	return {
		type: DELETE_BIRTHDAY,
		id: birthdayId,
	};
};

export const updateBirthday = (birthdayId, date, name, phoneNumber, avatar) => {
	return {
		type: UPDATE_BIRTHDAY,
		id: birthdayId,
		data: {
			date,
			name,
			phoneNumber,
			avatar,
		},
	};
};

export const createBirthday = (date, name, phoneNumber, avatar, month, daysLeft, age, zodiac) => {
	return async (dispatch) => {
		const filename = avatar.split('/').pop();
		const newPath = FileSystem.documentDirectory + filename;
		try {
			await FileSystem.moveAsync({
				from: avatar,
				to: newPath,
			});
			const dbResult = await insertBithday(
				name,
				date,
				phoneNumber,
				age,
				newPath,

				daysLeft,

				zodiac,

				month
			);
			dispatch({
				type: CREATE_BIRTHDAY,
				data: {
					id: dbResult.insertId,
					date,
					name,
					phoneNumber,
					avatar: newPath,
					daysLeft,
					zodiac,
					month,
				},
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	};
};

export const loadBirthdays = () => {
	return async (dispatch) => {
		try {
			const dbResult = await fetchBirthdays();
			dispatch({ type: SET_BIRTHDAY, birthdays: dbResult.rows._array });
		} catch (err) {
			throw err;
		}
	};
};
