import React, { Component } from 'react';
import LoginHeader from '../Components/Header/LoginHeader';
import { Text } from 'react-native-elements';

class Login extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <LoginHeader />
                <ScrollView style={{backgroundColor:'#FFF'}}>
                    <View><Text>INput</Text></View>
                    <View><Text>button daftar</Text></View>
                    <View><Text>-----------------</Text></View>
                    <View><Text>atau daftar dengan</Text></View>
                    <View><Text>google</Text></View>
                    <View><Text>facebook</Text></View>
                    <View><Text>sudah punya akun tokopedia? link masuk</Text></View>
                </ScrollView>
             </View> 
        )
    }
}

export default Login;
