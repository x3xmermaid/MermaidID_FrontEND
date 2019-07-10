import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, Dimensions, ImageBackground} from 'react-native'

class imageDetail extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={[style.detailImage]}>
                <View>
                    <ImageBackground source={this.props.imageDetail.image} style={style.imageBox}/>
                </View>
                <Text style={style.detailText2}>{this.props.imageDetail.text}</Text>
            </View>
        )
    }
}

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width
const style = StyleSheet.create({
    detailImage: {
        alignItems: "center",
        height: 102,
        width:82
    },
    detailText2: {
        fontWeight:'100', 
        color:'#808080',
        marginBottom: 3,
        width:82,
        textAlign: 'center'
    },
    imageBox: {
        height: 40,
        width: 40,
        marginTop: 20,
        marginBottom: 15
    },
    
})

export default imageDetail