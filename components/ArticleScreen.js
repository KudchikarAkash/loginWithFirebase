//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
// create a component
const ArticleScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.articleContainer}>
                <Text style={styles.heading}>
                    Welcome to authorized screen
                </Text>
                <Text style={styles.content}>
                    your are login from firebase 
                </Text>
                <TouchableOpacity style={{padding:20}} onPress={()=>firebase.auth().signOut()} >
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
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
