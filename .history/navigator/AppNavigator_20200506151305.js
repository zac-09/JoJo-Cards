import React from "react";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import WelcomeScreen from "./../screens/welcome/WelcomeScreen";
import HomeScreen from "./../screens/home/HomeScreen";
import BackupScreen from "./../screens/backup/BackupScreen";
import SettingScreen from "./../screens/settings/SettingScreen";
import AboutUsScreen from "./../screens/about/AboutUsScreen";
import BirthdayIndex from '../screens/birthdays/BirthdayIndex'
import HelpScreen from "./../screens/help/HelpScreen";
import MissingRemindersScreen from "./../screens/missingReminders/MissingRemindersScreen";
import RateUsScreen from "./../screens/rateUs/RateUsScreen";
import ShareScreen from "./../screens/share/ShareScreen";

import Colors from "./../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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

const MainNavigator = createStackNavigator(
  {
    HomeScreen,
    birthdays:birthdayNav

  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "ios-analytics" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
      
    },
  }
);

const birthdayNav = createStackNavigator(
  {
    index:BirthdayIndex,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    
  }
);
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
const missingRemindersNav = createStackNavigator(
  {
    MissingRemindersScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="ios-compass" size={23} color={drawerConfig.tintColor} />
      ),
      
    },
  }
);
const helpNav = createStackNavigator(
  {
    HelpScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name="md-help-circle"
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
      
    },
  }
);
const shareNav = createStackNavigator(
  {
    ShareScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name="md-share" size={23} color={drawerConfig.tintColor} />
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
const rateNAv = createStackNavigator(
  {
    RateUsScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name="ios-star-half"
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
      
    },
  }
);
const HomeNavigator = createDrawerNavigator(
  {
    Main: MainNavigator,

    Settings: settingsNav,
    Missing_Reminders: missingRemindersNav,
    Help: helpNav,
    Share: shareNav,
    AboutUs: aboutNav,
    RateUs: rateNAv,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);
const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Home: HomeNavigator,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(AppNavigator);
