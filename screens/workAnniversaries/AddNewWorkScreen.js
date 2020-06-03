import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Colors from './../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './../../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import * as workActions from './../../store/actions/work';
const AddNewWorkScreen = (props) => {
	const dispatch = useDispatch();
	const workId = props.navigation.getParam('workId');
	const editedWork = useSelector((state) => state.work.work.find((item) => item.id === workId));
	const [name, setName] = useState(editedWork ? editedWork.name : '');
	const [date, setDate] = useState(editedWork ? editedWork.date : '');
	const [phoneNumber, setPhoneNumber] = useState(editedWork ? editedWork.phoneNumber : '');
	const avator = require('./../../assets/placeholder.png');
	const addWorkHandler = useCallback(() => {
		if (editedWork) {
			dispatch(workActions.updateWork(workId, date, name, phoneNumber));
			props.navigation.navigate('WorkIndexScreen', { modal: false });
		} else {
			dispatch(workActions.createWork(date, name, phoneNumber));
			props.navigation.navigate('WorkIndexScreen', { modal: false });
		}
	}, [name, date, phoneNumber]);
	useEffect(() => {
		props.navigation.setParams({ submit: addWorkHandler });
	}, [addWorkHandler]);
	return (
		<View style={styles.screen}>
			<View style={styles.imageContainer}>
				<Image style={styles.avator} source={avator} />
				<View style={styles.addIcon}>
					<Ionicons style={styles.icon} color="#fff" name="ios-add" size={23} />
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
						value={date}
						onChangeText={(text) => setDate(text)}
						placeholder="select date"
						style={styles.input}
					/>
				</View>
				<View style={styles.nameInput}>
					<Ionicons name="ios-call" size={27} color={Colors.primary} />
					<TextInput
						keyboardType="number-pad"
						placeholder="phone"
						style={styles.input}
						onChangeText={(text) => setPhoneNumber(text)}
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

AddNewWorkScreen.navigationOptions = (navData) => {
	const submit = navData.navigation.getParam('submit');

	return {
		headerTitle: 'Add New Work Event',
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
				<Item title="Menu" iconName="ios-checkmark-circle-outline" onPress={submit} />
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

export default AddNewWorkScreen;
