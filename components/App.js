//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginFormScreen';
import Article from './ArticleScreen';
import firebase from 'firebase';
import Loading from './LoadingScreen';
import BG from '../images/bg.png';
// create a component
class App extends Component {

  state={
    loggedIn:null
  }
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyDozW_5tIooVYioY6Zo8QsvzsbLaZgJVUY",
      authDomain: "loginwithfirebase-1df5f.firebaseapp.com",
      projectId: "loginwithfirebase-1df5f",
      storageBucket: "loginwithfirebase-1df5f.appspot.com",
      messagingSenderId: "47801530421",
      appId: "1:47801530421:web:8d64a010601334db51997c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({
          loggedIn:true
        })
      }else{
          this.setState({
            loggedIn: false
          })
      }
    })
  }
  
  renderContent=()=>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground source={BG} style={{height:'100%', width:'100%'}}>
          <LoginForm/>
          </ImageBackground>
      case true:
        return <Article />

        default:
          return<Loading />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    height: '100%',
    width: '100%'
  },
});

//make this component available to the app
export default App;
