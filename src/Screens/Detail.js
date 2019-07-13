import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailHeader from '../Components/Header/ProductHeader';
import ProductPhotoCarousel from '../Components/Detail/ProductPhotoCarousel';
//import BottomCardDetail from '../Components/BottomNav/BottomNavForCart';
import BottomCartDetail from '../Components/BottomNav/BottomNav';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            dataProduct:this.props.navigation.state.params
        }
        console.log(this.props.navigation.state.params.dataProduct);
        console.log(this.props.navigation.state.params);
    }
    render() {
        return(
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                 <DetailHeader/>
                <ScrollView style={{backgroundColor:'#FFF'}}>
                 <ProductPhotoCarousel
                 dataProduct={this.state.dataProduct}
                 />
                 
                </ScrollView>
                <BottomCartDetail
                dataProduct={this.state.dataProduct}
                />
                
                
                
             </View> 
            
        )
    }
}

export default Detail;