import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FeedHeader from '../Components/Header/FeedHeader';

class Feed extends Component {
    render() {
        return(
            <View>
                <FeedHeader />
            </View>
        )
    }
}

export default Feed