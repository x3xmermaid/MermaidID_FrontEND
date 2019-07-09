import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import CartHeader from '../Components/CartHeader';


class Cart extends Component {
    render() {
        return(
            <Container>
                <CartHeader />
                <View>
                    <Text style={{top:40}}>Ini Cart</Text>
                </View>
            </Container> 
        )
    }
}

export default Cart