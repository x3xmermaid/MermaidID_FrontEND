import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

export default class TokopediaSpash extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'FFF', flex:1, alignSelf: 'stretch'}}>
                <Image style={{alignSelf:'center', zIndex:100, width:130, height:113, marginTop: '64%'}} source={require('../Assets/img/tokopedia-logo-5340B636F6-seeklogo.com.png')}/>
                <StatusBar backgroundColor="#53ff1a" barStyle="light-content" />
            </View>
        )
    }
}