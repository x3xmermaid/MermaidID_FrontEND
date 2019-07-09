import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import CartHeader from '../Components/Header/CartHeader';

class Cart extends Component {
    render() {
        return(
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <CartHeader />
                <ScrollView style={{backgroundColor:'#FFF'}}>
                    <Text style={{top:40}}>InI Cart</Text>
                </ScrollView>
             </View> 
        )
    }
}

export default Cart