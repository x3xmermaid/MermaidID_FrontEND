import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image, StyleSheet, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import VerificationHeader from '../Components/Header/VerificationHeader';
import {connect} from 'react-redux'
import {postVerify} from '../Public/redux/action/login'

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

class VerificationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    _Verif=()=> {
        const { text } = this.state;
        const numbers = /[0-9]/g;
        if(numbers.test(text) && text.length == 6) {
            this.props.dispatch(postVerify(this.props.login.user))
            this.props.navigation.navigate('Home')
              
        } else {
            Alert.alert(`input must be a number & must be 6 character`)
        }
    }

    render() {
        // console.log(this.props.login)
        return (
            <View style={styles.mainScreen}>
                <VerificationHeader />
                <View style={styles.component}>
                    <Image 
                        source={{ uri: 'http://www.andygagnonlandscapes.com/images/mail.png'}}
                        style={{ width: 100, height: 100, margin: 20 }}/>
                    <Text style={{fontWeight: 'bold', margin: 20 }}>Masukkan Kode Verifikasi</Text>
                    <Text>Kode verifikasi telah dikirimkan melalui Email</Text>
                    <Input
                        maxLength={6}
                        containerStyle={{ width: '90%' }}
                        placeholder="Masukkan kode Verifikasi"
                        labelStyle={{ marginTop: 16 }}
                        onChangeText={(text) => this.setState({text})}
                        style={{margin: 20 }}
                    />
                    <TouchableOpacity onPress={()=>this._Verif()} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50, margin:20, width: '80%'}}>
                        <Text style={{fontSize: 20, color: 'white', marginTop: 8}}>Selanjutnya</Text>
                    </TouchableOpacity>
                    <Text style={{color: 'green'}}>Kirim Ulang Kode</Text>
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
            marginLeft: winWidth*0.1,
            justifyContent: 'center',
            marginTop: winHeight*0.1,
            position: 'absolute',
            flexDirection: 'column',
            alignItems: 'center'
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

export default connect(mapStateToProps)(VerificationPage);