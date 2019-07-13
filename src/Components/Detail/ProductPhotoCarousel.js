import React,{Component} from 'react';
import {View,TouchableOpacity,Image,Dimensions,ScrollView,StyleSheet,Text} from 'react-native';
import {Button,Icon,Card,Divider,AirbnbRating,Rating} from 'react-native-elements';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {carousel,productPhoto,Product} from '../../Assets/dummy';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation';


const deviceWidth = Dimensions.get('window').width;

class ProductPhotoCarousel extends Component {
    constructor(props){
        super(props);
        this.state={
            //entries:this.state.productData[0].length,
            entries:1,
            activeSlide:0,
            selectedId:this.props.dataProduct,
            productData:this.props.product.productData.filter(products => products.id_product == this.props.dataProduct[0].id)
        }
        console.log(this.props.dataProduct[0].id);
    }
    
    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries}
              activeDotIndex={activeSlide}
              containerStyle={{ alignSelf:'center',position:'absolute',marginTop:230}}
              dotStyle={{
                  width: 7,
                  height: 7,
                  borderRadius: 5,
                  backgroundColor: '#03AC0E',
                  marginHorizontal:-8
                  
              }}
              inactiveDotStyle={{
                width: 7,
                height: 7,
                borderRadius: 5,
                backgroundColor:'#FFF',
                
              }}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
        );
    }

    renderItem = ({item,index}) => (
    
            
                    <Image
                    source={{uri:item}}
                    style={{flex:1,width:deviceWidth+100}}
                    />
            
        
    )
    _keyExtractor = (item,index) => item.id


    render(){
        let photo =[this.state.productData[0].product_image]
        //console.warn(this.state.productData[0][0].product_image);
        return(
            <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff'}}> 
            <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff',maxHeight:400}}>
                
                
                <Carousel
                    data={photo}
                    sliderWidth={deviceWidth}
                    style={style.carouselView}
                     itemWidth={deviceWidth}
                     slideStyle={{flex:1,width:deviceWidth}}
                     containerCustomStyle={{ flex:1,backgroundColor:'#FFF' }}
                     horizontal={true}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    renderItem={this.renderItem}
                />
                 {this.pagination}
            </View>
             <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff'}}>
            
           
                
                <View style={{margin:10}}>
                    <Text style={style.titleProduct}>{this.state.productData[0].product_name}</Text>
                    <Text style={style.PriceTextStyle}>Rp {this.state.productData[0].price}</Text>
                    <TouchableOpacity style={style.wishlistButton}>
                    <Icon
                    name='heart'
                    type='evilicon'
                    color='grey'
                    size={40}
                    />
                    </TouchableOpacity>
                    <Divider style={{backgroundColor:'#E9E9E9',height:1}}/>
                    <Text>Stock 50 ></Text>
                    <View style={{flexDirection:'row',marginLeft:5}}>
                    <Text style={style.ratingText}>{parseFloat(this.state.productData[0].rating).toFixed(1)}</Text>
                    <Icon
                    containerStyle={{marginTop:5,marginLeft:2}}
                    name='star'
                    type='font-awesome'
                    color='#FFC107'
                    size={20}
                    />
                    <Text style={{fontSize:16,marginTop:10}}>/5</Text>

                    </View>
                    <Card
                    containerStyle={{width:'100%',marginLeft:-4,flex:1,flexDirection:'column'}}>
                    <Text style={style.productTitle}>Informasi Produk</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text >Berat</Text>
                    <Text>5.000 gram</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text >Kondisi</Text>
                    <Text>New</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text >Pemesanan Min.</Text>
                    <Text>1</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text >Kategori</Text>
                    <Text style={{color:'#42B549'}}>Home>Cupang>...</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text >Etalase</Text>
                    <Text style={{color:'#42B549'}}>Ikan Cupang</Text>
                    </View>
                    <Text style={style.productTitle}>Deskripsi Produk</Text>
                    <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
                    <Text numberOfLines={2}>
                        {this.state.productData[0].description}
                    </Text>
                    <TouchableOpacity>
                    <Text style={{color:'#42B549'}}>Baca Selengkapnya</Text>
                    </TouchableOpacity>
                    </View>
                    </Card>

                </View>
                
                </View>
                
                </View>
                
                
                
                
            
            
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        product:state.product
    }
}

//export default connect(mapStateToProps)(ProductPhotoCarousel);
export default withNavigation(connect(mapStateToProps)(ProductPhotoCarousel));

const style = StyleSheet.create ({
    carouselView : {
    overflow:'hidden',
    },
    titleProduct :{
        fontSize:18,
        fontWeight:'800'
    },
    wishlistButton: {
        backgroundColor:'#FFF',
        shadowColor:'rgba(0,0,0, .4)',
        shadowRadius:4,
        shadowOffset:{height:4,width:4},
        elevation:2,
        height:50,
        width:50,
        justifyContent:'center',
        borderRadius:50,
        position:'absolute',
        marginLeft:280,
        marginTop:-40,
    },
    PriceTextStyle: {
        fontWeight:'800',
        fontSize:18,
        color:'#FF5722',
        marginLeft:3
     },
     rating: {

     },
     ratingText: {
         fontSize:24,
         color:'#4C4C4C',
         fontWeight:'bold'
     },
     productTitle: {
         fontSize:17,
         fontWeight:'bold'
     }
})