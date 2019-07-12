import React, { Component } from 'react';
import{ View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import AccountHeader from '../../Components/Header/AccountHeader';

class AddStorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
            productName: 'IKI',
            productPrice: '',
            productDescription: '',
            productStock: '',
            text: ''
        };
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <AccountHeader 
                    sellPress={()=>navigate('shop')}
                />
                <View>
                    <View>
                        <Image source={{ uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/4fdafee4.png' }} />
                    </View>
                    <View>
                        <Text>Mulai dengan tokopedia</Text>
                        <Text>Punya toko sendiri tak cuma mimpi!</Text>
                        <Text>Tokopedia dukung wujudkan mimpimu</Text>
                        <Text>Dengan 3 keunggulan ini</Text>
                    </View>
                    <View>
                        <Icon type='ionicon' name='md-checkmark-circle' color='green'/>
                        <Text>Buka Toko gratis tanpa syarat</Text>
                        <Icon type='ionicon' name='md-checkmark-circle' color='green'/>
                        <Text>Jangkauan luas dan kurir lengkap</Text>
                        <Icon type='ionicon' name='md-checkmark-circle' color='green'/>
                        <Text>Fitur eksklusif untuk bisnismu</Text>
                    </View>
                    <View style={{marginTop: 30}}>
                        <TouchableOpacity onPress={()=>navigate('AddStoreDetail')} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={{fontSize: 20, color: 'white', top: 8}}>Buka Toko Gratis</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{color: 'green'}}>Pelajari Selengkapnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>                
            </View>
        )
    }
}

export default AddStorePage;
