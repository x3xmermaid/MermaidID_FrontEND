import React, { Component } from 'react';
import { View,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation';

const widthDim = Dimensions.get('window').width
const heightDim = Dimensions.get('window').height

class BottomNavForCart extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.getData()
    }
    getData = () => {
        this.props.cart
    }
    render() {
        // console.log("hihay")
        console.log(this.props.cart)
        return(
                <View style={styles.BottomHeader}>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{flex:1, flexDirection: 'column', marginLeft: 20}}>
                        <Text style={{}}>Total Harga</Text>
                        <Text style={{color:'#ff6600'}}>{"Rp. "+this.props.cart.totalPrice}</Text>
                    </View>
                    <View style={{flex:1}} />
                    <View style={{flex:2}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AKun')} style={{flex:1, backgroundColor: '#ff6600', borderRadius: 6, borderColor: '#fff', borderWidth:3}}>
                            <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 7, color: 'white'}}>Beli</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>            
        )
    }
}

const styles = StyleSheet.create(
    {
        BottomHeader: {
            width: '100%',
            height: 45,
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            zIndex: 10,
            position:"absolute",
            // top: heightDim*0.9,
            bottom:0,
            elevation: 4,
            borderTopColor: '#a6a6a6',
            shadowColor: "#a6a6a6",
            shadowOffset: {
                width: 0, height: 5
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
        }
    }
)

const mapStateToProps = ( state ) => {
    return {
        product:state.product,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(withNavigation(BottomNavForCart));
