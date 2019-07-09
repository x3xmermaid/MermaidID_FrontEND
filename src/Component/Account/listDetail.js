import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, Dimensions, ImageBackground} from 'react-native'

class ListDetail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let image = "";
        (this.props.textData.image == 1 ? image = require('../../Assets/img/next.png') : require('../../Assets/img/blank.png'))
        return(
            <View style={style.listDetail}>
                <View style={style.detailBox}>
                    {this.props.textData.Text1 !== undefined && <Text style={style.boldText}>{this.props.textData.Text1}</Text>}
                    <Text style={style.detailText}>{this.props.textData.Text2}</Text>
                    <Text style={style.detailText2}>{this.props.textData.Text3}</Text>
                </View>
                <ImageBackground style={style.imageBox} source={image} />
            </View>
        )
    }
}

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width
const style = StyleSheet.create({
    listDetail: {
        // width: widthWindow,
        // backgroundColor:'blue',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: -23,
        flexDirection: 'row'
    },
    boldText:{
        fontWeight:"bold", 
        fontSize:18,
        marginTop: 30
    },
    detailText: {
        color:'#636363', 
        fontWeight:'200',
        marginTop: 10,
        marginBottom: 3
    },
    detailText2: {
        fontWeight:'100', 
        color:'#808080',
        marginBottom: 3
    },
    imageBox: {
        height: 15,
        width: 15,
        marginTop: 20,

    },
    detailBox: {
        flexDirection: "column",
        backgroundColor: '#fafafa',
        width: 265,
        marginLeft: 10
    },
    
})

export default ListDetail