import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Header, Item, Input, Icon, Right,Body, Left, View } from 'native-base'

class AppHeader extends Component {
    render() {
        return(
            <Header span style={styles.header}>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection: 'column', flex: 7}}>
                        <Item style={{flex: 4, top:1}}>
                            <Input size={30} placeholder='Cari Produk atau TOko' />
                        </Item>
                        <View style={{flex: 3, flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Text>My Feed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Explore</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Icon color='gray' type='Entypo' name='heart'/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon color='gray' type='Entypo' name='mail'/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon color='gray' type="FontAwesome" name='bell'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
})

export default AppHeader
