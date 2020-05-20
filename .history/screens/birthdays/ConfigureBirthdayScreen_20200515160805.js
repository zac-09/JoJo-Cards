import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import OptionsItem from "./../../components/OptionsItem";
const ConfigureBirthdayScreen = (props) => {
  const avator = require("./../../assets/placeholder.png");
  const [modal, setModal] = useState(false);
 const  setModalHandler = useCallback(() => {
    return setModal((prevState) => !prevState);
  },[modal]);
  useEffect(() => {
    props.navigation.setParams({ modal: setModalHandler });
  }, [setModalHandler]);
  return (
    <View style={styles.screen}>
      {modal && (
        <View style={styles.modal}>
          <TouchableOpacity>
            <Text>edit</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>delte</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.avator} source={avator} />
        </View>
        <Text style={{ ...styles.text, fontFamily: "open-sans-bold" }}>
          Isaac
        </Text>
        <Text style={{ ...styles.text, fontFamily: "open-sans-bold" }}>
          14-05-1999
        </Text>
        <Text style={styles.text}>Turns 21 in 7days</Text>
        <Text style={styles.text}>Zodiac Sign: TAURUS</Text>
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
    width: "100%",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    marginLeft: 61,
    fontFamily: "nunito-bold",
    fontSize: 20,
  },
  modal: {
    width: "50%",
    height: 150,
  },
});

ConfigureBirthdayScreen.navigationOptions = (navData) => {
  const modal = navData.navigation.getParam("modal");
  return {
    headerTitle: (
      <View style={styles.title}>
        <Text style={styles.titleText}>Birthdays</Text>
      </View>
    ),
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
        <Item title="Menu" iconName="ios-more" onPress={modal} />
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
