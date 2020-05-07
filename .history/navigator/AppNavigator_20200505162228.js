import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import SettingScreen from "./../screens/SettingScreen";
import AboutUsScreen from "./../screens/AboutUsScreen";
import { createStackNavigator } from 'react-navigation-stack';
const defaultNavOptions = {
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
  };
  const settingsNav = createStackNavigator(
    {
      SettingScreen,
    },
    {
      defaultNavigationOptions: defaultNavOptions,
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Ionicons name="ios-build" size={23} color={drawerConfig.tintColor} />
        ),
      },
    }
  );
  const aboutNav = createStackNavigator(
    {
      AboutUsScreen,
    },
    {
      defaultNavigationOptions: defaultNavOptions,
      navigationOptions: {
        drawerIcon: (drawerConfig) => (
          <Ionicons
            name="ios-aperture"
            size={23}
            color={drawerConfig.tintColor}
          />
        ),
      },
    }
  );
const HomeNavigator = createDrawerNavigator(
  {
    Settings: settingsNav,
    About_Us: aboutNav,
  },
  {
    contentOptions: {
      activeTintColor: "blue",
    },
  }
);
export default createAppContainer(HomeNavigator);
