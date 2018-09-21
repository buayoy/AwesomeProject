import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomePage extends Component {

    static navigationOptions = {
        title: 'HOME'
    }

  render() {
    return (
      <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center',}}>
        <Text> Home page </Text>
        <Button title="Push" onPress={()=> this.props.navigation.push('Detail')}/>
        <Button title="Navigate" onPress={()=> this.props.navigation.navigate('Detail')}/>
        <Button title="Push to Home" onPress={()=> this.props.navigation.push('Home')}/>
        <Button title="Navigate to Home" onPress={()=> this.props.navigation.navigate('Home')}/>
      </View>
    );
  }
}


class DetailPage extends Component {
    static navigationOptions = {
        title: 'DETAIL'
    }

  render() {
    return (
        <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center',}}>
        <Text> Detail page </Text>
        <Button title="Push" onPress={()=> this.props.navigation.push('VeryDetail')}/>
        <Button title="Pop" onPress={()=> this.props.navigation.goBack()}/>
      </View>
    );
  }
}


class VeryDetailPage extends Component {
    static navigationOptions = {
        title: 'VERY DETAIL'
    }

  render() {
    return (
        <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center',}}>
        <Text> Very Detail page </Text>
        <Button title="Pop (goBack)" onPress={()=> this.props.navigation.goBack()}/>
        <Button title="Pop (popToTop)" onPress={()=> this.props.navigation.popToTop()}/>
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
    }, 
    VeryDetail: {
        screen: VeryDetailPage
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
