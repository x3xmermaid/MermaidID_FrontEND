import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ListCardItem from '../Components/FlatList';
import Carousel from '../Components/Carousel';
import CategoryHorizontal from '../Components/ListCategoryHome';
import HomeHeader from '../Components/Header/HomeHeader';

class Home extends Component {
    render() {
        return(
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <HomeHeader />
                <ScrollView style={{backgroundColor:'#FFF'}}>
                    <Carousel/>
                    <CategoryHorizontal/>
                    <ListCardItem/>
                </ScrollView>
             </View> 
        );
    }
}

export default Home