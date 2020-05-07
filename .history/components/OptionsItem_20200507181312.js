import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import Colors from "./../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const OptionsItem = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <View style={styles.container}>
          {/* <View style={styles.logo}> */}
          <Ionicons name={props.icon} color={props.color} size={28} />
          {/* </View> */}
          <Text style={styles.text}>{props.text}</Text>
          <View style={styles.arrow}>
            <Ionicons
              name="ios-arrow-forward"
              size={20}
              color={Colors.primary}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 60,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    // shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // elevation: 3,
  },
  arrow: {
    position: "absolute",
    right: 10,
  },
  text: {
    padding: 20,
  },
});

export default OptionsItem;
