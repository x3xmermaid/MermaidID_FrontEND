import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import AccountHeader from '../Components/Accountheader';


class Account extends Component {
    render() {
        return(
            <Container>
                <AccountHeader />
                <View>
                    <Text style={{top:40}}>Ini Account</Text>
                </View>
            </Container> 
        )
    }
}

export default Account