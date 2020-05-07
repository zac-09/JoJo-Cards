import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Platform,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import CategoryItem from "./../../components/CategoryItem";
import Colors from "./../../constants/Colors";

const HomeScreen = (props) => {
  const data = [
    {
      id: Math.random().toString,
      name: "cake",
      text: "Birthdays",
      counter: "6",
      route: "birthdays",
    },
    {
      id: Math.random().toString,
      name: "perm-contact-calendar",
      text: "Events",
      counter: "5",
      route: "events",
    },
    {
      id: Math.random().toString,
      name: "people-outline",
      text: "Wedding Anniversaries",
      counter: "3",
      route: "wedding",
    },
    {
      id: Math.random().toString,
      name: "account-balance",
      text: "Work Anniversaries",
      counter: "4",
      route: "work",
    },
    {
      id: Math.random().toString,
      name: "account-balance-wallet",
      text: "Sales Points",
      counter: "2",
      route: "sales",
    },
  ];
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Reminder</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={data}
          renderItem={(itemData) => (
            <CategoryItem
              onSelect={() => {
                props.navigation.navigate({
                  routeName: itemData.item.route,
                });
              }}
              name={itemData.item.name}
              text={itemData.item.text}
              counter={itemData.item.counter}
            />
          )}
        />
      </View>

      <View style={styles.bottomTab}>
        <Text style={styles.textBottom}>Follow Us On</Text>
        <Ionicons
          name="logo-instagram"
          style={{ padding: 5 }}
          size={25}
          color={Colors.primary}
        />
        <Ionicons
          name="logo-facebook"
          style={{ padding: 5 }}
          size={25}
          color={Colors.primary}
        />
        <Ionicons
          name="logo-twitter"
          style={{ padding: 5 }}
          size={25}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "#ccc",
    // padding:10
  },
  list: {
    marginBottom: 10,
  },
  textContainer: {
    height: 60,
    // flex:1,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 10,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomTab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    height: 50,
    padding: 20,
    marginTop: 10,
  },
  textBottom: {
    fontFamily: "nunito-bold",
    fontSize: 16,
    color: Colors.primary,
    padding: 10,
    marginLeft: 40,
  },
});
HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Birthday & Event Reminder",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default HomeScreen;
