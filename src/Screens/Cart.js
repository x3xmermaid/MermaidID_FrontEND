import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import CartHeader from '../Components/Header/CartHeader';
import FlatCard from '../Component/Cart/shopFLatlist'


class Cart extends Component {
    render() {
        return(
            <View style={{flex:1,alignItems:'flex-start',flexDirection:'column'}}>
                <CartHeader />
                <ScrollView style={{width:'100%'}}>
                    <View style={style.promotionCard}>
                        <View style={style.promoCard}>
                           <ImageBackground source={require('../Assets/img/discon.png')} style={{height: 32, width:32}}></ImageBackground> 
                           <Text style={{marginLeft: 5, color:'#42B549', fontWeight:'bold'}}>{"Gunakan promo MermaidID"}</Text>
                           <View style={{backgroundColor:'#FF8B00', borderRadius:3, padding:3, marginLeft: 40}}>
                               <Text style={{color:'white', fontWeight:'bold'}}>{"2 Kupon"}</Text>
                           </View>
                        </View>
                    </View>
                        <FlatCard></FlatCard>
                </ScrollView>
             </View> 
        )
    }
}

const style = StyleSheet.create({
    promotionCard: {
        height: 76,
        width: '100%',
        padding: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    promoCard: {
        borderRadius: 5,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        flexDirection: 'row',
        padding: 8,
        paddingLeft: 15,
        alignItems: 'center'
    }
})

export default Cart