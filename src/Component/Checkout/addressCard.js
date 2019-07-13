import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, Dimensions, ImageBackgroundm, FlatList} from 'react-native'
import {shop} from '../../Assets/dummy'
import {Button} from 'react-native-elements'
import FlatItem from './itemFlatlist'

class AddressCard extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        let text = "Asrama putri ayu Jl. Nusa indah no 100 perumnas condong catur kec. depok kab.sleman yogyakarta, Depok, Kab. Sleman 55283, 6282391082250"
        return(
            <View style={style.shadow}>
                <Text style={{fontSize:18, color:'black', marginBottom:5}}>{"Tujuan Pengiriman"}</Text>
                <Text>{"Try Satria   "}<Text style={{color:'#42B549',marginBottom:4 , backgroundColor:'#DAF5DB', fontWeight:'400'}}>{" Utama"}</Text></Text>
                <Text style={{color:'rgba(0,0,0,.7)',marginBottom:3}}>{"Try Satria Amanattullah"}</Text>
                <Text style={{lineHeight:20}}>{text}</Text>
                <View style={[style.promoCard, {justifyContent: 'space-between'}]}>
                  <View style={style.button}>
                        <Text style={{color:'#03AC0E'}}>{"Kirim Ke Banyak Alamat"}</Text>
                  </View>
                  <View style={style.button}>
                        <Text style={{color:'#03AC0E'}}>{"Ganti Alamat"}</Text>
                  </View>
                </View>
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
        padding: 20
        // borderColor: 'rgba(0, 0, 0, 0.5)',
        // borderBottomWidth:1
    },
    promoCard: {
        borderRadius: 5,
        width: '100%',
        height: 80,
        flexDirection: 'row',
        // backgroundColor:'blue',
        alignItems: 'center'
    },
    button: {
        borderRadius:5, 
        padding:15, 
        height:40, 
        // width:120,  
        borderColor:'#03AC0E',
        borderWidth:1,
        justifyContent:'center', 
        alignItems:'center',
        
    }
    
})

export default AddressCard