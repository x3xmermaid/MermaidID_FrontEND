import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import LoginHeader from '../Components/Header/LoginHeader';

class Login extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <LoginHeader />
                <View style={{flex:1, margin:20, top: 62, left: 5}}>
                    <View>
                        <Text style={{fontSize: 13, color:'gray', top: 16}}>Nomor Ponsel atau Email</Text>
                    </View>
                    <View style={{borderBottomWidth:2, borderBottomColor:'#51AD15', top:40 }}/>
                    <View>
                        <TextInput allowFontScaling selectionColor='#51AD15' style={{width:310}}/>
                    </View>
                    <View style={{top:28}}>
                        <TouchableOpacity style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#51AD15', borderRadius: 5, height: 50}}>
                            <Text style={{fontSize: 20, color: 'white', top: 8}}>Selanjutnya</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', top: 50, justifyContent: 'space-around'}}>
                        <View style={{borderTopWidth:1, borderTopColor:'gray', width: 70, top: 8}}/>
                        <Text color='#F6F6F6'>atau masuk dengan</Text>
                        <View style={{borderTopWidth:1, borderTopColor:'gray', width: 70, top: 8}}/>
                    </View>
                    <View style={{top:77, alignContent: 'space-around'}}>
                        <View style={{}}>
                            <TouchableOpacity style={{alignItems:'center' , borderColor:'gray', borderStyle:"solid", backgroundColor: 'white', borderRadius: 5, height: 50, borderWidth:1}}>
                                <Text style={{fontSize: 15, color: 'black', top: 8}}>Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 20}}>
                            <TouchableOpacity style={{alignItems:'center' , borderColor:'gray', borderStyle:"solid", backgroundColor: 'white', borderRadius: 5, height: 50, borderWidth:1}}>
                                <Text style={{fontSize: 15, color: 'black', top: 8}}>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 20}}>
                            <TouchableOpacity style={{alignItems:'center' , borderColor:'gray', borderStyle:"solid", backgroundColor: 'white', borderRadius: 5, height: 50, borderWidth:1}}>
                                <Text style={{fontSize: 15, color: 'black', top: 8}}>Yahoo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 10}}>
                            <Text>Belum punya akun Tokopedia? <Text style={{color: 'green'}}>Daftar</Text></Text>
                        </View>
                    </View>
                </View>
             </View>
        );
    }
}

export default Login;