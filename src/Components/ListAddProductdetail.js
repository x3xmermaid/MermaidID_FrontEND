import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

class ListAddProductDetail extends Component {
    render() {
        return(
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity>
                    <View style={{flex:1, flexDirection: 'column'}}>
                        <Text>Nama Product</Text>
                        <Text>Detail</Text>
                    </View>
                    <View>
                        <Text>NamaProduct</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListAddProductDetail;
