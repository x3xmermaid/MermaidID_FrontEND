import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, Dimensions, ImageBackgroundm, FlatList} from 'react-native'
import {shop} from '../../Assets/dummy'
import {Button} from 'react-native-elements'
import FlatItem from './itemFlatlist'

class ShopFlatlist extends Component{
    // constructor(props){
    //     super(props);
    // }
    renderItem = ({item, index}) => {
        return (
            <View style={style.shadow}>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:20, marginBottom:10}}>
                    <View style={{flexDirection:'column'}}>
                        <Text>
                            {"Penjual: "}<Text style={{color:'black', fontSize:18}}>{item.store}</Text>
                        </Text>
                        <Text>{item.address}</Text>
                    </View>
                </View>
                <FlatItem></FlatItem>
                <View style={[style.promoCard, {justifyContent: 'space-between'}]}>
                  <Text style={{marginLeft: 5}}>{"Pengiriman"}</Text>
                  <View style={{backgroundColor:'#03AC0E', borderRadius:5, padding:3, paddingRight:17,height:40, width:136, marginLeft: 40, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>{"Pilih Pengiriman"}</Text>
                  </View>
                </View>
                <View style={[style.promoCard, {justifyContent: 'space-between'}]}>
                  <Text style={{marginLeft: 5}}>{"Subtotal"}</Text>
                  <Text style={{fontWeight:'500', marginRight:20}}>{"Rp. 200000"}</Text>
                </View>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render(){
        return(
            <View style={style.flatCard}>
            {/* <CheckBox></CheckBox> */}
                <FlatList
                    data={shop}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width
const style = StyleSheet.create({
    flatCard: {
        width: '100%',
        // padding: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginTop: 10
    },
    shadow: {
        marginTop: 20,
        // borderColor: 'rgba(0, 0, 0, 0.5)',
        // borderBottomWidth:1
    },
    promoCard: {
        borderRadius: 5,
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 0.62,

        elevation: 1,
        flexDirection: 'row',
        padding: 8,
        paddingLeft: 15,
        alignItems: 'center'
    }
    
})

export default ShopFlatlist