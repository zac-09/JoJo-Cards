import React from 'react';
import {View,Text,StyleSheet,Platform} from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../../components/HeaderButton";

const MissingRemaindersScreen = props =>{
return(
    <View style={styles.screen}>
    <Text style={{padding:20}}> follow these steps to recover your msiing reminders</Text>
  </View> 
)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      },
})
MissingRemaindersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Find your missing reminders",
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

export default MissingRemaindersScreen;


