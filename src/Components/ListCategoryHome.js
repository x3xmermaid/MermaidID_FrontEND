import React,{Component} from  'react';
import {View,Text,ScrollView,TouchableOpacity,Image,StyleSheet,AppRegistry} from 'react-native';
import {categoryHorizontal} from '../Assets/dummy';


class ListCategoryHome extends Component {

    loopCategory(name,image,key){
        return (
            <View style={{maxWidth:75,width:75}} key={key}>
              <TouchableOpacity style={{padding:2}} key={key}>
                <Image
                style={style.ImageIconStyle}
                source={{uri:image}}
                />
                <Text style={style.item} numberOfLines={2}>{name}</Text>
            </TouchableOpacity>
            </View>
        )
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignContent:'center',maxHeight:90,backgroundColor:'#FFF'}}>
            <View style={style.scrollViewHolder}>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
        {
            categoryHorizontal.map((item,index) => {
                return(
                this.loopCategory(item.name,item.image,item.id)
                )
            })
        }
            </ScrollView>
            </View>
            </View>
        )
    }
}

export default ListCategoryHome;


const style=StyleSheet.create({
    ImageIconStyle: {
        width:50,
        height:50,

    },
    separator: {
        width: 2,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    scrollViewHolder:
   {
    marginStart:10,
    marginEnd:10
   },
 
   item:
   {
      color: 'black',
      fontSize: 10,
      padding:7
   }
})

//AppRegistry.registerComponent('HorizontalScrollView', () => HorizontalScrollView);