import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import SettingScreen from "./../screens/SettingScreen";
import AboutUsScreen from "./../screens/AboutUsScreen";
const HomeNavigator = createDrawerNavigator(
  {
    Settings: SettingScreen,
    About_Us: AboutUsScreen,
  },
  {
    contentOptions: {
      activeTintColor: "blue",
    },
  }
);
export default createAppContainer(HomeNavigator);
