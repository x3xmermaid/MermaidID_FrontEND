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

// const style = StyleSheet.create({
//     promotionCard: {
//         width: "100%",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 2,
//     }
// })

export default Cart