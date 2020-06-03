import React from 'react';
import { View, StyleSheet, Dimensions, Text, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Modal = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>
			<View style={styles.container}>
				<Text style={styles.text}>Title:</Text>
				<View style={styles.nameInput}>
					<TextInput
						// onChangeText={(text) => setName(text)}
						placeholder="Enter Name"
						style={styles.input}
						// value={name}
					/>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Details:</Text>
				<View style={styles.nameInput}>
					<TextInput
						// onChangeText={(text) => setName(text)}
						placeholder="Enter details"
						style={styles.input}
						// value={name}
					/>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Location:</Text>
				<View style={styles.nameInput}>
					<TextInput
						// onChangeText={(text) => setName(text)}
						placeholder="choose Location"
						style={styles.input}
						// value={name}
					/>
					<MaterialIcons style={styles.icon} name="location-on" size={24} color="#fff" />
				</View>
			</View>
			<View style={styles.btn}>
				<Button color="#850127" onPress={() => {}} title="post" />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 8,
		backgroundColor: 'rgba(0, 8, 228, 0.8)',
		height: Dimensions.get('window').height * 0.4,
		flexDirection: 'column',
		// flexWrap: 'wrap',
		elevation: 5,
		borderRadius: 18,
		// alignItems: 'center',
		// width:"95%"npm start
		backgroundColor: 'rgba(0, 8, 228, 0.9)',
	},
	content: {
		flexDirection: 'row',
		padding: 20,
	},
	inputs: {
		marginTop: 20,
		flex: 1,
		width: '100%',
		alignItems: 'center',
		flexGrow: 1,
	},
	nameInput: {
		flexDirection: 'row',
		borderRadius: 14,
		alignItems: 'center',
		justifyContent:"center",
		// backgroundColor: '#fff',
		padding: 10,
		// marginVertical: 10,
		// flexGrow: 1,
		width: '75%',
		marginTop: 5,
	},
	input: {
		flexGrow: 1,
		alignItems: 'center',
		borderRadius: 10,
		marginRight: 10,
		backgroundColor: 'rgba(0, 8, 228, 0.9)',

		// flex: 1,
		padding: 10,
		marginLeft: 5,
		fontSize: 16,
		lineHeight: 10,
		paddingLeft: 10,
		paddingTop: 6,
		paddingBottom: 6,
		// paddingRight:0,
		color: 'white',
	},
	text: {
		fontSize: 16,
		padding: 10,
		color: '#fff',
		marginTop: 15,
	},
	container: {
		flexDirection: 'row',
		
		// padding:5
		// flex: 1,
		// width: '100%',
	},
	btn: {
		width: Dimensions.get('window').width * 0.4,
		borderRadius: 100,
		// justifyContent:"center"
		// alignItems:"center"
		position: 'absolute',
		bottom: Dimensions.get('window').width * 0.03,
		right: Dimensions.get('window').width * 0.33,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 8,
		elevation: 5,
	},
	icon:{
		padding:10
	}
});

export default Modal;
