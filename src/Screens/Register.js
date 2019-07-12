import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import LoginHeader from '../Components/Header/LoginHeader';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Text: {},
        };
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.mainScreen}>
                <LoginHeader
                    backPress={()=>goBack()}
                    screenLocation='register'
                    rightPress={()=>navigate('Login')}
                />
                <View style={styles.component}>
                    <View>
                        <Text style={{fontSize: 13, color:'gray'}}>Nomor Ponsel atau Email</Text>
                    </View>
                    <View style={styles.inputLine}/>
                    <View>
                        <TextInput allowFontScaling maxLength={40} selectionColor='#42b549' style={{width: winWidth*0.85}}/>
                    </View>
                    <View style={{top:28}}>
                        <TouchableOpacity onPress={()=>navigate('Verification')} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={styles.registerButton}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 40 , justifyContent: 'flex-start'}}>
                        <Text color='#F6F6F6'>atau daftar dengan :</Text>
                    </View>
                    <View style={{marginTop:30, alignContent: 'space-around'}}>
                        <View style={{}}>
                            <TouchableOpacity style={styles.button}>
                                <Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/e03783d5.png'}} />
                                <Text style={styles.font}>Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 20}}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.font}>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 20, marginLeft: '15%'}}>
                            <Text>Sudah punya akun Tokopedia? <Text onPress={()=>navigate('Login')} style={{color: '#42b549'}}>Masuk</Text></Text>
                        </View>
                    </View>
                </View>
             </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        mainScreen: {
            flex:1,
            backgroundColor:'#FFF',
            alignItems:'flex-start',
            flexDirection:'column'
        },
        component: {
            flex:1,
            marginLeft: winWidth*0.07,
            justifyContent: 'center',
            marginTop: winHeight*0.1,
            position: 'absolute'
        },
        inputLine : {
            borderBottomWidth:2,
            top:winHeight*0.07,
            borderBottomColor: '#42b549'
        },
        button : {
            alignItems:'center',
            borderColor:'gray',
            borderStyle:"solid",
            backgroundColor: 'white',
            borderRadius: 5,
            height: 50,
            borderWidth:1
        },
        line : {
            borderTopWidth:1,
            borderTopColor:'gray',
            width: '27%',
            top: 8
        },
        font: {
            fontSize: 15,
            color: 'black',
            top: '30%'
        },
        registerButton: {
            fontSize: 18,
            color: 'white',
            top: '30%'
        }
    }
)

export default Register;