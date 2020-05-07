import React,{useEffect} from 'react';
import {View,StyleSheet,ImageBackground,Image} from 'react-native';
import bg from './../../assets/newbg.jpg'; 
import logo from './../../assets/logo.png';

const WelcomeScreen = props =>{
    useEffect(() =>{
        setTimeout(()=> {
            props.navigation.navigate('Home')
        }, 3000)
    })
    return(
        <ImageBackground style={styles.screen} source={bg}>
        <Image style={styles.logo} source={logo} resizeMode='contain'/>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 300,
        height: 300
    }
})

export default WelcomeScreen;