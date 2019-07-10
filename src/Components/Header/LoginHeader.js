import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class LoginHeader extends Component {
    render() {
        // const {screenLocation} = this.props;
        const screenLocation = 'login';
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:9, alignContent: 'flex-start', flexDirection:'row'}}>
                        <View style={{ flex: 1, left: 2, top: 1 }}>
                            <TouchableOpacity>
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
                        <View style={{left:10}}>
                            <TouchableOpacity>
                                {
                                    screenLocation === 'login' ? (
                                        <Text>Daftar</Text>
                                    ) : (
                                        <Text>Masuk</Text>
                                    )
                                }
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
        height: 52,
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
    }
})

export default LoginHeader;
