import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './src/Screens/Home';
import Feed from './src/Screens/Feed';
import Cart from './src/Screens/Cart';
import Account from './src/Screens/Account';
import Profile from './src/Screens/Profile';
import Shop from './src/Screens/Shop';

const AppDrawerNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Cart: { screen: Cart },
  'Official Store': { screen: Cart },
  Feed: { screen: Feed },
  Account: { screen: Account }
});

const AppContainer = createAppContainer(AppDrawerNavigator);
export default class App extends Component{
  render() {
    return (
        <AppContainer />
    )
  }
}
