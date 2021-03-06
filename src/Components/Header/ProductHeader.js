import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class ProductHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <View style={styles.headerComponent}>
                    <View style={{flex:2}}>
                        <TouchableOpacity style={{alignItems:"flex-start", left:15}} onPress={()=>this.props.navigation.goBack()}>
                            <Icon type='antdesign' name='arrowleft' color='#9fa6b0'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <TouchableOpacity>
                                <Icon type='fontisto' name='share' color='#9fa6b0'/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity>
                                <Icon type='feather' name='shopping-cart' color='#9fa6b0'/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <TouchableOpacity>
                                <Icon type='entypo' name='dots-three-vertical' color='#9fa6b0'/>
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
        backgroundColor: 'transparent',
        zIndex: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0, height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27
    },
    headerComponent: {
        flex:2,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
    }
})

export default withNavigation(ProductHeader);
//export default ProductHeader;
