import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "./../constants/Colors";
const CategoryItem = (props) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.item}>
        <View style={styles.icon}>
          <Icon name={props.name} size={32} color={Colors.primary} />
        </View>
        <View>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.counter}>
          <Text style={{color:"white"}}>{props.counter}</Text>
        </View>
        <View style={styles.arrow}>
          <Ionicons name="ios-arrow-forward" size={20} color={Colors.primary} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {},
  item: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 80,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "#ccc",
  },
  text: {
    fontFamily: "lato",
    fontSize: 20,
    marginLeft: 10,
    
  },
  counter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    position: "absolute",
    right: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    position: "absolute",
    right: 10,
  },
});

export default CategoryItem;
