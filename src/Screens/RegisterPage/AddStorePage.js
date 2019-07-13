import React, { Component } from 'react';
import{ View, Text,Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import AccountHeader from '../../Components/Header/AccountHeader';

class AddStorePage extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <AccountHeader 
                    sellPress={()=>this.props.navigation.navigate('shop')}
                />
                <ScrollView style={styles.scroolView}>
                    <View style={styles.flex1and2}>
                        <Image style={{width:207, height:137}} source={{ uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/4fdafee4.png' }} />
                    </View>
                    <View style={styles.flex1and2}>
                        <Text style={{fontWeight:'bold', color: '#808080', fontSize: 20}}>Mulai dengan tokopedia</Text>
                        <Text>Punya toko sendiri tak cuma mimpi!</Text>
                        <Text>Tokopedia dukung wujudkan mimpimu</Text>
                        <Text>Dengan 3 keunggulan ini</Text>
                    </View>
                    <View style={{flex:1}}>
                        <View style={styles.fontmid}>
                            <Icon type='ionicon' name='md-checkmark-circle' color='green'/>
                            <Text>Buka Toko gratis tanpa syarat</Text>
                        </View>
                        <View style={styles.fontmid}>
                            <Icon type='ionicon' name='md-checkmark-circle' color='green'/>
                            <Text>Jangkauan luas dan kurir lengkap</Text>
                        </View>
                        <View style={styles.fontmid}>
                            <Icon type='ionicon' name='md-checkmark-circle' color='green'/>
                            <Text>Fitur eksklusif untuk bisnismu</Text>
                        </View>
                    </View>
                    <View style={{flex:1,marginTop: 20}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddStoreDetail')} style={{alignItems:'center' , borderColor:'Green', borderStyle:"solid", backgroundColor: '#42b549', borderRadius: 5, height: 50}}>
                            <Text style={{fontSize: 20, color: 'white', top: 8}}>Buka Toko Gratis</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity>
                            <Text style={{color: 'green'}}>Pelajari Selengkapnya</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>                
            </View>
        )
    }
}


const styles = StyleSheet.create(
    {
        flex1and2: {
            flex:1,
            alignItems: 'center'
        },
        scroolView: {
            flex:1,
            marginTop: '30%',
            marginLeft: 20,
            width: '90%'
        },
        fontmid: {
            flex:1,
            alignItems: 'center'
        }

    }
)
export default AddStorePage;
