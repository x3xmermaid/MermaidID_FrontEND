import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList,ScrollView,StyleSheet} from 'react-native';
import {Card,SearchBar,Button, Image} from 'react-native-elements';
import {Product,wishlistdata} from '../Assets/dummy';
import {connect} from 'react-redux';
import {getWishlist} from '../Public/redux/action/product';

class CardWishlist extends Component {
    constructor(props){
        super(props);
        this.state={
            //wishlistProduct:Product
        }
    }

    getDataWishlist = () => {
        this.props.dispatch(getWishlist())
    }

    componentDidMount(){
        this.getDataWishlist();
    }

   
    renderItem=({item,index}) => (
        
        <View style={{flex:1,flexGrow:1}}>
                <Card 
                image={{uri:item.product_image}}
                imageStyle={styles.ImageIconStyle}
                containerStyle={{
                flex:1,
                backgroundColor:'#FFF',
                width:'100%',
                margin:0,
                borderWidth:0.5,
                borderStyle:'dashed'

                
                }}>
                    <Text style={styles.ProductNameStyle} numberOfLines={2}>{item.product_name}</Text>
                   <Text style={styles.PriceTextStyle}>Rp {item.price}</Text>
                    <View style={{marginLeft:3,flexDirection:'column',paddingBottom:5}}>
                    <Text style={styles.storeName}>{item.store_name}</Text>
                    <View style={{flexDirection:'row'}}>
                    <Image
                    source={{uri:'http://www.sclance.com/pngs/location-icon-png-transparent/location_icon_png_transparent_810746.png'}}
                    style={{height:18,width:18}}
                    
                    />
                        <Text style={styles.locationName}>Jakarta</Text>
                        </View>
                    </View>
                    
                
               
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <TouchableOpacity>
                    <Image
                    source={{uri:'https://cdn3.iconfinder.com/data/icons/ui-thick-outline-1-of-5/100/ui_01_of_9-08-512.png'}}
                    style={{height:30,width:30,marginTop:4}}/>
                </TouchableOpacity>
                    <Button 
                    type='solid'
                title='Beli'
                containerStyle={{paddingLeft:4,width:'80%'}}
                buttonStyle={{backgroundColor:'#FF5722',borderRadius:0,height:35}}
                />
                
                </View>
                </Card>
        </View>
    )
    
    render(){
        if(wishlistdata.length % 2 ==1){
            //wishlistdata.shift(0);
        }
        return(
            <View>
            <View style={{marginTop:55}}>
            <ScrollView>
            <View>
                <SearchBar
                 placeholder='Cari Product di wishlist'
                 containerStyle={{backgroundColor:'#FFF',borderBottomColor:'#FFF',borderTopColor:'#FFF'}}
                 inputContainerStyle={{backgroundColor:'#F6F6F6'}}
                 inputStyle={{fontSize:17,marginTop:4 }}
                 
                />
            </View>
            <View style={{flex:1,flexDirection:'row',alignContent:'flex-start'}}>
            <FlatList
            columnWrapperStyle={{justifyContent:'flex-start' }}
            //data={this.state.wishlistProduct.filter(Products => wishlistdata.indexOf(Products.id) !== -1)}
            data={this.props.product.wishlistData}
            renderItem={this.renderItem} 
            numColumns={2}
            keyExtractor={this._keyExtractor}
            horizontal={false}
            />
            </View>
            </ScrollView>
            </View>
            </View>
        )
    }
}

//export default CardWishlist ;


const mapStateToProps = ( state ) => {
    return {
        product:state.product
    }
}

export default connect(mapStateToProps)(CardWishlist);

const styles=StyleSheet.create ({
    ImageIconStyle: {
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
       fontWeight:'500',
       fontSize:14,
       color:'#FF5722',
       marginLeft:3
    },
    rating: {
       paddingRight:5,
       height:5,
    },
    storeName:{
        fontSize:12
    },
    locationName: {
        fontSize:12
    }
  
})