import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Colors from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
const AddNewBirthdayScreen = (props) => {
  const avator = require("./../../assets/placeholder.png");
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.avator} source={avator} />
      </View>
      <View style={styles.inputs}>
        <View style={styles.nameInput}>
          <Ionicons name="ios-person" size={22} color={Colors.primary} />
          <TextInput placeholder="Enter Name" style={styles.input} />
        </View>
      </View>
      <View style={styles.options}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // justifyContent: 'center',

    alignItems: "center",
    paddingVertical: 10,
    flex: 1,
  },
  inputs: {
    flex: 1,
    width: "75%",
    alignItems: "center",
    flexGrow: 1,
    
  },
  nameInput: {
    flexDirection: "row",
    borderRadius:15,
    alignItems: "center",
    backgroundColor: "#ccc",
    padding:10
    // flexGrow: 1,
  },
  input: {
    flexGrow: 1,
    alignItems: "center",
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: "#ccc",
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
    overflow: "hidden",
    backgroundColor: "#4291ee",
    alignItems: "center",
    justifyContent: "center",
  },
  avator: {
    width: "100%",
    height: "100%",
  },
});

AddNewBirthdayScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add New Birthdays",
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
        <Item
          title="Menu"
          iconName="ios-checkmark-circle-outline"
          onPress={() => {}}
        />
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

export default AddNewBirthdayScreen;
