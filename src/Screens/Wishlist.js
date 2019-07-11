import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Card,SearchBar} from 'react-native-elements';
import CardWishlist from '../Components/CardWishlist';
import WishlistHeader from '../Components/Header/WishlistHeader';

class Wishlist extends Component {
    
    render(){
        return(
            <View>
                <WishlistHeader/>
                <View>
                <CardWishlist/>
                </View>
                
            </View>
            
        )
    }
}

export default Wishlist ;