import React, {Component} from 'react';
import BottomNavigation from './src/Route/AppNavigation';
import store from './src/Public/redux/store';
import {Provider} from 'react-redux';


export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
    	  <BottomNavigation />
      </Provider>
    )
  }
}