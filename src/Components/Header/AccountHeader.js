import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class AccountHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:7, flexDirection: 'column', alignItems: "center"}}>
                        <View>
                            <Text style={styles.account}>Akun Saya</Text>
                        </View>
                        <View style={{flexDirection: 'row', padding:20, right: 55, top: 12}}>
                            <View style={{right: 20}}>
                                <TouchableOpacity>
                                    <Text>Beli</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{left:13}}>
                                <TouchableOpacity>
                                    <Text>Jual</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                    <View style={styles.iconList}>
                        <View style={{flex:1.5}}>
                            <TouchableOpacity>
                                <Icon size={22} color='#9fa6b0' type='octicon' name='gear'/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1.5}}>
                            <TouchableOpacity>
                                <Icon size={22} color='#9fa6b0' type="font-awesome" name='bell'/>
                            </TouchableOpacity>
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
        width: 360,
        height: 94,
        backgroundColor: '#ffffff',
        zIndex: 5,
        shadowColor: "#000",
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
    },
    account : {
        right: 50,
        top: 13,
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconList: {
        flex:3,
        justifyContent: 'space-around',
        flexDirection:"row",
        padding: 10,
        bottom: 17
    }
})

export default AccountHeader;
