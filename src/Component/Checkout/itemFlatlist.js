import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, Dimensions, ImageBackground, FlatList} from 'react-native'
import {item} from '../../Assets/dummy'
import {CheckBox} from 'react-native-elements'

class itemFlatlist extends Component{
    // constructor(props){
    //     super(props);
    // }
    renderItem = ({item, index}) => {
        return (
            <View style={{flexDirection:'column', marginTop: 5, marginLeft:20 ,height:100}}>
                <View style={{flexDirection:'row', alignItems:'center', height:100}}>
                    <ImageBackground style={{height:60, width:60}} source={require('../../Assets/img/img.png')}></ImageBackground>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:10 ,color:'black', marginBottom:3}}>
                            {item.item}
                        </Text>
                        <Text style={{marginLeft:10, fontSize:12, marginBottom:3}}>{item.total+" Barang ("+item.berat+" kg)"}</Text>
                        <Text style={{marginLeft:10 ,color:'#FF5722', fontWeight:'600', marginBottom:3}}>{"Rp"+item.price}</Text>
                    </View>
                </View>
                    {/* <View style={style.line}></View> */}
                    <View style={style.line}></View>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render(){
        return(
            <View style={style.flatCard}>
            {/* <CheckBox></CheckBox> */}
                <FlatList
                    data={item}
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
        paddingLeft: 20,
        backgroundColor: 'white',
        // marginTop: 5,
        marginLeft:-20
    },
    line: {
        width: widthWindow-40,
        borderColor: "grey",
        borderWidth: 0.1,
        // marginLeft: 15,
        // paddingRight: 35,
        elevation: 2

    },
    
})

export default itemFlatlist