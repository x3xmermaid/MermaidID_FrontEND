import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements'
import CartHeader from '../Components/Header/CartHeader';
import FlatCard from '../Component/Checkout/shopFLatlist'
import AddressCard from '../Component/Checkout/addressCard'
import {updateCheckout} from '../Public/redux/action/checkout'
import {fetchCart} from '../Public/redux/action/cart'
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation';

class Checkout extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.getData()
    }
    getData = () => {
        this.props.cart
    }
    buyed = () => {
        this.props.dispatch(updateCheckout(this.props.cart.cartProduct))
        this.props.dispatch(fetchCart(this.props.login.verify[0].id_user))
        this.props.navigation.navigate('Home')
    }
    render() {
        return(
            <View style={{flex:1,alignItems:'flex-start',flexDirection:'column'}}>
                <CartHeader />
                <ScrollView style={{width:'100%'}}>
                    <View style={style.promotionCard}>
                        <View style={style.promoCard}>
                           <ImageBackground source={require('../Assets/img/discon.png')} style={{height: 32, width:32}}></ImageBackground> 
                           <Text style={{marginLeft: 5, color:'#42B549', fontWeight:'bold'}}>{"Gunakan promo tokopedia"}</Text>
                           <View style={{backgroundColor:'#FF8B00', borderRadius:3, padding:3, marginLeft: 40}}>
                               <Text style={{color:'white', fontWeight:'bold'}}>{"2 Kupon"}</Text>
                           </View>
                        </View>
                    </View>
                        <AddressCard></AddressCard>
                        <FlatCard></FlatCard>
                    <View style={[style.promotionCard, {flexDirection:'row', justifyContent:'flex-start', marginTop:10, padding:0}]}>
                        <CheckBox/>
                        <Text style={{color:'rgba(0,0,0,0.5)', fontSize:16, marginLeft: -10}}>{"TopDonasi500"}</Text>
                    </View>
                    <View style={[style.promotionCard, {flexDirection:'row', justifyContent:'flex-start', marginTop:10, padding:0}]}>
                        <CheckBox/>
                        <View style={{flexDirection:'column', marginLeft: -10}}>
                            <Text style={{color:'rgba(0,0,0,0.7)', fontSize:15}}>{"Bulatkan Tagihan dengan Nabung Emas"}</Text>
                            <Text style={{color:'rgba(0,0,0,0.5)', fontSize:15}}>{"Pembulatan Emas sebesar Rp 16.000"}</Text>
                        </View>
                    </View>
                    {/* <View style={[style.promotionCard, {flexDirection:'column', marginTop:10, padding:20}]}>
                        <Text style={{color:'black', fontSize:16, fontWeight:'500'}}>{"Ringkasan Belanja"}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                            <Text style={{color:'rgba(0,0,0,0.5)', fontSize:14}}>{"Total Harga (6 barang)"}</Text>
                            <Text style={{color:'rgba(0,0,0,0.5)', fontSize:14}}>{"Rp. "+this.props.cart.totalPrice}</Text>
                        </View>
                    </View> */}
                    <View style={[style.promotionCard, {flexDirection:'row', justifyContent:'space-between', marginTop:10, padding:20}]}>
                        <View style={{flexDirection:'column', marginLeft: -10}}>
                            <Text style={{color:'rgba(0,0,0,0.7)', fontSize:15}}>{"Total Tagihan"}</Text>
                            <Text style={{color:'rgba(0,0,0,0.5)', fontSize:15}}>{"Rp. "+this.props.cart.totalPrice}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.buyed()}>
                            <View style={style.button}>
                                <Text style={{color:'white'}}>{"bayar"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    },
    button: {
        borderRadius:5, 
        padding:15, 
        height:40, 
        // width:120, 
        backgroundColor:'#FA591D', 
        borderColor:'#03AC0E',
        borderWidth:1,
        justifyContent:'center', 
        alignItems:'center',
        
    }
})

const mapStateToProps = ( state ) => {
    return {
        product:state.product,
        cart: state.cart,
        login: state.login
    }
}

export default connect(mapStateToProps)(withNavigation(Checkout));