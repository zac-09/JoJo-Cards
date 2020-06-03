import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const ModalCard = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>
			<View style={styles.content}>
				<Text style={styles.text}>Title</Text>
				<View style={styles.nameInput}>
					<TextInput
						onChangeText={(text) => setName(text)}
						placeholder="Enter Name"
						style={styles.input}
						value={name}
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
		backgroundColor: 'rgba(0, 8, 228, 0.7)',
		height: Dimensions.get('window').height * 0.4,
		flexDirection: 'column',
		flexWrap: 'wrap',
		elevation: 5,
		borderRadius: 15,
		alignItems: 'center',
		// width:"95%"npm start
	},
	content: {
		flexDirection: 'row',
		padding: 20,
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
		backgroundColor: 'white',
		flex: 1,
		padding: 10,
		marginLeft: 5,
		fontSize: 16,
		lineHeight: 16,
		paddingLeft: 10,
		paddingTop: 6,
		paddingBottom: 6,
	},
	text: {
		fontSize: 16,
		padding: 30,
		color: '#fff',
	},
});

export default ModalCard;
