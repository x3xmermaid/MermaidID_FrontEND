import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailHeader from '../Components/Header/ProductHeader';
import ProductPhotoCarousel from '../Components/Detail/ProductPhotoCarousel';

class Detail extends Component {
    render() {
        return(
            
            // <View style={{flex:1,flexDirection:'column'}}>
                
            // <DetailHeader/>
            
            // <ProductPhotoCarousel/>
            
            // </View>

            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                 <DetailHeader/>
                <ScrollView style={{backgroundColor:'#FFF'}}>
                 <ProductPhotoCarousel/>
                </ScrollView>
             </View> 
            
        )
    }
}

export default Detail;