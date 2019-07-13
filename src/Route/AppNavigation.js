import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Home';
import Feed from '../Screens/Feed';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import Wishlist from '../Screens/Wishlist';
import Checkout from '../Screens/Checkout'
import Register from '../Screens/Register';
import Verification from '../Screens/Verifikasi';
import AddProduct from '../Screens/AddProduct';
import AddImage from '../Screens/AddImage';
import AddProductDetail from '../Screens/AddProductDetail';
import EditImage from '../Screens/EditImage';
import Shop from '../Screens/Shop';
import AddStoreDetail from '../Screens/RegisterPage/AddStoreDetail';
import AddStorePage from '../Screens/RegisterPage/AddStorePage';
import VerificationPage from '../Screens/VerificationPage';
import OfficialStore from '../Screens/OfficialStore';
import RegisterAddProfile from '../Screens/RegisterPage/RegisterAddProfile';
import Notification from '../Screens/Notif';
import Message from '../Screens/Message';

const BottomNavigation = createBottomTabNavigator(
	{
		Home: Home,
		Feed: Feed,
		'Official Store': OfficialStore,
		Keranjang: Cart,
		Akun: Shop,
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
		Shop: {screen: Shop},
		Verification: {screen: Verification},
		AddProduct: {screen: AddProduct},
		AddImage: {screen: AddImage},
		AddProductDetail: {screen: AddProductDetail},
		EditImage: {screen: EditImage},
		AddStorePage: {screen: AddStorePage},
		AddStoreDetail: {screen: AddStoreDetail},
		VerificationPage: {screen: VerificationPage},
		Profile: {screen: Profile},
		Cart: {screen: Cart},
		Feed: {screen: Feed},
		Checkout: {screen: Checkout},
		OfficialStore: {screen: OfficialStore},
		RegisterAddProfile: {screen: RegisterAddProfile},
		Message: {screen: Message},
		Notification: {screen: Notification}
	},
	{
		mode:'modal',
		headerMode:'none',
	}
)

export default createAppContainer(RootNavigator);