import React, { Component } from 'react';
import {
    Platform,
    View
} from 'react-native';
import { Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                <Avatar
                    size="small"
                    rounded
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Avatar
                    size="medium"
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Avatar
                    size="large"
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Avatar
                    size="xlarge"
                    rounded
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
            </View>
        );
    }
}

export default App;
