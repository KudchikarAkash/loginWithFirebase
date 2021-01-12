//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import firebase from 'firebase';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from './Home';
// create a component
const Drawer = createDrawerNavigator();

const SettingsScreen = ({navigation}) =>{
    return(
        <View>
        <Text>SettingsScreen</Text>
        <Button title="goBack" onPress={()=> navigation.dispatch(DrawerActions.openDrawer())} />
    </View>
    )  
}
const Logout = ()=>{
    return(
        <TouchableOpacity onPress={firebase.auth().signOut()}>
            <Text>Logout</Text>
        </TouchableOpacity>
    )
}
const ArticleScreen = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    articleContainer:{
        padding:10,
        borderBottomWidth:5,
        borderBottomColor:'rgba(255,255,255,0.7)',
        borderBottomWidth:5
    },
    heading:{
        fontSize:22,
        color:'black',
        marginBottom:10
    },
    content:{
        marginTop:10,
        fontSize:19,
    },
    logout:{
        color:'blue'
    }
});

//make this component available to the app
export default ArticleScreen;
