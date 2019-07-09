import React,{Component} from  'react';
import {FlatList,Text,TouchableOpacity,View,Image,StyleSheet} from 'react-native';
import {Card,Rating} from 'react-native-elements'
import {Product} from '../Assets/dummy'

class CardFlatList extends Component {

    _keyExtractor = (item,index) => item.id

    renderItem = ({item,index}) => (
        <View style={{flex:1,flexGrow:1}}>
            <TouchableOpacity>
                <Card 
                image={{uri:item.image}}
                imageStyle={styles.ImageIconStyle}
                containerStyle={{
                flex:1,
                backgroundColor:'#FFF',
                width:'100%',
                margin:0,
                borderColor:'transparent'
                }}>
                    <Text style={styles.ProductNameStyle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.PriceTextStyle}>Rp {item.price}</Text>
                    <View style={{marginLeft:3,flexDirection:'row'}}>
                    <Rating
                     type='star'
                     imageSize={12}
                     readonly
                     fractions={1}
                     startingValue={item.rating}
                     style={ styles.rating }/><Text style={{fontSize:12,marginTop:-3}}>({item.userRated})</Text></View>

                </Card>
            </TouchableOpacity>
        </View>
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

const styles=StyleSheet.create ({
     ImageIconStyle: {
        borderRadius:5,
        overflow:"hidden",
        margin:15,
        marginBottom:0
     },
     ProductNameStyle: {
         fontWeight:'bold',
         fontSize:15,
         color:'#000',
         marginLeft:3
     },
     PriceTextStyle: {
        fontWeight:'800',
        fontSize:14,
        color:'#FFA044',
        marginLeft:3
     },
     rating: {
        paddingRight:5,
        height:5,
     }
   
})