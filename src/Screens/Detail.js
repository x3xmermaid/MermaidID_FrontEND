import React, { Component } from 'react';
import { Text } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Account from '../Screens/Account';

class Detail extends Component {
    render() {
        return(
            <Text>Ini Detail</Text>
        )
    }
}

export default createAppContainer(Detail);