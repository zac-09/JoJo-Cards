import React from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./../constants/Colors";

const EventItem = (props) => {
  const avator = props.avatar
    ? { uri: props.avatar }
    : require("./../assets/placeholder.png");
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.month}>
          <Text style={styles.monthText}>This month</Text>
        </View>
        <View style={styles.eventContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.avator} source={avator} />
          </View>
          <View style={styles.date}>
            <Text>Isaac</Text>
            <Text style={styles.text}>May 14 1999</Text>
          </View>
          <View style={styles.days}>
            <Text style={styles.text}  >8</Text>
            <Text style={styles.text}>Days left</Text>
          </View>
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
    height: 80,
    padding: 20,
  },
  eventContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 80,
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "#ccc",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#4291ee",
    alignItems: "center",
    justifyContent: "center",
  },
  avator: {
    width: "100%",
    height: "100%",
  },
  arrow: {
    position: "absolute",
    right: 10,
  },
  date: {
    padding: 20,
  },
  month: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    textTransform: "uppercase",
    height: 30,

//     backgroundColor: "grey",
//    flexWrap:"wrap"

  },
  days: {
    alignItems: "center",
    position: "absolute",
    padding: 5,
    right: 25,
  },
  monthText:{
      textTransform:"uppercase",
      color:Colors.primary,
      fontFamily:"nunito-bold"
  }
});

export default EventItem;
