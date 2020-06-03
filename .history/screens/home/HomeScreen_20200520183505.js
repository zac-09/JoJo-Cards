import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Platform,
  ScrollView,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import CategoryItem from "./../../components/CategoryItem";
import Colors from "./../../constants/Colors";
import { useSelector } from "react-redux";

const HomeScreen = (props) => {
  const data = [];

  const birthdays = useSelector((state) => state.data.birthdays);
  const birthCounter = useSelector((state) => state.birthdays.counter);
  birthdays.counter = birthCounter
  const events = useSelector((state) => state.data.events);
  const weddings = useSelector((state) => state.data.weddings);
  const work = useSelector((state) => state.data.work);
  const sales = useSelector((state) => state.data.sales);
  data.push(birthdays);
  data.push(events);
  data.push(weddings);
  data.push(work);
  data.push(sales);

  console.log(data);
  return (
    <View style={styles.screen}>
      <ScrollView>
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
      </ScrollView>

      <View style={styles.bottomTab}>
        <Text style={styles.textBottom}>Follow jojocreations_</Text>
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
    fontFamily: "nunito-bold",
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
    alignItems: "center",
    justifyContent: "center",
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
    marginLeft: 20,
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
