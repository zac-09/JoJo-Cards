import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Colors from './../../constants/Colors'


const index = (props) =>{
    return(

    );
}


const styles =StyleSheet.create({

});
index.navigationOptions = (navData) =>{
    return {
        headerTitle: "Birthdays",
        headerLeft: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-arrow-back"
              onPress={() => {
                navData.navigation.navigate('back')
              }}
            />
          </HeaderButtons>
        ),
      };
}
export default index;