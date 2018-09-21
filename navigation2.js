import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomePage extends Component {

    mCredentail
    constructor(props){
      super(props);
      this.mCredentail = {credentail: {username: 'admin', password: '1234'}};
    }

    static navigationOptions = {
        title: 'HOME'
    }

  render() {
    return (
      <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center',}}>
        <Text> Home page </Text>
        <Button title="Push" onPress={()=> this.props.navigation.push('Detail', this.mCredentail)}/>
      </View>
    );
  }
}


class DetailPage extends Component {
    static navigationOptions = {
        title: 'DETAIL'
    }

  render() {
    
    var params = this.props.navigation.getParam("credentail");
    const {username, password} = params;

    return (
        <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center',}}>
        <Text> Detail page </Text>
        <Text> Username: {username}, Password: {password} </Text>
        <Button title="Pop" onPress={()=> this.props.navigation.goBack()}/>
      </View>
    );
  }
}



const RootStack = StackNavigator({
    Home: {
        screen: HomePage
    },
    Detail: {
        screen: DetailPage
    }
}, {initialRouteName: 'Home'})


class App extends Component {
  render() {
    return (
     <RootStack/>
    );
  }
}



export default App;
