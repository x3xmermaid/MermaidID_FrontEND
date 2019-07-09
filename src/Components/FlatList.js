import React,{Component} from  'react';
import {FlatList,Text,TouchableOpacity,View,Image,StyleSheet} from 'react-native';
import {Card,Rating} from 'react-native-elements'
import {Product} from '../Assets/dummy'
import CardProduct from '../Components/CardProduct';

class CardFlatList extends Component {

    _keyExtractor = (item,index) => item.id

    renderItem = ({item,index}) => (
        <CardProduct
         image={item.image}
         price={item.price}
         userRated={item.userRated}
         rating={item.rating}
         title={item.title}
         />
        
    )

    render(){
        return(
            <View style={{flex:1,flexDirection:'row',alignContent:'flex-start'}}>
            <FlatList
            data={Product}
            renderItem={this.renderItem}
            numColumns={2}
            keyExtractor={this._keyExtractor}
            />
            </View>
        );
    }
} 

export default CardFlatList;

