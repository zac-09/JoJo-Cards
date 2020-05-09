import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import EventItem from "./../../components/EventItem";
import ModalCard from "./../../components/ModalCard";
const PlacesScreen = (props) => {
  const data_1 = {
    id: 1,
    title: "The Sports Lover",
    location: {
      lat: 0.3289759,
      long: 32.5644828,
    },
    description: "located next to olympia hostel..best in muk",

  };
  const data_2 = {
    id: 2,
    title: "The Wine Taster",
    location: {
      lat: 0.31269,
      long: 32.58369,
    },
    description: "located inside the elite acacia mall",

  };
  const data_3 = {
    id: 3,
    title: "The Moon Camper",
    location: {
      lat: 0.3198,
      long: 32.5919,
    },
    description: "situated at one of the finest malls around kampala",
  };
  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Olympia Hostel</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Acacia Mall</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Garden City</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    // textTransform: "uppercase",
    fontSize: 18,
    fontFamily: "lato",
    color: Colors.primary,
    padding: 15,
  },
  textContainer: {
    height: 50,
    // flex:1,
    // borderBottomWidth: 2,
    // borderBottomColor: "#ccc",
    padding: 10,
    // alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    marginLeft: 65,
    fontFamily: "nunito-bold",
    fontSize: 20,
  },
});
PlacesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: (
      <View style={styles.title}>
        <Text style={styles.titleText}>Shops</Text>
      </View>
    ),
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
        <Item title="Menu" iconName="ios-search" onPress={() => {}} />
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
export default PlacesScreen;
