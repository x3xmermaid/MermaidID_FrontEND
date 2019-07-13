import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import LoginHeader from '../Components/Header/LoginHeader';
import {connect} from 'react-redux'
import {postLogin, postLoginLogin} from '../Public/redux/action/login'
// import console = require('console');

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    _login = () => {
        // console.log(hihay)
        this.props.dispatch(postLoginLogin(this.state.email))
        this.props.navigation.navigate('VerificationPage')
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        // console.log(this.state.text)
        return (
            <View style={styles.mainScreen}>
                <LoginHeader
                    backPress={()=>goBack()}
                    screenLocation='login'
                    rightPress={()=>navigate('Register')}
                />
                <View style={styles.component}>
                    <View>
                        <Text style={{fontSize: 13, color:'gray'}}>Nomor Ponsel atau Email</Text>
                    </View>
                    <View style={styles.input}/>
                    <View>
                        <TextInput 
                            allowFontScaling
                            maxLength={40}
                            selectionColor='#42b549'
                            style={{width: winWidth*0.85}}
                            onChangeText={(text) => this.setState({email:text})}
                            value={this.state.text}
                        />
                    </View>
                    <View style={{marginTop: 30}}>
                        <TouchableOpacity onPress={() => this._login()} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={{fontSize: 20, color: 'white', top: 8}}>Selanjutnya</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 30, justifyContent: 'space-around'}}>
                        <View style={styles.line}/>
                        <Text color='#F6F6F6'>atau masuk dengan</Text>
                        <View style={styles.line}/>
                    </View>
                    <View style={{marginTop: '10%',alignContent: 'space-around'}}>
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
                        <View style={{paddingTop: 20}}>
                            <TouchableOpacity style={styles.button}>
                                <Image style={styles.image} source={require('../Assets/img/yahoo.png')} />
                                <Text style={{width: '35%'}} />
                                <Text style={styles.font}>Yahoo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingTop: 20, marginLeft: '15%'}}>
                            <Text>Belum punya akun Tokopedia? <Text onPress={()=>navigate('Register')} style={{color: '#42b549'}}>Daftar</Text></Text>
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
        input : {
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
            color: 'black',
            alignSelf: 'center'
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

export default connect(mapStateToProps)(Login);