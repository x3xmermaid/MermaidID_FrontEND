import React,{Component} from  'react';
import {FlatList,Text,TouchableOpacity,View,Image,StyleSheet,RefreshControl} from 'react-native';
import {Card,Rating} from 'react-native-elements'
import {Product} from '../Assets/dummy'

import CardProduct from '../Components/CardProduct';
import {connect} from 'react-redux';
import {getProduct} from '../Public/redux/action/product';

class CardFlatList extends Component {

    getProduct=() =>{
        this.props.dispatch(getProduct());
    }

    componentDidMount() {
        this.getProduct();
    }
    

    _keyExtractor = (item,index) => item.id

    renderItem = ({item,index}) => (
        <CardProduct
         image={item.product_image}
         price={item.price}
         userRated={item.userRated}
         rating={item.rating}
         titleProduct={item.product_name}
        idProduct={item.id_product}
         />
         
        
    )

    render(){
        return(
            <View style={{flex:1,flexDirection:'row',alignContent:'flex-start'}}>
            <FlatList
            //data={Product.filter(products => products.id !== 0)}
            data={this.props.product.productData}
            renderItem={this.renderItem}
            refreshing={this.props.product.isLoading}
            onRefresh={this.getProduct}
            // refreshControl={<RefreshControl
            //     refreshing={this.props.product.isLoading}
            //     onRefresh={()=>this.getProduct()}
            //     />
            // }
            numColumns={2}
            keyExtractor={this._keyExtractor}
            />
            </View>
        );
    }
} 

const mapStateToProps = ( state ) => {
    return {
        product:state.product
    }
}

export default connect(mapStateToProps)(CardFlatList);

