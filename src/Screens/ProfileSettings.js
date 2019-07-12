import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Card,Input,Button} from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import DateFormat from 'dateformat';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import BasicHeader from '../Components/Header/BasicHeader';
import {connect} from 'react-redux';
import {postImage} from '../Public/redux/action/product';

const deviceWidth= Dimensions.get('window').width;

var radio_props = [
    {label: 'Male', value: 'Pria' },
    {label: 'Female', value: 'Wanita' }
  ];


class ProfileSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filePath: {},
          imageUri:'',
          isDateTimePickerVisible: false,
          dateFromPicker:'',
          hp:'081266212473',
          email:'alavanta.deva@gmail.com',
          isEdit:false
        };
      }
      //let formdata = new FormData();

      handleUploadPhoto = () => {
        let ip = 'https://mermaidid.herokuapp.com/manual/upload';
        console.log(this.state.filePath)
        fetch("https://mermaidid.herokuapp.com/manual/upload", {
          method: "POST",
          body: postImage(this.state.filePath )
        })
          .then(response => response.json())
          .then(response => {
            
            console.log("upload succes", response);
            alert("Upload success!");
            this.setState({ filePath: {},
            imageUri:response });
          })
          .catch(error => {
            console.log("upload error", error);
            alert("Upload failed!");
          });
      };

      chooseFile = () => {
        var options = {
          title: 'Select Image',
          
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
     
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
              filePath: source,
            });
          }
        });
      };
      
      
      showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
      handleDatePicked = date => {
          let FormattedDate=DateFormat(date,"dd/mm/yyyy");
        this.setState({
            dateFromPicker:FormattedDate
        })
        this.hideDateTimePicker();
      };
    
      render() {
          //console.warn(this.state.filePath)
        return (
          <View style={{flex:1}}>
             <BasicHeader
            headerTitle={'Profile Settings'}
            />
          
          <View style={styles.container}>
           
              <ScrollView style={{marginRight:20}} showsVerticalScrollIndicator={false}>
            <View style={{flex:1}}>
            <Card
            containerStyle={{width:deviceWidth,height:200,backgroundColor:'#FFF',justifyContent:'center'}}
            >
                <TouchableOpacity
                onPress={this.chooseFile.bind(this)}
                activeOpacity={1}>
                <Image
                source={{uri: Object.entries(this.state.filePath).length === 0 ? 'https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-18.jpg': this.state.filePath.uri}}
                //source={{uri: this.state.imageUri == '' ? 'https://ecs7.tokopedia.net/img/cache/300/default_picture_user/default_toped-18.jpg': this.state.imageUri}}
                //source={{uri: this.state.filePath.uri }}
                style={{width:deviceWidth-180,height:180,resizeMode:'stretch',marginRight:40,alignSelf:'center',marginTop:15,marginBottom:15}}
                />
                </TouchableOpacity>
            </Card>
            <View style={{flex:1,justifyContent:'center'}}>
            <Card
            title='CHANGE PROFILE'
            titleStyle={{alignSelf:'flex-start',marginTop:2,fontSize:16,fontWeight:'bold'}}
            dividerStyle={{width:deviceWidth-70}}
            containerStyle={{backgroundColor:'#FFF',justifyContent:'center',flex:1,flexDirection:'column'}}
            >
             <Text style={styles.titleText}>Name</Text>
             <Text style={styles.valueText}>Dhieo Deva Alavanta</Text>
             <Text style={styles.titleText}>Date Of Birth</Text>
             <TouchableOpacity
             activeOpacity={1}
             onPress={this.showDateTimePicker}
             >
             <Input
             containerStyle={{marginStart:-10,paddingVertical:10,paddingBottom:15}}
             inputContainerStyle={{height:15,marginRight:30}}
             inputStyle={{fontSize:14}}
             defaultValue={this.state.dateFromPicker}
             value={this.state.dateFromPicker == '' ? DateFormat(new Date,'dd/mm/yyyy') : this.state.dateFromPicker}
             editable={false}
             />
             </TouchableOpacity>
             <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />

        <Text style={styles.titleText}>Jenis Kelamin</Text>
        <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
            formHorizontal={true}
            labelStyle={{paddingHorizontal:5}}
            buttonSize={12}
            style={{paddingTop:5}}
            buttonColor='#525252'
            selectedButtonColor='#62BA56'

            />

            </Card>
            </View>
            <View style={{flex:1}}>
            <Card
            title='CHANGE CONTACT'
            titleStyle={{alignSelf:'flex-start',justifyContent:'flex-start',fontSize:16,fontWeight:'bold',flexDirection:'column'}}
            containerStyle={{flex:1,backgroundColor:'#FFF',justifyContent:'center'}}
            >
             <Text style={styles.titleText}> Email</Text>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Input 
             editable={this.state.isEdit}
             containerStyle={{marginLeft:-18}}
             inputContainerStyle={{borderColor:'#FFF'}}
             inputStyle={styles.valueText}
             onChangeText={(value)=> this.setState({email:value})}
             value={this.state.email}/>
             <TouchableOpacity
             style={{marginLeft:-60}}
             onPress={()=> this.setState({isEdit:!this.state.isEdit})}
             >
             <Text style={styles.actionText}>change</Text>
             </TouchableOpacity>
             </View>
             <Text style={styles.titleText}>HP Verified</Text>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Input
             editable={this.state.isEdit}
             onChangeText={(value)=> this.setState({hp:value})}
             value={this.state.hp}
             containerStyle={{marginLeft:-18}}
             inputContainerStyle={{borderColor:'#FFF'}}
             inputStyle={styles.valueText}/>
             <TouchableOpacity
             style={{marginLeft:-60}}
              onPress={()=> this.setState({isEdit:!this.state.isEdit})}
             >
             <Text style={styles.actionText}>change</Text>
             </TouchableOpacity>
             </View>
             

            </Card>
            </View>
              </View>
              <View style={{flex:1,paddingVertical:15,marginStart:15,justifyContent:'flex-start'}}>
            <Button title="Simpan"
            titleStyle={{marginStart:-50}}
            buttonStyle={{backgroundColor:'#03AC0E'}}
            onPress={() => this.props.dispatch(postImage(this.state.filePath.uri))  }
            />
            <Button title="upload"
            titleStyle={{marginStart:-50,padding:5}}
            buttonStyle={{backgroundColor:'#03AC0E'}}
            //onPress={() => this.props.dispatch(postImage(this.state.filePath.uri))  }
            onPress={this.handleUploadPhoto}
            />
            </View>
              </ScrollView>
            </View>
            </View>
        );
      }
    }

//export default ProfileSettings;

const mapStateToProps = ( state ) => {
  return {
      product:state.product
  }
}

export default connect(mapStateToProps)(ProfileSettings);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D0D0D0',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50
    },
    titleText: {
        fontSize:12,
        color:'#A1A9B0'
    },
    valueText: {
        fontSize:16,
        color:'#525252',
        paddingVertical:5
    },
    actionText: {
        fontSize:15,
        color:'#03AC0E',
        marginRight:25
        
    },
    actionText1: {
        fontSize:15,
        color:'#03AC0E',
        marginLeft:210
        
    }
  });