import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class CartHeader extends Component {
    state= {
        product: ''
    }
    render() {
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:1, alignContent: 'flex-start', flexDirection:'row'}}>
                        <View style={{ flex: 2, left: 2, top: 3 }}>
                            <TouchableOpacity>
                                <Icon size={25} type='antdesign' name='arrowleft' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text style={{fontSize: 20, color: 'black'}}>Keranjang</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', margin:13}}>
                        <View>
                            {
                                this.state.product === '' ? (
                                    <Text />
                                ) : (
                                <TouchableOpacity>
                                    <Text>Hapus</Text>
                                </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
        position: "absolute",
        width: '100%',
        height: 52,
        backgroundColor: '#ffffff',
        zIndex: 5,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27
    },
    headerComponent: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
    }
})

export default CartHeader;
