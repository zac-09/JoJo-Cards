import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../../constants/Colors";
import {Ionicons} from '@expo/vector-icons'
const BirthdayIndex = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <TouchableWithoutFeedback
          onPress={() => {
            props.navigation.navigation('birthdays')
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
    top: 220,
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
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-arrow-back"
          onPress={() => {
            navData.navigation.navigate("back");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default BirthdayIndex;
