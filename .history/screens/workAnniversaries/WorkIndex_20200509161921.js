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
const WorkIndex = (props) => {
  const [modalVisible, setIsModalVisible] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsModalVisible(false);
      }}
    >
      <View style={styles.screen}>
        <EventItem
          name="Isaac's promotion"
          date="14-05-2020"
          onPress={() => {
            props.navigation.navigate({ routeName: "configureWork" });
          }}
        />
        {modalVisible && (
          <View style={styles.modal}>
            <ModalCard>
              <View style={styles.modalIcons}>
                <View style={styles.micContainer}>
                  <Ionicons
                    name="ios-add"
                    size={32}
                    color="#fff"
                    onPress={() => {
                      props.navigation.navigate({
                        routeName: "AddNewWork",
                      });
                    }}
                  />
                </View>
                <Text>Add Work</Text>
              </View>

              <View style={styles.modalIcons}>
                <View style={styles.micContainer}>
                  <Ionicons
                    name="ios-filing"
                    size={32}
                    color="#fff"
                    onPress={() => {}}
                  />
                </View>
                <Text>import </Text>
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
          <TouchableWithoutFeedback
            onPress={() => {
              setIsModalVisible((prevState) => !prevState);
            }}
          >
            <Ionicons name="ios-menu" size={32} color="#fff" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    // flexGrow: 1,
    justifyContent: "space-between",
    zIndex: 100002,
    position: "absolute",
    bottom: 110,
    left:30
    // marginTop: -395,
  },
  micContainer: {
    backgroundColor: Colors.primary,
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
  title: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    marginLeft: 60,
    fontFamily: "nunito-bold",
    fontSize: 20,
  },
});
WorkIndex.navigationOptions = (navData) => {
  return {
    headerTitle: (
      <View style={styles.title}>
        <Text style={styles.titleText}>Work Events</Text>
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
export default WorkIndex;
