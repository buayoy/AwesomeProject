import React, { Component } from 'react';
import {
    Platform,
    View
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                <Button
                    icon={
                        <View style={{ marginRight: 10 }}>
                            <Icon
                                name='arrow-right'
                                size={15}
                                color='white'
                            />
                        </View>
                    }
                    iconRight
                    title='BUTTON WITH RIGHT ICON'
                />
            </View>
        );
    }
}

export default App;
