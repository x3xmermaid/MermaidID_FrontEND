import React, { Component } from 'react';
import { Text,View,ScrollView} from 'react-native';
import ListCardItem from '../Components/FlatList';
import Carousel from '../Components/Carousel';
import CategoryHorizontal from '../Components/ListCategoryHome';

class Home extends Component {
    render() {
        return(
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
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