import React, {Component} from 'react';
import {createAppContainer, createBottomTabNavigator ,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../Screens/Home';
import Feed from '../Screens/Feed';
import Cart from '../Screens/Cart';
import Account from '../Screens/Account';
import Profile from '../Screens/Profile';
import Wishlist from '../Screens/Wishlist';
import DetailProduct from '../Screens/Detail';
import HomeHeader from '../Components/Header/HomeHeader';


const BottomNavigation = createBottomTabNavigator(
	{
		Home: Cart,
		Feed: Feed,
		'Official Store': Cart,
		Cart: Cart,
		Account: Profile
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
			inactiveTintColor: '#263238'
		},
	}
);

const RootNavigator = createStackNavigator(
	{
		Home : BottomNavigation,
		Wishlist: Wishlist,
		Detail: DetailProduct
		
	},
	{
		
		mode:'modal',
		headerMode:'none',

	}
)

export default createAppContainer(RootNavigator);