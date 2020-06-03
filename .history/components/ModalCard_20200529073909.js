import React, { useSelector } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Colors from './../constants/Colors';

import { Ionicons } from '@expo/vector-icons';
const ModalCard = (props) => {
	const [modalVisible, setIsModalVisible] = useState(false);

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				setIsModalVisible(false);
			}}
		>
			<View style={styles.screen}>
				{modalVisible && <View style={{ ...styles.card, ...props.style }}>{props.children}</View>}
				<View style={styles.button}>
					<TouchableWithoutFeedback
						onPress={() => {
							setIsModalVisible((prevState) => !prevState);
						}}
					>
						<Ionicons name="ios-menu" size={32} color="#fff" />
					</TouchableWithoutFeedback>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};
const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 8,
		backgroundColor: 'white',
		height: 100,
		flexDirection: 'row',
		flexWrap: 'wrap',
		elevation: 5,
		borderRadius: 10,
		// width:"95%"
	},
	screen: {
		flex: 1,
  },
  button: {
		zIndex: 2,
		position: 'absolute',
		bottom: 25,
		right: 20,
		backgroundColor: Colors.primary,
		width: 50,
		height: 50,
		borderRadius: 25,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ModalCard;
