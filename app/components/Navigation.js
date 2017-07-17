import React from 'react';
import {StackNavigator} from 'react-navigation';
import ScreenMain from '../containers/ScreenMain';
import ScreenDetail from '../containers/ScreenDetail';
import ScreenProductList from '../containers/ScreenProductList';
import ScreenProductDetail from '../containers/ScreenProductDetail';

const AppNavigator = StackNavigator({
  Home: {
    screen: ScreenMain
  },
  Detail:{
    screen: ScreenDetail
  },
  ProductList: {
    screen: ScreenProductList
  },
  ProductDetails: {
    screen: ScreenProductDetail
  }
})

export default AppNavigator;
