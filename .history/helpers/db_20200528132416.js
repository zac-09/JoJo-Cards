import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('birthdays.db');
export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction(() => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS birthdays (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL,date TEXT NOT NULL,phoneNumber TEXT ,age INTEGER NOT NULL,avatar NOT NULL TEXT,daysLeft INTEGER NOT NULL, zodiac TEXT NOT NULL,month TEXT NOT NULL  );'
			),
				[],
				() => {
					resolve();
				},
				(_, err) => {
					reject(err);
				};
		});
	});
	return promise;
};
export const insertBithday = async (name, date, phoneNumber, age, avatar, daysLeft, zodiac, month) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction(() => {
			tx.executeSql(
				'INSERT INTO birthdays(name,date,phoneNumber,age,avatar,daysLeft,zodiac,month) VALUES(?,?,?,?,?,?,?,?);',
				[name, date, phoneNumber, age, avatar, daysLeft, zodiac, month]
			),
				(__, result) => {
					resolve(result);
				},
				(_, err) => {
					reject(err);
				};
		});
	});
	return promise;
};
