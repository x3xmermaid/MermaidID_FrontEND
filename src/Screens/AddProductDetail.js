import React, { Component } from 'react';
import{ View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import {Avatar} from 'react-native-elements'
import AddProductHeader from '../../src/Components/Header/AddProductHeader';
import ImagePicker from 'react-native-image-picker'

class AddProductDetail extends Component {
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

    chooseFile = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
                alert('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                alert('ImagePicker Error: ' + response.error);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };

    _Combine=() => {
        const {productName, productPrice, productDescription, productStock, filePath} = this.state
        if( productName !== '' && productPrice !== '' && productDescription !== '' && productStock !== '') {
            if(filePath.uri !== '') {
                let data = {
                    'productName': productName,
                    'productPrice': productPrice,
                    'productDescription': productDescription,
                    'productStock': productStock,
                    'productImg' : filePath.uri
                }
                this.props.dispatch(addProduct(data));
                this.props.navigation.navigate('Home');
                this.setState({productName: '', productDescription:'', productPrice:'', productStock:'', filePath: {}})
            } else {
                Alert.alert('Photo cannot empty')
            }
        } else {
            Alert.alert("Input cannot empty")
        }
    }

    componentDidMount= () => {
        this._Combine()
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <AddProductHeader
                    backPress={()=>this.props.navigation.goBack()}
                    screenLocation='addProductDetail'
                />
                <ScrollView style={{width: '90%', margin:20}}>
                <View style={{flex:1}}>
                    <View style={{flex:1, marginTop: '17%', margin: 5}}>
                        <Text style={{fontSize: 20, fontWeight:'600', color:'#595959'}}>Apa yang Anda jual?</Text>
                    </View>
                    <View style={{flex:1}}>
                    <Avatar
                        size="large"
                        source={{ uri: this.state.filePath.uri }}
                        onPress={this.chooseFile.bind(this)}
                        activeOpacity={0.7}
                    />
                    <Text style={{marginTop:20}}>Nama Produk</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productName: text})}}
                        >{inputProductName}</TextInput>
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
                    <View style={{flex:1}}>
                    <Text>Stok</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productStock: text})}}
                        />
                    </View>
                    <View style={{flex:1, marginTop:10}}>
                        <TouchableOpacity onPress={()=>this._Combine()} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={{fontSize: 20, color: 'white', top: 8}}>Simpan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                
            </View>
        )
    }
}

export default AddProductDetail;
