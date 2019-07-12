import React, { Component } from 'react';
import { Text, View , StyleSheet, ImageBackground, ScrollView, Dimensions} from 'react-native';
import {connect} from 'react-redux'
import ListDetail from '../Component/Account/listDetail'
import DetailImage from '../Component/Account/imageDetail'
import AccountHeader from '../Components/Header/AccountHeader';
import { getUser } from '../Public/redux/reducers/product';

class Profile extends Component {

    getUser = () => {
        this.props.dispatch(getUser())
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        const {navigate} = this.props.navigation;
        return(
<View>
    <AccountHeader 
        sellPress={()=>navigate('shop')}
    />
<View style={style.parentView}>
                <ScrollView style={{marginTop:heightWindow*0.14}} showsVerticalScrollIndicator={false}>
                <View style={style.cardBox}>
                    <View style={[style.detailBox, {marginBottom:10}]}>
                        <ImageBackground source={require('../Assets/img/img.png')} style={style.imageBox}/>
                        <View style={style.textBox}>
                            <Text style={style.boldText}>{this.props.data.full_name}</Text>
                            <Text style={{fontStyle:"italic"}}>{"Verified Account"}</Text>
                        </View>
                    </View>        
                    <View style={[style.detailBox , {justifyContent:"space-between"}]}>
                        <View style={[style.detailBox, {alignItems:'center'}]}>
                            <ImageBackground source={require('../Assets/img/egg.png')} style={[style.imageBox, {height:24, width:24}]}/>
                            <View style={style.textBox}>
                                <Text style={{color: 'grey'}}>{"TokoPoints"}</Text>
                                <Text style={style.boldText}>{"250 pt"}</Text>
                            </View>
                        </View>
                        <View style={[style.detailBox, {alignItems:'center'}]}>
                            <ImageBackground source={require('../Assets/img/discon.png')} style={[style.imageBox, {height:24, width:24}]}/>
                            <View style={style.textBox}>
                                <Text style={{color:'grey'}}>{"Kupon Saya"}</Text>
                                <Text style={style.boldText}>{"0 Kupon"}</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={[style.cardBox, {marginTop:-0}]}>
                    <View style={[style.detailBox, {justifyContent:"space-between", marginBottom:10}]}>
                        <Text style={style.boldText}>{"Tokopedia Pay"}</Text>
                        <Text style={{color:'#42B549'}}>{"Lihat semua"}</Text>
                    </View>
                    <View style={[style.detailBox, {justifyContent:"space-around"}]}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <ImageBackground source={require('../Assets/img/ovo2.png')} style={style.imageBox}/>
                            <Text style={[style.boldText, {textAlign:'center'}]}>{"Rp 0"}</Text>
                            <Text style={{textAlign:'center'}}>{"Points 13.997"}</Text>
                        </View>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <ImageBackground source={require('../Assets/img/ovo.png')} style={style.imageBox}/>
                            <Text style={[style.boldText, {color:'#42B549', textAlign:'center'}]}>{"Rp 0"}</Text>
                            <Text style={{textAlign:'center'}}>{"Points 13.997"}</Text>
                        </View>
                    </View>
                </View>
                    <ListDetail textData={{
                        Text1: "Transaksi",
                        Text2: "Menunggu Pembayaran",
                        Text3: "Semua transaksi yang belum dibayar",
                        image: 1
                    }}/>
                    <View style={style.line}/>
                <View style={{flexDirection: "column", paddingLeft:10, paddingRight: 30, height:150}}>
                        <ListDetail textData={{
                            Text2: "Daftar Transaksi",
                        }}/>
                    <View style={[style.detailBox, {justifyContent:"space-around", marginTop:-40, paddingRight:40}]}>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/bag.png'),
                            text: "Belanja",
                        }}></DetailImage>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/paper.png'),
                            text: "Top Up & Tagihan",
                        }}></DetailImage>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/plane.png'),
                            text: "Pesawat",
                        }}></DetailImage>
                        <DetailImage imageDetail={{
                            image: require('../Assets/img/leaf.png'),
                            text: "Lihat Semua",
                        }}></DetailImage>
                    </View>
                </View>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "Ulasan",
                        Text3: "Berikan Penilaian dan ulas produk",
                    }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "Komplain Sebagai Pembeli",
                        Text3: "Lihat Status Komplain di sini",
                        image: 1
                    }}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text1: "Favorit Saya",
                        Text2: "Terakhir Dilihat",
                        Text3: "Cek produk terakhir yang dilihat",
                        image: 1
                    }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "Wishlist",
                        Text3: "lihat Produk yang sudah Anda wishlist",
                        image: 1
                    }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "toko Favorit",
                        Text3: "Lihat Toko yang sudah anda favoritkan",
                        image: 1
                    }}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text2: "MyBills",
                        Text3: "Atur & bayar taguhan dalam satu tempat",
                        image: 1
                    }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                    <ListDetail textData={{
                        Text1: "Bantuan",
                        Text2: "Pusat Bantuan",
                        Text3: "Lihat solusi terbaik atau hubungi kami",
                        image: 1
                    }}/>
                <View style={style.line}/>
                <View style={style.line}/>
                <View style={style.listDetail}>
                    <Text style={style.boldText} >{"Rekomendasi Untuk Anda"}</Text>
                </View>
                <View style={style.line}/>

            </ScrollView>
            </View>
</View>
        )
    }
}


let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width
const style = StyleSheet.create({
    parentView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
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
        product:state.product
    }
}

export default connect (mapStateToProps)(Profile);