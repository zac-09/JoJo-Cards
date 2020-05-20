import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Colors from "./../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import { MaterialIcons } from "@expo/vector-icons";

import * as birthdayActions from "./../../store/actions/birthdays";
import { useDispatch, useSelector } from "react-redux";
import OptionsItem from "./../../components/OptionsItem";
const ConfigureBirthdayScreen = (props) => {
  const dispatch = useDispatch();
  const avator = require("./../../assets/placeholder.png");
  const birthday = props.navigation.getParam("birthdays")
  const [modal, setModal] = useState(false);
  const deleteHandler = (id) => {
    Alert.alert(
      "Are you sure?",
      "Do you really want to delete this birthday?",
      [
        { text: "No", style: "default" },
        {
          text: "yes",
          style: "cancel",
          onPress: () => {
            dispatch(birthdayActions.deleteBirthday(id));
            props.navigation.navigate("BirthdayIndexScreen", { modal: false });
          },
        },
      ]
    );
  };
  const setModalHandler = useCallback(() => {
    return setModal((prevState) => !prevState);
  }, [modal]);
  useEffect(() => {
    props.navigation.setParams({ modal: setModalHandler });
  }, [setModalHandler]);
  return (
    <View style={styles.screen}>
      {modal && (
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.icons}
            onPress={() => {
              props.navigation.navigate({
                routeName: "AddNewBirthday",
                params: {
                  birthdayID: props.navigation.getParam("data"),
                },
              });
            }}
          >
            <Text
              style={{
                ...styles.text,
                fontFamily: "open-sans-bold",
                paddingRight: 10,
                paddingBottom: 5,
              }}
            >
              edit
            </Text>
            <MaterialIcons name="edit" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              deleteHandler(props.navigation.getParam("data"));
            }}
            style={styles.icons}
          >
            <Text
              style={{
                ...styles.text,
                fontFamily: "open-sans-bold",
                paddingRight: 10,
              }}
            >
              delete
            </Text>
            <Ionicons name="ios-trash" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.avator} source={avator} />
        </View>
        <Text style={{ ...styles.text, fontFamily: "open-sans-bold" }}>
          {birthday.name}
        </Text>
        <Text style={{ ...styles.text, fontFamily: "open-sans-bold" }}>
          {birthday.date}
        </Text>
        <Text style={styles.text}>Turns {birthday.age} in {birthday.daysLeft} days</Text>
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
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
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
    // position:"absolute",
    // right:4,
    width: "100%",
    height: 100,
    alignItems: "center",
    backgroundColor: Colors.primary,
    flex: 1,
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
