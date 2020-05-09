import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import OptionsItem from "./../../components/OptionsItem";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker } from "react-native-maps";
import Pin from "./../../components/Pin";
const ConfigureEventScreen = (props) => {
  const [showDetais, setShowDetails] = useState(false);
  useEffect(() => {
    _getLocationAsync;
  });
  const [location, setLocation] = useState({
    latitude: 0.347596,
    longitude: 32.58252,
  });
  const markers = [
    {
      id: 1,
      title: "kampala mukade",
      location: {
        lat: 0.310841,
        long: 32.595242,
      },
      description: "one of the finnest spots in town",
    },
    {
      id: 2,

      title: "Nsambbya",
      location: {
        lat: 0.20806,
        long: 32.52222,
      },
      description: "good place for the teenagers",
    },
    {
      id: 3,

      title: "kasubi",
      location: {
        lat: 0.40444,
        long: 32.45944,
      },
      description: "Elite place",
    },
  ];
  const [markers, setMarkers] = useState("");
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      cosnole.log("permison not granted");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("location acquired from expo", location);
    setLocation(location.coords);
  };

  return (
    <View style={styles.screen}>
      <MapView
        initialRegion={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapStyle}
      >
        {markers.map((el, id) => {
          const markerColor = Colors.primary;

          const marker = {
            latlng: {
              latitude: el.location.lat,
              longitude: el.location.long,
            },
            title: el.title,
            description: el.description,
          };

          return (
            <Marker
              key={id}
              coordinate={marker.latlng}
              pinColor={markerColor}
              title={marker.title}
              description={marker.description}
              onPress={() => setShowDetails(true)}
            >
              <Pin color={markerColor} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // justifyContent: 'center',

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  addContainer: {
    zIndex: 2,
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#4291ee",
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    position: "absolute",
    width: Dimensions.get("window").width - 20,
    bottom: 40,
    zIndex: 2,
    left: 0,
    marginHorizontal: 10,
    backgroundColor: "#00FB00",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "lato",
    fontSize: 15,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 8,
  },
  label: {
    fontFamily: "lato",
    fontSize: 14,
    color: "#fff",
    fontWeight: "900",
  },
  description: {
    fontFamily: "lato",
    fontSize: 13,
    fontWeight: "300",
    color: "#fff",
    width: Dimensions.get("window").width - 100,
    marginBottom: 4,
  },
  dates: {
    fontFamily: "lato",
    fontSize: 14,
    color: "#fff",
  },
  closeContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});

ConfigureEventScreen.navigationOptions = (navData) => {
  return {
    headerTitle: " Sale Points",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
      fontFamily: "nunito-bold",
    },
    headerBackTitleStyle: {
      fontFamily: "lato",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-more" onPress={() => {}} />
      </HeaderButtons>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-arrow-back"
          onPress={() => {
            navData.navigation.navigate("Home");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ConfigureEventScreen;
