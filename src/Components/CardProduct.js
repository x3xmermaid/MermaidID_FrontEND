import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Card,Rating} from 'react-native-elements';

class CardProduct extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{flex:1,flexGrow:1}}>
            <TouchableOpacity>
                <Card 
                image={{uri:this.props.image}}
                imageStyle={styles.ImageIconStyle}
                containerStyle={{
                flex:1,
                backgroundColor:'#FFF',
                width:'100%',
                margin:0,
                borderColor:'transparent'
                }}>
                    <Text style={styles.ProductNameStyle} numberOfLines={2}>{this.props.title}</Text>
                   <Text style={styles.PriceTextStyle}>Rp {this.props.price}</Text>
                    <View style={{marginLeft:3,flexDirection:'row'}}>
                    <Rating
                     type='star'
                     imageSize={12}
                     readonly
                     fractions={1}
                     startingValue={this.props.rating}
                     style={ styles.rating }/><Text style={{fontSize:12,marginTop:-3}}>({this.props.userRated})</Text></View>
                    {/* {this.props.Wishlist!=='' && } */}
                    
                </Card>
            </TouchableOpacity>
        </View>
        )
    }
}

export default CardProduct;

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