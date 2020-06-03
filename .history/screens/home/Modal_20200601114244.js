import React from 'react';
import { View, StyleSheet, Dimensions, Text, TextInput } from 'react-native';

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
		</View>
	);
};
const styles = StyleSheet.create({
	
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 8,
		backgroundColor: 'rgba(0, 8, 228, 0.9)',
		height: Dimensions.get('window').height * 0.4,
		flexDirection: 'column',
		// flexWrap: 'wrap',
		elevation: 5,
		borderRadius: 15,
		// alignItems: 'center',
		// width:"95%"npm start
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
		// backgroundColor: '#fff',
		padding: 10,
		marginVertical: 10,
		flexGrow: 1,
		width:"75%"
	},
	input: {
		flexGrow: 1,
		alignItems: 'center',
		borderRadius: 10,
		marginRight: 10,
		backgroundColor: 'rgba(0, 8, 228, 0.7)',

		flex: 1,
		padding: 10,
		marginLeft: 5,
		fontSize: 16,
		lineHeight: 10,
		paddingLeft: 10,
		paddingTop: 6,
		paddingBottom: 6,
		color:"white"
	},
	text: {
		fontSize: 16,
		padding: 10,
		color: '#fff',
		marginTop:15
	},
	container:{
		flexDirection:"row",
		padding:20
		// flex: 1,
		// width: '100%',
	}
});

export default Modal;
