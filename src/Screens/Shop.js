import React, { Component } from 'react';
import { Text, View , StyleSheet, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import ListDetail from '../Component/Account/listDetail';
import DetailImage from '../Component/Account/imageDetail';
import Accountheader from '../Components/Header/AccountHeader';
import {connect} from 'react-redux'
import { fetchStore } from '../Public/redux/action/store';
// import console = require('console');

class Shop extends Component {
    constructor(props){
        super(props);
    }
    getStore = () => {
        this.props.dispatch(fetchStore())
    }

    componentDidMount() {
        this.getStore()
    }
    render() {
        console.log(this.props.store.store.store_name)
        let storeName = this.props.store.store.store_name
        let storeIMG = this.props.store.store.img_store
        return(
            <View>
                <Accountheader 
                    buyPress={()=>navigate('Profile')}
                />
                <View style={style.parentView}>
                    <ScrollView  showsVerticalScrollIndicator={false}>
                        <View style={style.cardBox}>
                    <View style={style.detailBox}>
                        <ImageBackground source={{uri : storeIMG}} style={style.imageBox}/>
                        <View style={style.textBox}>
                            <Text style={style.boldText}>{storeName}</Text>
                            <ImageBackground source={require('../Assets/img/badges-off.jpg')} style={[style.imageBox, {height: 20, width: 15, marginBottom: 40}]}/>
                        </View>
                    </View>        
                </View>
                <View style={[style.cardBox, {marginTop:-0}]}>
                    <View style={[style.detailBox, {justifyContent:"space-between", alignItems:"center"}]}>
                        <View style={{flexDirection:'row', alignItems:"center"}}>
                            <ImageBackground source={require('../Assets/img/money.png')} style={[style.imageBox, {height: 30, width: 30, marginTop:10}]}/>
                            <Text style={[style.detailText, {marginLeft:5}]}>{"Saldo"}</Text>
                        </View>
                        <Text style={style.boldText}>{"Rp. 0"}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "column", paddingLeft:10, paddingRight: 30, marginTop:30, height:150}}>
                    <View style={[style.detailBox, {justifyContent:"space-between"}]}>
                        <Text style={style.boldText}>{"Penjualan"}</Text>
                        <Text>{"Lihat Riwayat"}</Text>
                    </View>
                    <View style={[style.detailBox, {justifyContent:"space-around"}]}>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/box.png'),
                            text: "Pesanan Baru",
                        }}></DetailImage>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/box-hand.png'),
                            text: "Siap Dikirim",
                        }}></DetailImage>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/truck.png'),
                            text: "Sedang Dikirim",
                        }}></DetailImage>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/house.png'),
                            text: "Sampai Tujuan",
                        }}></DetailImage>
                    </View>
                </View>
                    <View style={style.line}/>
                        <ListDetail textData={{
                            Text2: "Kompain Sebagai Penjual",
                            Text3: "Lihat status komplain di sini"
                        }}/>
                    <View style={style.line}/>
                        <Text style={[style.boldText, { marginLeft:10}]}>
                        {"Produk"}</Text>
                    <TouchableOpacity>
                        <View style={[style.cardBox, {borderRadius:10, elevation:1, backgroundColor:'#fafafa'}]}>
                                <Text style={{textAlign:'center', color:'#d1cfcf', fontWeight:'bold'}}>{"+ Tambah Produk"}</Text>
                        </View>
                    </TouchableOpacity>
                        <ListDetail textData={{
                            Text2: "Pengaturan Produk",
                            Text3: "Selesaikan kelengkapan detai produk",
                            image: 1
                        }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "Draft Produk",
                        Text3: "Selesaikan kelengkapan detail produk",
                        image: 1
                    }}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text1: "Fitur Lainnya",
                        Text2: "Peluang Pesanan",
                        Text3: "Pesanan yang dibatalkan penjual lain",
                        image: 1
                    }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "TopAds",
                        Text3: "Lihat dan atur promo Anda",
                        image: 1
                    }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "Seller Center",
                        Text3: "Edukasi",
                        image: 1
                    }}/>
                <View style={style.line}/>
            </ScrollView>
            </View>
            {/* <Text style={style.boldText}>{data}</Text> */}
            </View>
            
        )
    }
}

// export default Shop
let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width
const style = StyleSheet.create({
    parentView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '30%'
        // padding: 10,
    },
    cardBox: {
        width: widthWindow-30,
        // height: 150,
        flexDirection: "column",
        backgroundColor: 'white',
        padding: 20,
        margin: 15,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },
    imageBox: {
        height: 50,
        width: 50,
        borderRadius: 100,
        overflow: 'hidden',
        // bac
    },
    detailBox: {
        flexDirection: "row",
    },
    textBox: {
        flexDirection: "column",
        marginLeft: 15
    },
    line: {
        width: widthWindow,
        borderColor: "grey",
        borderWidth: 0.1,
        marginLeft: 15,
        elevation: 2

    },
    listDetail: {
        width: widthWindow,
        // backgroundColor:'blue',
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15
    },
    boldText:{
        fontWeight:"bold", 
        fontSize:18
    },
    detailText: {
        color:'#636363', 
        fontWeight:'200',
        marginTop: 10
    }

})

const mapStateToProps = ( state ) => {
    return {
        store: state.store
    }
}

export default connect (mapStateToProps)(Shop);