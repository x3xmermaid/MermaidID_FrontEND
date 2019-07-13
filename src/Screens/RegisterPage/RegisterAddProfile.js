import React, { Component } from 'react';
import{ View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';
import { Input } from 'react-native-elements';
  
import BasicHeader from '../../Components/Header/BasicHeader';

class RegisterAddProfile extends Component {
    state ={
        userName:'',
        userGender: '',
        userEmail:'',
        userBorn: ''
    }

    addUser=(data) => {
        const { userName,userGender,userEmail,userBorn } = this.state
        if(userName !== '', userGender !== '', userEmail !=='', userBorn !=='') {
            let data ={
                userName: userName,
                userGender:userGender,
                userEmail:userEmail,
                userBorn:userBorn
            }
            this.props.dispatch(addUser(data))
            this.props.navigation.navigate('Profile')
            this.setState({userName: '', userGender:'', userEmail:'', userBorn: ''})
        } else {
            Alert.alert("Field Description or title cannot empty")
        }
        
    }

    componentDidMount=()=> {
        this.addUser()
    }

    render() {
        return (
            <View style={styles.main}>
                <BasicHeader
                    title='Daftar'
                />
                <ScrollView style={styles.container}> 
                    <View style={{alignItems: 'center', marginTop: 40}}>
                        <Image 
                            source={{ uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/4fdafee4.png' }}
                            style={{width: 207, height:137}}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text>Halo, User</Text>
                        <Text>Silahkan isi profil di bawah</Text>
                    </View>
                    <View>
                        <Input
                            containerStyle={styles.inputContainerStyle}
                            placeholder="Username"
                            label="username"
                            onChangeText={(text) => this.setState({userName: text})}
                        />
                        <Input
                            containerStyle={styles.inputContainerStyle}
                            placeholder="Pria/Wanita"
                            label='Kelamin'
                            onChangeText={(text) => this.setState({userGender: text})}
                        />
                        <Input
                            containerStyle={styles.inputContainerStyle}
                            placeholder="email"
                            label='E-mail'
                            onChangeText={(text) => this.setState({userEmail: text})}
                        />
                        <Input
                            containerStyle={styles.inputContainerStyle}
                            placeholder="DD/MM/YYYY"
                            label='Tanggal Lahir'
                            onChangeText={(text) => this.setState({userBorn: text})}
                        />                            
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')} style={styles.button}>
                            <Text style={styles.buttonFont}>Daftar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>                
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        main: {
            flex:1,
            backgroundColor:'#FFF',
            alignItems:'flex-start',
            flexDirection:'column'
        },
        container: {
            flex:1,
            margin: 15,
            marginTop: 20,
            width: '100%'
        },
        inputContainerStyle: {
            marginTop: 16,
            width: '90%',
        },
        button: { 
            alignSelf: 'center' ,
            borderStyle:"solid",
            backgroundColor: '#42b549',
            borderRadius: 5,
            height: 50,
            width: '80%',
            marginRight: 20
        },
        buttonFont: {
            fontSize: 17,
            color: 'white',
            marginTop: 10,
            alignSelf: 'center'
        }
    }
)

export default RegisterAddProfile;
