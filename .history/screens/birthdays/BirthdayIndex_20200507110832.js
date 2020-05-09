import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import EventItem from "./../../components/EventItem";
import ModalCard from "./../../components/ModalCard";
const BirthdayIndex = (props) => {
  const [modalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.screen}>
      <EventItem />
      {modalVisible && (
        <View style={styles.modal}>
          <ModalCard>
            <View style={styles.modalIcons}>
              <View style={styles.micContainer}>
                <Ionicons
                  name="ios-add"
                  size={32}
                  color="#fff"
                  onPress={() => {}}
                />
              </View>
              <Text>Add Birthday</Text>
            </View>

            <View style={styles.modalIcons}>
              <View style={styles.micContainer}>
                <Ionicons
                  name="ios-camera"
                  size={32}
                  color="#fff"
                  onPress={() => {}}
                />
              </View>
              <Text>import from contacts</Text>
            </View>
            <View style={styles.modalIcons}>
              <View style={styles.micContainer}>
                <Ionicons
                  name="ios-image"
                  size={32}
                  color="#fff"
                  onPress={() => {}}
                />
              </View>
              <Text>import from excel</Text>
            </View>
            <View style={styles.modalIcons}>
              <View style={styles.micContainer}>
                <Ionicons
                  name="md-pin"
                  size={32}
                  color="#fff"
                  onPress={() => {}}
                />
              </View>
              <Text>Location</Text>
            </View>
            <View style={styles.modalIcons}>
              <View style={styles.micContainer}>
                <Ionicons
                  name="ios-settings"
                  size={32}
                  color="#fff"
                  onPress={() => {}}
                />
              </View>
              <Text>settings</Text>
            </View>
          </ModalCard>
        </View>
      )}
      <View style={styles.button}>
        <TouchableWithoutFeedback onPress={() => {}}>
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
  modal: {
    flexGrow: 1,
    justifyContent: "flex-end",
    zIndex: 100002,
    position: "absolute",
    bottom: 40,
    // marginTop: -395,
  },
  micContainer: {
    backgroundColor: "#4a6aa5",
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginLeft: 5,
  },
  modalIcons: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
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
        <Item title="Menu" iconName="ios-search" onPress={() => {}} />
      </HeaderButtons>
    ),
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-arrow-back"
          onPress={() => {
            navData.navigation.navigate("Home");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default BirthdayIndex;