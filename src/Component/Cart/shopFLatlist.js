import React, {Component} from 'react';
import {TouchableOpacity, View , Text, StyleSheet, Dimensions, ImageBackgroundm, FlatList} from 'react-native'
import {shop} from '../../Assets/dummy'
import {CheckBox} from 'react-native-elements'
import FlatItem from './itemFlatlist'
import {connect} from 'react-redux'
import {fetchCart} from '../redux/actions/cart'

class ShopFlatlist extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.getData()
    }
    getData = () => {
        this.props.dispatch(fetchCart())
    }
    renderItem = ({item, index}) => {
        return (
            <View style={style.shadow}>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:-0}}>
                    <CheckBox checked={true}/>
                    <View style={{flexDirection:'column'}}>
                        <Text>
                            {"Toko: "}<Text style={{color:'black', fontSize:15}}>{item.store}</Text>
                        </Text>
                        <Text>{item.address}</Text>
                    </View>
                </View>
                <FlatItem></FlatItem>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render(){
        return(
            <View style={style.flatCard}>
            {/* <CheckBox></CheckBox> */}
                <FlatList
                    data={shop}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

let heightWindow = Dimensions.get('window').height
let widthWindow = Dimensions.get('window').width
const style = StyleSheet.create({
    flatCard: {
        width: '100%',
        // padding: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginTop: 10
    },
    shadow: {
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
    
})

// export default ShopFlatlist
const mapStateToProps = (state) => {
    return {
      carts: state.cart
    }
  }
  
  export default connect(mapStateToProps)(ShopFlatlist)