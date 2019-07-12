import React, { Component } from 'react';
import{ View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import BasicHeader from '../../Components/Header/BasicHeader';

class RegisterAddProfile extends Component {
    state ={
        userName:'',
        Gender: '',
        userBorn:''
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <BasicHeader />
                <View style={{flex:1, position: 'absolute', width: '90%', margin:20}}>
                    <View style={{flex:1, marginTop: '17%', margin: 5}}>
                        <Text style={{fontSize: 20, fontWeight:'600', color:'#595959'}}>Apa yang Anda jual?</Text>
                    </View>
                    <View style={{flex:1}}>
                    <Text>Nama Produk</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productName: text})}}
                        />
                    </View>
                    <View style={{flex:1}}>
                    <Text>Nama Produk</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productName: text})}}
                        />
                    </View>
                    <View style={{flex:1}}>
                    <Text>Nama Produk</Text>
                        <TextInput 
                            maxLength={70} 
                            selectionColor='#42b549' 
                            style={{width:'95%',borderBottomColor:'#42b549', borderBottomWidth:2}}
                            onChangeText={(text) => {this.setState({productName: text})}}
                        />
                    </View>
                    <View style={{top:28}}>
                        <TouchableOpacity onPress={()=>navigate('Verification')} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={{fontSize: 20, color: 'white', margginTop:10}}>Simpan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default RegisterAddProfile;
