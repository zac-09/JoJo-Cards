export const CREATE_BIRTHDAY = 'CREATE_BIRTHDAY';
export const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
export const DELETE_BIRTHDAY = 'DELETE_BIRTHDAY';
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

export const createBirthday = (date, name, phoneNumber, avatar) => {
	return async (dispatch) => {
		const filename = avatar.split('/').pop();
		const newPath = FileSystem.documentDirectory + filename;
		try {
			await FileSystem.moveAsync({
				from: avatar,
				to: newPath,
			});
		} catch (err) {
			console.log(err);
			throw err;
		}

		dispatch({
			type: CREATE_BIRTHDAY,
			data: {
				date,
				name,
				phoneNumber,
				avatar: newPath,
			},
		});
	};
};
