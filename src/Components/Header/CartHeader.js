import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CartHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:1, alignContent: 'flex-start', left:20}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Keranjang</Text>
                    </View> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
        position: "absolute",
        width: 360,
        height: 52,
        backgroundColor: '#ffffff',
        zIndex: 5,
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
