import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import Colors from "./../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const OptionsItem = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Ionicons name="logo-whatsapp" color="green" size={26} />
          </View>
          <Text style={styles.text}>Send Sms</Text>
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
    height: 30,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "#ccc",
  },
  arrow: {
    position: "absolute",
    right: 10,
  },
  
});

export default OptionsItem;
