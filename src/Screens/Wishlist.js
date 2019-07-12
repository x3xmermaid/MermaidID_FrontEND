import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Card,SearchBar} from 'react-native-elements';
import CardWishlist from '../Components/CardWishlist';
import BasicHeader from '../Components/Header/BasicHeader';

class Wishlist extends Component {
    
    render(){
        return(
            <View>
                <BasicHeader
                headerTitle={'Wishlist'}
                />
                <View>
                <CardWishlist/>
                </View>
                
            </View>
            
        )
    }
}

export default Wishlist ;