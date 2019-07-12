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
            <View style={{flexDirection:'column', marginTop: 15}}>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:-0}}>
                    <CheckBox checked={true}/>
                    <ImageBackground style={{height:60, width:60}} source={require('../../Assets/img/img.png')}></ImageBackground>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:10, marginTop: -30 ,color:'black'}}>
                            {item.item}
                        </Text>
                        <Text style={{marginLeft:10 ,color:'#FF5722', fontWeight:'600'}}>{"Rp"+item.price}</Text>
                    </View>
                    <ImageBackground style={{height:26, width:26, marginTop:-30, marginLeft:90}} source={require('../../Assets/img/recycle.png')}></ImageBackground>
                </View>
                <View style={{flexDirection:'row-reverse', alignItems:'center', marginRight:-0, marginTop: 20, marginBottom: 10}}>
                    <ImageBackground style={{height:26, width:26, marginLeft:5}} source={require('../../Assets/img/plus.png')}></ImageBackground>
                        <Text style={{marginLeft:3, color:'black'}}>
                            {item.total}
                        </Text>
                    <ImageBackground style={{height:26, width:26, marginLeft:5}} source={require('../../Assets/img/min.png')}></ImageBackground>
                    <ImageBackground style={{height:26, width:26, marginLeft:5}} source={require('../../Assets/img/love.png')}></ImageBackground>
                </View>
                    <Text style={{color:"#42B549", marginLeft:20, marginBottom:15}}>{"Tulis Catatan untuk Toko"}</Text>
                    <View style={style.line}></View>
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
        width: widthWindow-30,
        borderColor: "grey",
        borderWidth: 0.1,
        marginLeft: 15,
        // paddingRight: 35,
        elevation: 2

    },
    
})

export default itemFlatlist