import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback,Platform } from "react-native";
import Colors from "../../constants/Colors";
import {Ionicons} from '@expo/vector-icons';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
const BirthdayIndex = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <TouchableWithoutFeedback
          onPress={() => {
            
          }}
        >
          <Ionicons name="ios-menu" size={32} color="#fff" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    zIndex: 2,
    position: "absolute",
    bottom: 25,
    right: 20,
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});
BirthdayIndex.navigationOptions = (navData) => {
  return {
    headerTitle: "Birthdays",
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
          iconName="ios-search" 
          onPress={() => {
            navData.navigation.goBack();
          }}
        /> 
      </HeaderButtons>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-arrow-back" 
          onPress={() => {
            navData.navigation.goBack();
          }}
        /> 
      </HeaderButtons>
    )
  };
};
export default BirthdayIndex;
