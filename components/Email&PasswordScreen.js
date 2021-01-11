//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
// create a component
class EmailAndPassword extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }
    onButtonPress=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess)
        .catch(err=>{
            this.setState({
                error: err.message
            })
        })
    }
    onLoginSuccess =() =>{
        this.setState({
            error:'',
            loading:false
        })
    }   
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder="email"
                style={styles.input} 
                value={this.state.email}
                onChangeText={email=>this.setState({email})}
                />
                <TextInput 
                placeholder="password"
                style={styles.input}
                value={this.state.password}
                onChangeText={password=>this.setState({password})}
                secureTextEntry={true}
                />

            <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
                <Text style={styles.errText}>
                    {this.state.error}
                </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20
    },
    input:{
        height:40,
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15

    },
    errText:{
        fontSize:20,
        color:'red',
        alignSelf:'center',
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'blue',
        padding:15,
        borderRadius:8
    }
});

//make this component available to the app
export default EmailAndPassword;
