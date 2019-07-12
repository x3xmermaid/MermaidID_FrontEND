import React, { Component } from 'react';
import{ View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import {Avatar} from 'react-native-elements'
import AddProductHeader from '../../src/Components/Header/AddProductHeader';

class AddProductDetail extends Component {
    state ={
        productName: 'IKI',
        productPrice: '',
        productDescription: '',
        productStock: '',
        text: ''
    }

    _Combine=() => {
        const {productName, productPrice, productDescription, productStock} = this.state
        if( productName !== '' && productPrice !== '' && productDescription !== '' && productStock !== '') {
            let data = {
                'productName': productName,
                'productPrice': productPrice,
                'productDescription': productDescription,
                'productStock': productStock
            }
            this.props.dispatch(addProduct(data));
            this.props.navigation.navigate('Home');
            this.setState({productName: '', productDescription:'', productPrice:'', productStock:''})
        } else {
            Alert.alert("Input cannot empty")
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <AddProductHeader
                    backPress={()=>this.props.navigation.goBack()}
                    screenLocation='addProductDetail'
                />
                <View style={{flex:1, position: 'absolute', width: '90%', margin:20}}>
                    <View style={{flex:1, marginTop: '17%', margin: 5}}>
                        <Text style={{fontSize: 20, fontWeight:'600', color:'#595959'}}>Apa yang Anda jual?</Text>
                    </View>
                    <View style={{flex:1}}>
                    <Avatar
                    size="large"
                    title="LW"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />
                    <Text>Nama Produk</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productName: text})}}
                        />
                    </View>
                    <View style={{flex:1}}>
                    <Text>Harga Produk</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productPrice: text})}}
                        />
                    </View><View style={{flex:1}}>
                    <Text>Deskripsi Produk</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productDescription: text})}}
                        />
                    </View>
                    <View style={{flex:1}}>
                    <Text>Stok</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productStock: text})}}
                        />
                    </View>
                    <View style={{top:28}}>
                        <TouchableOpacity onPress={()=>navigate('Verification')} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={{fontSize: 20, color: 'white', top: 8}}>Simpan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default AddProductDetail;
