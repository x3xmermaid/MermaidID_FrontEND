import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import {Card,SearchBar} from 'react-native-elements';
import CardProduct from '../Components/CardProduct';
import {Product,wishlistdata} from '../Assets/dummy';

class Wishlist extends Component {
    constructor(props){
        super(props);
        this.state={
            wishlistProduct:Product
        }
    }
    renderItem=({item,index}) => (
        
        <CardProduct
        image={item.image}
        price={item.price}
        userRated={item.userRated}
        rating={item.rating}
        title={item.title}
        />
    )
    
    render(){
        if(wishlistdata.length % 2 ==1){
            //wishlistdata.shift(0);
        }
        return(
            <View style={{flex:1}}>
            <ScrollView>
            <View><SearchBar placeholder='Cari Product di wishlist'/></View>
            <View style={{flex:1,flexDirection:'row',alignContent:'flex-start'}}>
            <FlatList
            columnWrapperStyle={{justifyContent:'flex-start' }}
            data={this.state.wishlistProduct.filter(Products => wishlistdata.indexOf(Products.id) !== -1)}
            renderItem={this.renderItem}
            numColumns={2}
            keyExtractor={this._keyExtractor}
            horizontal={false}
            />
            </View>
            </ScrollView>
            </View>
        )
    }
}

export default Wishlist ;