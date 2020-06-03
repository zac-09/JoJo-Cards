import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Colors from './../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './../../components/HeaderButton';
import * as birthdayActions from './../../store/actions/birthdays';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import moment from 'moment';
const AddNewBirthdayScreen = (props) => {
	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
		});

		console.log(result);

		if (!result.cancelled) {
			setAvator(result.uri);
		}
	};
	const dispatch = useDispatch();
	const birthdayId = props.navigation.getParam('birthdayID');
	const editedBirthday = useSelector((state) => state.birthdays.birthdays.find((item) => item.id === birthdayId));
	const [avator, setAvator] = useState(require('./../../assets/placeholder.png'));
	const [name, setName] = useState(editedBirthday ? editedBirthday.name : '');
	const [date, setDate] = useState(editedBirthday ? editedBirthday.date : '');
	const [phoneNumber, setPhoneNumber] = useState(editedBirthday ? editedBirthday.phoneNumber : '');

	find_zodiac = (month, day) => {
		let zodiac = '';

		if ((month == 2 && day >= 21) || (month == 3 && day <= 19)) {
			return (zodiac = 'Aries');
		} else if ((month == 3 && day >= 20) || (month == 4 && day <= 20)) {
			return (zodiac = 'Taurus');
		} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
			return (zodiac = 'Gemini');
		} else if ((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
			return (zodiac = 'Cancer');
		} else if ((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
			return (Zodiac = 'Leo');
		} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
			return (zodiac = 'Vigro');
		} else if ((month == 8 && day >= 23) || (month == 9) & (day <= 22)) {
			return (zodiac = 'Libra');
		} else if ((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
			return (zodiac = 'Scorpio');
		} else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
			return (zodiac = 'Sagittarius');
		} else if ((month == 11 && day >= 22) || (month == 0 && day <= 19)) {
			return (zodiac = 'Capricon');
		} else if ((month == 0 && day >= 20) || (month == 1 && day <= 18)) {
			return (zodiac = 'Aquarius');
		} else if ((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
			return (zodiac = 'Pisces');
		}
		return zodiac;
	};
	const addBirthdayHandler = useCallback(() => {
		if (editedBirthday) {
			dispatch(birthdayActions.updateBirthday(birthdayId, date, name, phoneNumber, avatar));
			props.navigation.navigate('BirthdayIndexScreen', { modal: false });
		} else {
			const today = moment();
			const newDate = moment(date);
			let month = '';
			if (newDate.format('M') === today.format('M')) {
				month = 'this month';
			} else {
				month = newDate.format('MMMM');
			}

			if (newDate.format('M') < today.format('M')) {
				newDate.set('year', moment().add(1, 'years').format('Y'));
			} else if (newDate.format('M') === today.format('M') && newDate.format('D') < today.format('D')) {
				newDate.set('year', moment().add(1, 'years').format('Y'));
			} else {
				newDate.set('year', moment().format('Y'));
			}

			const daysLeft = newDate.diff(today, 'days');
			const age = today.diff(date, 'years') + 1;
			const zodiac = find_zodiac(parseInt(newDate.format('M')), parseInt(newDate.format('D')));
			dispatch(birthdayActions.createBirthday(date, name, phoneNumber, avatar, month, daysLeft, age, zodiac));
			props.navigation.navigate('BirthdayIndexScreen', { modal: false });
		}
	}, [name, date, phoneNumber]);
	useEffect(() => {
		props.navigation.setParams({ submit: addBirthdayHandler });
	}, [addBirthdayHandler]);
	return (
		<View style={styles.screen}>
			<View style={styles.imageContainer}>
				<Image style={styles.avator} source={avator} />
				<View style={styles.addIcon}>
					<Ionicons
						style={styles.icon}
						color="#fff"
						name="ios-add"
						size={23}
						onPress={() => {
							_pickImage();
						}}
					/>
				</View>
			</View>
			<View style={styles.inputs}>
				<View style={styles.nameInput}>
					<Ionicons name="ios-person" size={27} color={Colors.primary} />
					<TextInput
						onChangeText={(text) => setName(text)}
						placeholder="Enter Name"
						style={styles.input}
						value={name}
					/>
				</View>
				<View style={styles.nameInput}>
					<Ionicons name="ios-calendar" size={27} color={Colors.primary} />
					<TextInput
						onChangeText={(text) => setDate(text)}
						placeholder="select date"
						style={styles.input}
						value={date}
					/>
				</View>
				<View style={styles.nameInput}>
					<Ionicons name="ios-call" size={27} color={Colors.primary} />
					<TextInput
						onChangeText={(text) => setPhoneNumber(text)}
						keyboardType="number-pad"
						placeholder="phone"
						style={styles.input}
						value={phoneNumber}
					/>
				</View>
			</View>
			<View style={styles.options}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		// justifyContent: 'center',

		alignItems: 'center',
		paddingVertical: 10,
		flex: 1,
	},
	addIcon: {
		width: 30,
		height: 30,
		borderRadius: 15,
		position: 'absolute',
		right: 2,
		bottom: 1,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputs: {
		marginTop: 20,
		flex: 1,
		width: '75%',
		alignItems: 'center',
		flexGrow: 1,
	},
	nameInput: {
		flexDirection: 'row',
		borderRadius: 14,
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 10,
		marginVertical: 10,
		// flexGrow: 1,
	},
	input: {
		flexGrow: 1,
		alignItems: 'center',
		borderRadius: 15,
		marginRight: 10,
		backgroundColor: '#fff',
		flex: 1,
		padding: 10,
		marginLeft: 5,
		fontSize: 16,
		lineHeight: 16,
		paddingLeft: 10,
		paddingTop: 6,
		paddingBottom: 6,
	},
	imageContainer: {
		marginTop: 30,
		width: 100,
		height: 100,
		borderRadius: 50,
		// overflow: "hidden",
		backgroundColor: '#4291ee',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avator: {
		width: '100%',
		height: '100%',
	},
});

AddNewBirthdayScreen.navigationOptions = (navData) => {
	const submit = navData.navigation.getParam('submit');
	return {
		headerTitle: navData.navigation.getParam('birthdayID') ? 'Edit Birthday' : 'Add New Birthday',
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
		},
		headerTitleStyle: {
			fontFamily: 'nunito-bold',
		},
		headerBackTitleStyle: {
			fontFamily: 'lato',
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title="Menu" iconName="md-checkmark" onPress={submit} />
			</HeaderButtons>
		),
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-arrow-back"
					onPress={() => {
						navData.navigation.navigate('BirthdayIndexScreen');
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default AddNewBirthdayScreen;
