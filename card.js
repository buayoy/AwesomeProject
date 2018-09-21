import React, { Component } from 'react';
import {
    Platform,
    View, Image, Text, StyleSheet
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class App extends Component {
    
    render() {
        const users = [
            {
               name: 'CodeMobiles',
               avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },            
           ];

        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                // implemented without image with header
                <Card title="CARD WITH DIVIDER">
                    {
                        users.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                    <Text style={styles.name}>{u.name}</Text>
                                </View>
                            );
                        })
                    }
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    user:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      
    },
    image:{
        width: 50,
        height: 50
    },
    name: {
        fontWeight: 'bold',
    }
})

export default App;
