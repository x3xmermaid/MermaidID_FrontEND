import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Item, Input, Icon, Right } from 'native-base'

class AppHeader extends Component {
    render() {
        return(
            <Header style={styles.header}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Item style={{flex: 7}}>
                        <Input regular placeholder='Cari Produk atau TOko' />
                    </Item>
                    <Right style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Icon color='gray' type='Entypo' name='heart'/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon color='gray' type='Entypo' name='mail'/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon  color='gray' type="FontAwesome" name='bell'/>
                        </TouchableOpacity>
                    </Right>
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
