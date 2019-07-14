import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, StyleSheet, Alert } from 'react-native';
import LoginHeader from '../Components/Header/LoginHeader';
import {connect} from 'react-redux'
import {postLogin} from '../Public/redux/action/login'

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Text: {},
        };
    }
    _login = () => {
        const emailVer = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        if(this.state.email !=='') {
            if(this.state.email.length > 5) {
                if(emailVer.test(this.state.email)) {
                    this.props.dispatch(postLogin(this.state.email))
                    this.props.navigation.navigate('VerificationPage')
                } else {
                    Alert.alert(`Wrong email format`)
                }
            } else {
                Alert.alert(`Email must more than 5 character`)
            }
        } else {
            Alert.alert(`Email can't Empty`)
        }
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
                        <TextInput allowFontScaling maxLength={40} 
                        selectionColor='#42b549' 
                        placeholder='Input Email'
                        onChangeText={(text) => this.setState({email:text})}
                        style={{width: winWidth*0.85}}/>
                    </View>
                    <View style={{top:28}}>
                        <TouchableOpacity onPress={()=>this._login()} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={styles.registerButton}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 40 , justifyContent: 'flex-start'}}>
                        <Text color='#F6F6F6'>atau daftar dengan :</Text>
                    </View>
                    <View style={{marginTop:30, alignContent: 'space-around'}}>
                        <View style={{}}>
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.image} source={require('../Assets/img/google.png')} />
                                <Text style={{width: '35%'}} />                                
                                <Text style={styles.font}>Google</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 20}}>
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.image} source={require('../Assets/img/facebook-512.png')} />
                                <Text style={{width: '32%'}} />                                
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
            borderWidth:1,
            flexDirection: 'row'
        },
        line : {
            borderTopWidth:1,
            borderTopColor:'gray',
            width: '27%',
            top: 8
        },
        font: {
            fontSize: 15,
            color: 'black'
        },
        registerButton: {
            fontSize: 18,
            color: 'white',
            top: '30%'
        },
        image: {
            width: 20,
            height: 20
        }
    }
)


const mapStateToProps = ( state ) => {
    return {
        product:state.product,
        cart: state.cart,
        login: state.login
    }
}

export default connect(mapStateToProps)(Register);