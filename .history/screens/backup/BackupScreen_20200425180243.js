import React from 'react';
import {View,Text,StyleSheet,Platform} from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../components/HeaderButton";

const BackupScreen = props =>{
return(
    <View style={styles.screen}>
    <Text style={{padding:20}}> Want to back up we gat you</Text>
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
BackupScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Back Up",
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

export default BackupScreen;


