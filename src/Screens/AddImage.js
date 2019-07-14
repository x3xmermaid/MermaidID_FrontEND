import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AddProductheader from '../Components/Header/AddProductHeader';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
            productName: '',
            categoryName: ''
        };
    }
    componentDidMount(){
        const {navigation} = this.props;
        const product = navigation.getParam('name', 'null')
        const category = navigation.getParam('category', 'null')
        this.setState({
            productName: product,
            categoryName: category
        })
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
            // console.log('Response = ', response);
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
            <View style={{flex:1, flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center'}}>
                <AddProductheader
                    backPress={()=>this.props.navigation.goBack()}
                    rightPress={()=>this.props.navigation.navigate('EditImage')}
                    screenLocation='addImage'
                />
                <View style={{flex:1, flexDirection: 'column', backgroundColor: '#fff', alignItems: 'center', marginTop: '20%'}}>
                    <Image
                        source={{ uri: this.state.filePath.uri }}
                        style={{ width: 250, height: 250 }}
                    />
                    <Text style={{ alignItems: 'center' }}>File Path</Text>
                    <Text style={{ alignItems: 'center' }}>
                        {this.state.filePath.uri}
                    </Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.chooseFile.bind(this)}>
                        <Text style={{color: 'white'}}>Choose File</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.launchCamera.bind(this)}>
                        <Text style={{color: 'white'}}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.launchLibrary.bind(this)}>
                        <Text style={{color: 'white'}}>Local Storage</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#42b549',
            padding: 10,
            borderRadius: 7,
            width: 300,
            marginTop:16
        },
    }
);