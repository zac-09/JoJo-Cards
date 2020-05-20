import React, { useState } from "react";
import {} from "react-native";
import AppNavigator from "./navigator/AppNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import birthdays from "./store/reducers/birthdays";
import data from "./store/reducers/data";
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
