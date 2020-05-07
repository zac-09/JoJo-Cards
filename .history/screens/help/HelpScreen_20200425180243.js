import React from 'react';
import {View,Text,StyleSheet,Platform} from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../components/HeaderButton";

const HelpScreen = props =>{
return(
    <View style={styles.screen}>
    <Text style={{padding:20}}> we are here to help</Text>
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
HelpScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Need Help ?",
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

export default HelpScreen;


