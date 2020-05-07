import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Colors from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";

const ConfigureBirthdayScreen = (props) => {
  const avator = require("./../../assets/placeholder.png");
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.avator} source={avator} />
        </View>
        <Text style={{...styles.text,fontFamily:"open-sans-bold"}}>Isaac</Text>
        <Text style={{...styles.text,fontFamily:"open-sans-bold"}}>14-05-1999</Text>
        <Text style={styles.text}>Turns 21 in 7days</Text>
        <Text style={styles.text}>Zodiac Sign: TAURUS</Text>
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
  text:{
      color:"#fff",
      fontFamily:"open-sans"
  }
});

ConfigureBirthdayScreen.navigationOptions = (navData) => {
  return {
    headerTitle: " Birthdays",
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
            navData.navigation.navigate("BirthdayIndexScreen");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ConfigureBirthdayScreen;
