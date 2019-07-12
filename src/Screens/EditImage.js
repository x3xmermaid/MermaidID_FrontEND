import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AddProductheader from '../Components/Header/AddProductHeader';

export default class EditImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
        };
    }

    chooseFile = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
                alert('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                alert('ImagePicker Error: ' + response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };

    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
    
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
                alert('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                alert('ImagePicker Error: ' + response.error);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };

    launchLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }  ;
        
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
                alert('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
                alert('ImagePicker Error: ' + response.error);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <AddProductheader 
                    screenLocation='editImage'
                />
                <View style={styles.container2}>
                    <Text style={{ size:40, fontWeight:'bold', marginTop: '50%' }}>THIS FEATURE IS UNDER  DEVELOPMENT</Text>
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