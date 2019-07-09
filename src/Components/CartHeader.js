import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Title, Body, Right } from 'native-base';

class CartHeader extends Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    <Title>Keranjang</Title>
                </Left>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
})

export default CartHeader;
