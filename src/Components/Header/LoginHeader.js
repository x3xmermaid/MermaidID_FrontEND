import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class LoginHeader extends Component {
    render() {
        const { screenLocation, backPress, rightPress } = this.props;
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:9, alignContent: 'flex-start', flexDirection:'row'}}>
                        <View style={{ flex: 1, margin: 1 }}>
                            <TouchableOpacity onPress={ backPress }>
                                <Icon size={25} type='antdesign' name='arrowleft' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 6 }}>
                            {
                                screenLocation === 'login' ? (
                                    <Text style={{fontSize: 18, color: 'black'}}>Masuk</Text>
                                ) : (
                                    <Text style={{fontSize: 18, color: 'black'}}>Daftar Sekarang di Tokopedia</Text>
                                )
                            }
                        </View>
                    </View>
                    <View style={{flex:2, flexDirection:'row'}}>
                        <View style={{marginLeft:10}}>
                                {
                                    screenLocation === 'login' ? (
                                        <TouchableOpacity onPress={rightPress}>
                                            <Text style={{color:'#42b549'}}>Daftar</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={rightPress}>
                                            <Text style={{color:'#42b549'}}>Masuk</Text>
                                        </TouchableOpacity>
                                    )
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
    }
})

export default LoginHeader;
