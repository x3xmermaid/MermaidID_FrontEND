import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AddProductheader from '../Components/Header/AddProductHeader';

export default class EditImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddProductheader
                    backPress={()=>this.props.navigation.goBack()}
                    rightPress={()=>this.props.navigation.navigate('AddProductDetail')}
                    screenLocation='editImage'
                />
                <View style={styles.container2}>
                    <Text style={{fontWeight:'bold', marginTop: '50%' }}>THIS FEATURE IS UNDER  DEVELOPMENT</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            flexDirection: 'column',
            backgroundColor: '#fff',
            alignItems: 'center'
        },
        container2: {
            flex:1,
            flexDirection: 'column',
            backgroundColor: '#fff',
            alignItems: 'center',
            marginTop: '20%'
        }
    }
);