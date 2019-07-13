import React, { Component } from 'react';
import { View,Text, StyleSheet, Dimensions, TouchableOpacity ,Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import {postCart} from '../../Public/redux/action/product';
import {connect} from 'react-redux';

const widthDim = Dimensions.get('window').width
const heightDim = Dimensions.get('window').height

class BottomNav extends Component {

    constructor(props){
        super(props);
        console.log(this.props.dataProduct[0].id)
    }

    addToCart = () => {
        
        const id_product = this.props.dataProduct[0].id;
        const id_user = 1;
        const qty= 1;
        const total= 1;
        const buyed=1;
        
    
        if ( id_product !== '') {
            //this.props.addNote({ title, note, categoryId })
            this.props.dispatch(postCart({ id_product, id_user, qty,total,buyed }))
            alert('added to cart')
        }
    }
    render() {
        return(
                <View style={styles.BottomHeader}>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={{marginTop: 10}}>
                            <Icon size={30} name='message1' type='antdesign' />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity style={{flex:1, borderWidth: 2,marginVertical:3, borderColor: '#ff6600', borderRadius: 6}}>
                            <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 7, color: '#ff6600'}}>Beli</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity style={{flex:1, borderWidth: 2, borderColor: '#ff6600', backgroundColor: '#ff6600', alignSelf: 'center', borderRadius: 6,marginVertical:3}}
                        onPress={() => this.addToCart()}
                        >
                            <Text style={{color: 'white', marginTop: 10}}>Tambah Ke Keranjang</Text>
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
            borderTopWidth: 0,
            zIndex: 5,
            top: heightDim*0.89,
            position:'absolute',
            elevation: 2,
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
        product:state.product
    }
}

export default connect(mapStateToProps)(BottomNav);
