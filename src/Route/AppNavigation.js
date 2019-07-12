import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Home';
import Feed from '../Screens/Feed';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import Wishlist from '../Screens/Wishlist';
import DetailProduct from '../Screens/Detail';
import Checkout from '../Screens/Checkout'
import HomeHeader from '../Components/Header/HomeHeader';
import shop from '../Screens/Shop';
import Register from '../Screens/Register';
import Verification from '../Screens/Verifikasi';
import AddProduct from '../Screens/AddProduct';
import AddImage from '../Screens/AddImage';
import AddProductDetail from '../Screens/AddProductDetail';
import EditImage from '../Screens/EditImage';
import BottomNav from '../Components/BottomNav/BottomNav';
import Shop from '../Screens/Shop';
import AddStoreDetail from '../Screens/RegisterPage/AddStoreDetail';
import ImportHome from '../Screens/RegisterPage/ImportHome';
import AddStorePage from '../Screens/RegisterPage/AddStorePage';
import VerificationPage from '../Screens/VerificationPage'

const BottomNavigation = createBottomTabNavigator(
	{
		Home: ImportHome,
		Feed: AddStoreDetail,
		'Official Store': Cart,
		Keranjang: Cart,
		AKun: EditImage
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused, horizontal, tintColor}) => {
				const {routeName} = navigation.state;
				if (routeName === 'Home') {
					return (
						<Icon name="home" size={23} style={{color: tintColor, paddingTop: 5}}/>
					);
				}else if (routeName === 'Feed') {
					return (
						<Icon name="image" size={23} style={{color: tintColor, paddingTop: 5}}/>
					);
				}else if (routeName === 'Official Store') {
					return (
						<Icon name="check-square" size={23} style={{color: tintColor, paddingTop: 5}}/>
					);
				}else if (routeName === 'Cart') {
					return (
						<Icon name="shopping-cart" size={23} style={{color: tintColor, paddingTop: 5}}/>
					);
				}else if (routeName === 'Account') {
					return (
						<Icon name="user" size={23} style={{color: tintColor, paddingTop: 5}}/>
					);
				}
			},
		}),
		tabBarOptions: {
			activeTintColor: '#2d6430',
			inactiveTintColor: '#263238',
			keyboardHidesTabBar: true
		},
	}
);

const RootNavigator = createStackNavigator(
	{
		Home : {screen: BottomNavigation},
		Wishlist: {screen: Wishlist},
		Login: {screen: Login},
		Register: {screen: Register},
		shop: {screen: shop},
		Verification: {screen: Verification},
		AddProduct: {screen: AddProduct},
		AddImage: {screen: AddImage},
		AddProductDetail: {screen: AddProductDetail},
		EditImage: {screen: EditImage},
		AddStorePage: {screen: AddStorePage},
		AddStoreDetail: {screen: AddStoreDetail},
		VerificationPage: {screen: VerificationPage}
	},
	{
		mode:'modal',
		headerMode:'none',
	}
)

export default createAppContainer(RootNavigator);