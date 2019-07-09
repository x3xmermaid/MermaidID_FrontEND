import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import FeedHeader from '../Components/FeedHeader';

class Feed extends Component {
    render() {
        return(
            <Container>
                <FeedHeader />
                <View>
                    <Text style={{top:40}}>Ini Feed</Text>
                </View>
            </Container>  
        )
    }
}

export default Feed