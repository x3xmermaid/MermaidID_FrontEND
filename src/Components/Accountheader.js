import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Title, Left, Body, Right, Icon } from 'native-base';

class AccountHeader extends Component {
    render() {
        return (
            <Header span style={styles.header}>
                <Left>
                    <Title>Akun Saya</Title>
                </Left>
                <Body>
                    <TouchableOpacity>
                        <Title>Beli</Title>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Title>Jual</Title>
                    </TouchableOpacity>
                </Body>
                <Right>
                    <TouchableOpacity>
                        <Icon color='gray' type='FontAwesome' name='gear'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon color='gray' type='FontAwesome' name='bell'/>
                    </TouchableOpacity>
                </Right>
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

export default AccountHeader;
