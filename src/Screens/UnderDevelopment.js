import React,{Component} from 'react';
import {View,Text,Image} from 'react-native'

export default class UnderDevelopment extends Component {

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#FFF2'}}>
                <Image
                source={{uri:'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/40648163_10156811560679612_8094125186552430592_n.png?_nc_cat=103&_nc_oc=AQk3HTUzmL5eImDJOz4uzS3tw0nWUce4whKPk4WO4FiHUOXeT2Dsde-tlUyilA5TheE&_nc_ht=scontent-sin6-2.xx&oh=ac32e376b4f884bee6b4306d27348982&oe=5DB9EF8E'}}
                style={{flex:1,marginRight:60,marginLeft:60,marginTop:20,marginBottom:200,resizeMode:'contain'}}
                />
                <Text
                style={{position:'absolute',top:400,fontSize:20,fontWeight:'bold',alignSelf:'center'}}
                >This Page Are Under Development </Text>
            </View>
        )
    }
}