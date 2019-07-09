import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import AppHeader from '../Components/AppHeader';

class Home extends Component {
    render() {
        return(
            <Container>
                <AppHeader />
                <View>
                    <Text style={{top:40}}>Ini Home</Text>
                </View>
            </Container> 
        )
    }
}

export default Home