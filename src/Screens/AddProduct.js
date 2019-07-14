import React, { Component } from 'react';
import{ View, Text, TextInput, ScrollView } from 'react-native';
import AddProductHeader from '../Components/Header/AddProductHeader';
import RadioButton from '../Components/RadioButton';

const options = [
    {
        key: 'pay',
        text: 'Hewan',
    },
    {
        key: 'performance',
        text: 'Mainan',
    },
    {
        key: 'aToZ',
        text: 'Pakaian',
    },
    {
        key: 'zToA',
        text: 'Z - A',
    },
];


class AddProduct extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            categoryName: '',
            text: '',
        }
    }


    // _getCategory= () => {
    //     this.props.dispatch(getCategory())
    // }

    // ComponentDidMount = () => {
    //     this._getCategory()
    // }

    render() {
        addproduct = this.state.productName
        addCategory = this.state.categoryName
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <AddProductHeader
                    backPress={()=>this.props.navigation.goBack()}
                    rightPress={()=>this.props.navigation.navigate('AddImage')}
                    screenLocation='addProduct'
                />
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
                    <Text style={{flex:1, flexDirection:"row-reverse"}}>1/70</Text>
                    </View>
                    <View style={{flex:1, marginTop: 10}}>
                        <Text style={{fontSize: 20, fontWeight:'600', color:'#595959'}}>Kategori Produk</Text>
                        <Text style={{fontSize: 15, fontWeight:'200'}}>Rekomendasi Kategori</Text>
                    </View>
                    <ScrollView style={{flex:1, marginTop: 20, alignSelf: 'center'}}>
                        <RadioButton options={options} />
                    </ScrollView> 
                    <View style={{flex:1}}></View>
                </View>
            </View>
        )
    }
}

export default AddProduct;
