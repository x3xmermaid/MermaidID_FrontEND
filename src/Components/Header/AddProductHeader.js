import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation} from 'react-navigation'

class AddProductHeader extends Component {
    state= {
        productName: '',
        productCategory: '',
        productimg: '',
    }

    render() {
        const { screenLocation, backPress, rightPress } = this.props;
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:5, alignContent: 'flex-start', flexDirection:'row'}}>
                        <View style={{ flex: 1, margin: 1 }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack() }>
                                <Icon size={25} type='antdesign' name='arrowleft' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 6 }}>
                            {
                                screenLocation == 'addProduct' ? (
                                    <Text style={{fontSize: 18, color: 'black'}}></Text>
                                ) : (
                                screenLocation == 'addImage' ? (
                                    <Text style={{fontSize: 18, color: 'black'}}>Pilih Gambar</Text>
                                ) : (
                                screenLocation == 'editImage' ? (
                                    <Text style={{fontSize: 18, color: 'black'}}>Edit Gambar</Text>
                                ) : (
                                    <Text style={{fontSize: 18, color: 'black'}}>Tambah Product</Text>
                                )))
                            }
                        </View>
                    </View>
                    <View style={{flex:2, flexDirection:'row'}}>
                        <View style={{marginLeft:10}}>
                                {
                                    screenLocation == 'addProduct' ? (
                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddImage')}>
                                            <Text style={{color:'#737373'}}>Selanjutnya</Text>
                                        </TouchableOpacity>
                                    ) : (
                                    screenLocation == 'addImage' ? (
                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditImage')}>
                                            <Text style={{color:'#737373'}}>Selanjutnya</Text>
                                        </TouchableOpacity>
                                    ) : (
                                    screenLocation == 'editImage' ? (
                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddProductDetail')}>
                                            <Text style={{color:'#33cc33'}}>Selanjutnya</Text>
                                        </TouchableOpacity>
                                    ) : (
                                    screenLocation == 'addProductDetail' ? (
                                        <TouchableOpacity>
                                            <Text style={{color:'#737373'}}></Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity>
                                            <Text style={{color:'#737373'}}>Eror Navigation</Text>
                                        </TouchableOpacity>
                                    )
                                    )))
                                }
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
        position: "absolute",
        width: '100%',
        height: 52,
        backgroundColor: '#ffffff',
        zIndex: 5,
        elevation: 2,
        borderBottomColor: '#a6a6a6',
        shadowColor: "#a6a6a6",
        shadowOffset: {
            width: 0, height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27
    },
    headerComponent: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
    }
})

export default withNavigation(AddProductHeader);
