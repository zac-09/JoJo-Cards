import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  FlatList,
} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import EventItem from "./../../components/EventItem";
import ModalCard from "./../../components/ModalCard";
import { useSelector } from "react-redux";
const BirthdayIndex = (props) => {
  const [modalVisible, setIsModalVisible] = useState(false);
  const Birthdays = useSelector((state) => state.birthdays.birthdays);
  useEffect(()=>{
    setIsModalVisible(false)
  },[modal])
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsModalVisible(false);
      }}
    >
      <View style={styles.screen}>
        <FlatList
          data={Birthdays}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <EventItem
              onPress={() => {
                props.navigation.navigate({
                  routeName: "configureBirthday" ,
                  params:{
                    data:itemData.item.id
                  }
                });
              }}
              name={itemData.item.name}
              date={itemData.item.date}
              // counter={itemData.item.counter}
            />
          )}
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
                        routeName: "AddNewBirthday",
                      });
                    }}
                  />
                </View>
                <Text>Add Birthday</Text>
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
    justifyContent: "center",
    // alignItems:"center",
    zIndex: 100002,
    position: "absolute",
    bottom: 110,
    left: 30,
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
    marginLeft: 65,
    fontFamily: "nunito-bold",
    fontSize: 20,
  },
});
BirthdayIndex.navigationOptions = (navData) => {
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
