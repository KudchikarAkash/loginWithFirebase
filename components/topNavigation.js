//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from './ChatScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

const StatusScreen = () => {
    return (
        <View>
            <Text>Status</Text>
        </View>
    )
}
const CallsScreen = () => {
    return (
        <View>
            <Text>CallsScreen</Text>
        </View>
    )
}
const MyButton = () =>{
    return(
        <View>
            <Icon.Button>

            </Icon.Button>
        </View>
    );
}
    
// create a component
const CHATS = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={{HeaderTitle:"whatsApp"}}>
                <Tab.Screen name="Camera" component={MyButton}/>
                <Tab.Screen name="CHATS" component={ChatScreen}/>
                <Tab.Screen name="STATUS" component={StatusScreen}/>
                <Tab.Screen name="CALLS" component={CallsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default CHATS;
