import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import BasicHeader from '../Components/Header/BasicHeader';

export default class Notification extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BasicHeader 
                    title='Notification'
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