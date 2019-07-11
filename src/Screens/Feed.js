import React, { Component } from 'react';
import { Text,View } from 'react-native';
import FeedCard from '../Components/Feed/CardFeed';
import FeedHeader from '../Components/Header/FeedHeader';

class Feed extends Component {
    render() {
        return(
            
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                                
                <FeedHeader/>
                <View style={{marginTop:80}}>
                <FeedCard/>
                </View>
                
             </View> 
            
        )
    }
}

export default Feed;