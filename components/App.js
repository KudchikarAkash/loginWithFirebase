//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import LoginForm from './LoginFormScreen';
import Article from './ArticleScreen';
import BG from '../images/bg.jpg';
// create a component
class App extends Component {

  state={
    loggedIn:true
  }

  renderContent=()=>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG}>
          <LoginForm />
          </ImageBackground>

      case true:
        return <Article />
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
    backgroundColor: '#fff',
    height:'100%',
    width:'100%'
  },
});

//make this component available to the app
export default App;
