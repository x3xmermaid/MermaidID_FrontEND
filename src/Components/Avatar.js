import React, { Component } from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

class AvatarProduct extends Component {
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
            // console.log('Response = ', response);
            if (response.didCancel) {
                // console.log('User cancelled image picker');
                alert('User cancelled image picker');
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
                alert('ImagePicker Error: ' + response.error);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
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
            <View style={{flex:1}}>
                <Avatar
                    size="large"
                    title="Ubah"
                    source={{ uri: this.state.filePath.uri }}
                    onPress={this.chooseFile.bind(this)}
                    activeOpacity={0.7}
                    showEditButton
                />
            </View>
        )
    }
}

export default AvatarProduct;
