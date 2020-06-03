import React, { useSelector } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
const LocationPicker = (props) => {
	const [pickedLocation, setPickedLocation] = useState();
	const [isFetching, setIsFetching] = useState(false);
	const verifyPermission = async () => {
		const result = await Permissions.askAsync(Permissions.LOCATION);
		if (result.status !== 'granted') {
			Alert.alert('Insufficient permissions!', 'You need to grant location permissions to the app', [
				{ text: 'okay' },
			]);
			return false;
		}
		return true;
	};
	const getLocationhandler = async () => {
		const hasPermission = await verifyPermission();
		if (!hasPermission) {
			return;
		}
		try {
			setIsFetching(true);
			const location = await Location.getCurrentPositionAsync({ timeout: 10000 });
			setPickedLocation({
				lat: location.coords.latitude,
				lng: location.coords.longitude,
			});
		} catch (err) {
			Alert.alert('Could not fetch location!', 'Please try again later or pick location on map', [
				{ text: 'Okay' },
			]);
		}
		setIsFetching(false);
	};
	return (
		<View style={styles.locationPicker}>
			<View style={styles.mapPreview}>
				{isFetching ? <ActivityIndicator size="large " color="blue" /> : <Text>No location chosen yet</Text>}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	locationPicker: {
		marginBottom: 15,
	},
	mapPreview: {
		marginBottom: 10,
		width: '100%',
		height: 150,
		borderColor: '#ccc',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default LocationPicker;
