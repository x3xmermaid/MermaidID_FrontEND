import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

export default class TokopediaSpash extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#FFF', flex:1, alignSelf: 'stretch'}}>
                <Image style={{alignSelf:'center', zIndex:100}} source={require('../Assets/img/Tokopedia.svg')}/>
                <StatusBar backgroundColor="#FFF" barStyle="light-content" />
            </View>
        )
    }
}