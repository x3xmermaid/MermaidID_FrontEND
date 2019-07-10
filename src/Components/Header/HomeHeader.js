import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class HomeHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:7}}>
                        <TextInput placeholder='search...' style={styles.searchBar}/>
                    </View> 
                    <View style={styles.iconList}>
                        <View style={{flex:1}}>
                            <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Wishlist')}>
                                <Icon size={25} color='#9fa6b0' type='entypo' name='heart'/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity>
                                <Icon size={25} color='#9fa6b0' type='entypo' name='mail'/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity>
                                <Icon size={25} color='#9fa6b0' type="font-awesome" name='bell'/>
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
        height: 53,
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
    searchBar : {
        borderRadius: 5,
        left: 15,
        width: 225,
        height: 36,
        backgroundColor: '#f6f6f6',
        fontSize: 15
    },
    iconList: {
        flex:3,
        justifyContent: 'space-around',
        flexDirection:"row",
        padding:10
    }
})

export default withNavigation(HomeHeader);
