import React, { Component } from 'react';
import{ View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import {Input, CheckBox} from 'react-native-elements';
import BasicHeader from '../../Components/Header/BasicHeader';
import {connect} from 'react-redux'
import {addStore} from '../../Public/redux/action/store'

class AddStoreDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeName:'',
            storeLocation: '',
            postalCode: '',
            checked: false
        };
    }

    _verif = () => {
        const { storeName, storeLocation, postalCode } = this.state;
        if (storeName !== '' && storeLocation !== '' && postalCode !== '') {
            let data = {
                'storName': storeName,
                'storeLocation':storeLocation,
                'postalCode':postalCode
            }
            this.props.dispatch(addStore(data, this.props.login.verify[0].id_user));
            this.props.navigation.navigate('HomeNote');
            this.setState({storeName:'', storeLocation:'',postalCode:''})
        } else {
            Alert.alert("Input Field cannot empty")
        }
    }

    // componentDidMount=() => {
    //     this._addStore()
    // }

    render() {
        return (
            <View style={styles.main}>
                <BasicHeader
                    title='Buka Toko'
                />
                <View style={styles.container}> 
                    <View style={{alignItems: 'center'}}>
                        <Image 
                            source={{ uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/4fdafee4.png' }}
                            style={{width: 100, height:100}}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text>Halo, User</Text>
                        <Text>isi detail tokomu</Text>
                    </View>
                    <View>
                        <Input
                            containerStyle={styles.inputContainerStyle}
                            placeholder="Nama Toko Wajib Diisi"
                            label="Nama Toko"
                            onChangeText={(text) => this.setState({StoreName: text})}
                        />
                        <Input
                            containerStyle={styles.inputContainerStyle}
                            placeholder="Kota atau Kecamatan"
                            onChangeText={(text) => this.setState({storeLocation: text})}
                        />
                        <Input
                            containerStyle={styles.inputContainerStyle}
                            placeholder="Kode Pos"
                            onChangeText={(text) => this.setState({postalCode: text})}
                        />
                        <CheckBox
                            title='Anda Telah Menyetujui Syarat & Ketentuan serta Kebijakan Privasi Tokopedia'
                            checkedIcon='check-square'
                            uncheckedIcon='square'
                            checked={this.state.checked}
                            onPress={() => this.setState({checked: !this.state.checked})}
                            style={{width: '80%', marginRight: 10}}
                        />                        
                    </View>
                    <View>
                    {
                        this.state.checked == true ? (
                            <TouchableOpacity  disabled={false} onPress={()=>this._addStore()} style={styles.button}>
                                <Text style={styles.buttonFont}>Buka Toko</Text>
                            </TouchableOpacity>
                        ):(
                            <TouchableOpacity  disabled={true} onPress={()=>this._verif()} style={styles.button}>
                                <Text style={styles.buttonFont}>Buka Toko</Text>
                            </TouchableOpacity>
                        )
                        }
                    </View>
                </View>                
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        main: {
            flex:1,
            backgroundColor:'#FFF',
            alignItems:'flex-start',
            flexDirection:'column'
        },
        container: {
            flex:1,
            margin: 15,
            justifyContent: 'center',
            marginTop: 20
        },
        inputContainerStyle: {
            marginTop: 16,
            width: '90%',
        },
        button: { 
            alignSelf: 'center' ,
            borderStyle:"solid",
            backgroundColor: '#42b549',
            borderRadius: 5,
            height: 50,
            width: '80%',
            marginRight: 20
        },
        buttonFont: {
            fontSize: 17,
            color: 'white',
            marginTop: 10,
            alignSelf: 'center'
        }
    }
)

const mapStateToProps = ( state ) => {
    return {
        product:state.product,
        cart: state.cart,
        login: state.login,
        store: state.store
    }
}

export default connect(mapStateToProps)(AddStoreDetail);
