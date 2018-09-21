import React, { Component } from 'react';
import {
    Platform,
    View, Image, Text, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

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

                <Input
                    placeholder='BASIC INPUT'
                />

                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />

                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />

                <Input
                    placeholder='INPUT WITH SHAKING EFFECT'
                    shake={true}
                />

                <Input
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    image: {
        width: 50,
        height: 50
    },
    name: {
        fontWeight: 'bold',
    }
})

export default App;
