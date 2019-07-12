import React, { Component } from 'react';
import{ View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import BasicHeader from '../../Components/Header/BasicHeader';

class RegisterAddProfile extends Component {
    state ={
        userName:'',
        Gender: '',
        userBorn:''
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#FFF',alignItems:'flex-start',flexDirection:'column'}}>
                <BasicHeader />
                <View style={{flex:1, position: 'absolute', width: '90%', margin:20}}>
                <View
                    style={{
                        backgroundColor: 'rgba(46, 50, 72, 1)',
                        width: SCREEN_WIDTH,
                        alignItems: 'center',
                        paddingBottom: 30,
                    }}
                    >
                    <Text
                        style={{
                        color: 'white',
                        fontSize: 30,
                        marginVertical: 10,
                        fontWeight: '300',
                        }}
                    >
                        Sign up
                    </Text>
                    <Input
                        leftIcon={
                        <Icon
                            name="user"
                            type="simple-line-icon"
                            color="rgba(110, 120, 170, 1)"
                            size={25}
                        />
                        }
                        placeholder="Username"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        ref={input => (this.usernameInput = input)}
                        onSubmitEditing={() => {
                        this.email2Input.focus();
                        }}
                    />
                    <Input
                        leftIcon={
                        <Icon
                            name="email-outline"
                            type="material-community"
                            color="rgba(110, 120, 170, 1)"
                            size={25}
                        />
                        }
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        ref={input => (this.email2Input = input)}
                        onSubmitEditing={() => {
                        this.password2Input.focus();
                        }}
                    />
                    <Input
                        leftIcon={
                        <Icon
                            name="lock"
                            type="simple-line-icon"
                            color="rgba(110, 120, 170, 1)"
                            size={25}
                        />
                        }
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        ref={input => (this.password2Input = input)}
                        onSubmitEditing={() => {
                        this.confirmPassword2Input.focus();
                        }}
                    />
                    <Input
                        leftIcon={
                        <Icon
                            name="lock"
                            type="simple-line-icon"
                            color="rgba(110, 120, 170, 1)"
                            size={25}
                        />
                        }
                        placeholder="Confirm Password"
                        autoCapitalize="none"
                        keyboardAppearance="light"
                        secureTextEntry={true}
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="done"
                        ref={input => (this.confirmPassword2Input = input)}
                        blurOnSubmit
                    />
                    </View>
                </View>
            </View>
        )
    }
}

export default RegisterAddProfile;
