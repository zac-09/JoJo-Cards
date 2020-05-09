import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Colors from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import OptionsItem from "./../../components/OptionsItem";
const ConfigureWorkScreen = (props) => {
  const avator = require("./../../assets/placeholder.png");
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.avator} source={avator} />
        </View>
        <Text style={{ ...styles.text, fontFamily: "open-sans-bold" }}>
          Isaac's promotion
        </Text>
        <Text style={{ ...styles.text, fontFamily: "open-sans-bold" }}>
          16-05-2020
        </Text>
        <Text style={styles.text}>Event due in in 6 days</Text>
      
      </View>
      <View style={styles.options}>
          <OptionsItem icon="ios-text" text="Send Sms" color="green" />
          <OptionsItem icon="ios-call" text="call" color="blue" />
          <OptionsItem icon="logo-whatsapp" text="Send Whatsapp" color="green" />
          <OptionsItem icon="ios-card" text="Send Card" color="brown" />
          <OptionsItem icon="ios-book" text="Add Note" color="yellow" />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // justifyContent: 'center',

    alignItems: "center",
    // paddingVertical: 10,
    flex: 1,
  },
  content: {
    backgroundColor: Colors.primary,
    // flex:1,
    alignItems: "center",
    paddingVertical: 10,
    height: 300,
    width: "100%",
  },
  imageContainer: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 50,

    overflow: "hidden",
    backgroundColor: "#4291ee",
    alignItems: "center",
    justifyContent: "center",
  },
  avator: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontFamily: "open-sans",
  },
  options: {
width:"100%"
  },
});

ConfigureWorkScreen.navigationOptions = (navData) => {
  return {
    headerTitle: " Work Events",
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
            navData.navigation.navigate("WorkIndexScreen");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ConfigureWorkScreen;