import React,{Component} from 'react';
import {FlatList,Text,View,TouchableOpacity,StyleSheet,Dimensions,Image} from 'react-native';
import {Card} from 'react-native-elements';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {carousel} from '../Assets/dummy';


const deviceWidth = Dimensions.get('window').width;
class CarouselView extends Component {
    constructor(props){
        super(props);
        this.state={
            entries:3,
            activeSlide:0
        }
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries}
              activeDotIndex={activeSlide}
              containerStyle={{ alignSelf:'flex-start',maxHeight:70}}
              

              dotStyle={{
                  width: 7,
                  height: 7,
                  borderRadius: 5,
                  backgroundColor: '#03AC0E'
              }}
              inactiveDotStyle={{
                width: 7,
                height: 7,
                borderRadius: 5,
                backgroundColor:'#E6E8EA'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={1}
            />
        );
    }

    renderItem = ({item,index}) => (
    
            <View style={{flex:1,alignSelf:'center',marginTop:10,marginBottom:0}}>
                    <Image
                    source={{uri:item.ads}}
                    style={{width:deviceWidth-30,height:110,borderRadius:10,marginEnd:10}}
                    
                    />
            </View>
        
    )
    _keyExtractor = (item,index) => item.id


    render(){
        return(
             <View style={{flex:1,flexDirection:'column',borderRadius:15,backgroundColor:'#fff',maxHeight:190}}>
            
           <Carousel
                    data={carousel}
                    sliderWidth={deviceWidth}
                    style={style.carouselView}
                     itemWidth={deviceWidth}
                    autoplay={true}
                    autoplayInterval={7000}
                    loop={true}
                     horizontal={true}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    renderItem={this.renderItem}
                />
                 {this.pagination}
                </View>
                
            
            
        );
    }
}

export default CarouselView;

const style = StyleSheet.create ({
    carouselView : {
    borderRadius:10,
    overflow:'hidden',
    maxHeight :110
    }
})
