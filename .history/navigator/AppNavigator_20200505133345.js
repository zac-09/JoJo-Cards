import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
  DrawerItems,
} from "react-navigation";
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
        activeTintColor: 'blue',
      },
    }
  );
export default createAppContainer(HomeNavigator);
