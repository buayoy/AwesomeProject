/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet,View,Button,Alert } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
//flex-box
/**
 * flex:
 */
export default class Workshop8 extends Component {
    // render() {
    //   return (
    //     <View style={styles.container}>
    //       <Text style={styles.welcome}>Palm to React Native!</Text>
    //       <Text style={styles.instructions}>To get started, edit App.js</Text>
    //       <Text style={styles.instructions}>{instructions}</Text>
    //     </View>
    //   );
    // }
    constructor(props){
        super(props)
            this.state={text:''}

    }
    clickMe(){
        Alert.alert('You tapped the button!')
        }

    render() {
        return (
            <View style={{padding: 10,flex:1,flexDirection:'column' ,justifyContent:'center'}}>
            <Button title="Press Me" onPress={this.clickMe}/>
          </View>
        );
    }
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         backgroundColor: '#FFFFFF',
//         justifyContent: 'flex-start',
//     },
//     myText:{
//         width:100,
//         height:100,
//         backgroundColor:'#105B2F'
//     },
//     item: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: '#FFFFFF'
//     }

// })

// class BlinkText extends Component {
//   constructor (props){
//     super(props)
//     this.state = {isVisible: true};
//     setInterval(()=>{
//       this.setState(oldState=>{
//         return {isVisible: !oldState.isVisible}
//       })

//     }, this.props.interval)

//   }
//   render() {

//     return (
//      <View style={styles.container}>
//        <Text style={styles.item}>test</Text>
//      </View>

//     );
//   }
// }
// const styles = StyleSheet.create({
//   container:{
//     flex:1,flexDirection: 'column',
//     backgroundColor: '#FF0000',
//     alignItems:'center',
//     justifyContent:'center'

//   },
//   item:{
//     fontSize:30,
//     fontWeight:'bold',
//     color:"#00FF00",

//   }
// })


