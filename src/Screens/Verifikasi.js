import React, { Component } from 'react';
import LoginHeader from '../Components/Header/LoginHeader';
import { Text } from 'react-native-elements';
import VerificationHeader from '../Components/Header/VerificationHeader'

class Login extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <VerificationHeader />
                <View>
                    <View><Text>Pilih metode verifikasi</Text></View>
                </View>
                <View>
                    <View>
                        <Text>wa</Text>
                    </View>
                    <View>
                        <Text>melalui sms</Text>
                    </View>
                    <View>
                        <Text>panggilan telepon</Text>
                    </View>                    
                </View>
             </View> 
        )
    }
}

export default Login;
