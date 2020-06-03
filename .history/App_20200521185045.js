import React, { useState, useEffect } from "react";
import { Platform, alert } from "react-native";
import AppNavigator from "./navigator/AppNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import birthdays from "./store/reducers/birthdays";
import data from "./store/reducers/data";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { Notifications } from "expo";

registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.createChannelAndroidAsync("default", {
      name: "default",
      sound: true,
      priority: "max",
      vibrate: [0, 250, 250, 250],
    });
  }
};
const rootReducer = combineReducers({
  birthdays: birthdays,
  data: data,
});
const store = createStore(rootReducer);
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-BoldItalic.ttf"),
    lato: require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-BoldItalic.ttf"),
  });
};

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  });
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
