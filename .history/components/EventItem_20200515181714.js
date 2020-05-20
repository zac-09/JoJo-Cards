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
    <TouchableWithoutFeedback
      onPress={() => {
        props.onPress();
      }}
    >
      <View style={styles.container}>
        <View style={styles.month}>
          <Text style={styles.monthText}>This month</Text>
        </View>
        <View style={styles.eventContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.avator} source={avator} />
          </View>
          <View style={styles.date}>
            <Text>{props.name}</Text>
            <Text style={styles.text}>{props.date}</Text>
          </View>
          <View style={styles.days}>
    <Text style={{ ...styles.text, fontSize: 18 }}>{props.daysLeft}</Text>
            <Text style={styles.text}>Days left</Text>
          </View>
          <View style={styles.arrow}>
            <Ionicons
              name="ios-arrow-forward"
              size={20}
              color={Colors.primary}
              onPress={()=>{props.onPress()}}
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
    marginBottom:50
  },
  text: {
    color: "grey",
    fontFamily: "open-sans",
    overflow:'hidden'
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
    overflow:"hidden"
  },
  month: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    textTransform: "uppercase",
    height: 30,
    alignItems:"center"
    //     backgroundColor: "grey",
    //    flexWrap:"wrap"
  },
  days: {
    alignItems: "center",
    position: "absolute",
    padding: 5,
    right: 25,
  },
  monthText: {
    textTransform: "uppercase",
    color: Colors.primary,
    fontFamily: "nunito-bold",
  },
});

export default EventItem;
