import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, Dimensions, ImageBackground, FlatList, SectionList, navigation} from 'react-native'
import {shop, Product} from '../../Assets/dummy'
import {CheckBox} from 'react-native-elements'
import FlatItem from './itemFlatlist'
import {connect} from 'react-redux'
import {fetchCart} from '../../Public/redux/action/cart'
import {getProduct} from '../../Public/redux/action/product';

class ShopFlatlist extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.login.isLogin === false){
            this.props.navigation.navigate('Login')
        }else{
            this.getData()
        }

    }
    getData = () => {
        // if(this.prop)
        this.props.dispatch(fetchCart())
    }
    renderStore = ({section}) => {
        return (
            <View style={style.shadow}>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:-0}}>
                    <CheckBox checked={true}/>
                    <View style={{flexDirection:'column', paddingRight:30}}>
                        <Text>
                            {"Toko: "}<Text style={{color:'black', fontSize:15}}>{section.key[0].store_name}</Text>
                        </Text>
                        <Text>{section.key[0].location}</Text>
                    </View>
                </View>
                
                {/* <FlatItem id_store={this.props.cart.cartProduct.filter(Product => this.props.cart.cartStore.indexOf(Product.id_store))} ></FlatItem> */}
            </View>
        )
    }
    renderItem = ({item, index}) => {
        return (
            <View style={{flexDirection:'column', marginTop: 15, paddingRight:20}}>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:-0}}>
                    <CheckBox checked={true}/>
                    <ImageBackground style={{height:60, width:60}} source={require('../../Assets/img/img.png')}></ImageBackground>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:10, marginTop: -30 ,color:'black'}}>
                            {item.product_name}
                        </Text>
                        <Text style={{marginLeft:10 ,color:'#FF5722', fontWeight:'600'}}>{"Rp"+item.price}</Text>
                    </View>
                    <ImageBackground style={{height:26, width:26, position: "absolute", top: 0, right: 0}} source={require('../../Assets/img/recycle.png')}></ImageBackground>
                </View>
                <View style={{flexDirection:'row-reverse', alignItems:'center', marginRight:-0, marginTop: 20, marginBottom: 10}}>
                    <ImageBackground style={{height:26, width:26, marginLeft:5}} source={require('../../Assets/img/plus.png')}></ImageBackground>
                        <Text style={{marginLeft:3, color:'black'}}>
                            {item.qty}
                        </Text>
                    <ImageBackground style={{height:26, width:26, marginLeft:5}} source={require('../../Assets/img/min.png')}></ImageBackground>
                    <ImageBackground style={{height:26, width:26, marginLeft:5}} source={require('../../Assets/img/love.png')}></ImageBackground>
                </View>
                    <Text style={{color:"#42B549", marginLeft:20, marginBottom:15}}>{"Tulis Catatan untuk Toko"}</Text>
                    <View style={style.line}></View>
                    <View style={style.line}></View>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render(){
        return(
            <View style={style.flatCard}>
                {/* <FlatList
                    data={this.props.cart.cartStore}
                    renderItem={this.renderItem}
                /> */}
                <SectionList

                    renderItem={this.renderItem}
                    sections={this.props.cart.cart}
                    renderSectionHeader={this.renderStore}
                    keyExtractor={(item, index) => item.product_name} 
                ></SectionList>
            </View>
        )
    }
}

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width
const style = StyleSheet.create({
    flatCard: {
        width: '100%',
        // padding: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginTop: 10
    },
    shadow: {
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
    
})

// export default ShopFlatlist
const mapStateToProps = ( state ) => {
    return {
        product:state.product,
        cart: state.cart,
        login: state.login
    }
}

export default connect(mapStateToProps)(ShopFlatlist);
