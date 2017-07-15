import React from 'react';
import {StackNavigator} from 'react-navigation';
import ScreenMain from '../containers/ScreenMain';
import ScreenDetail from '../containers/ScreenDetail';

const AppNavigator = StackNavigator({
  Home: {
    screen: ScreenMain
  },
  Detail:{
    screen: ScreenDetail
  }

})

export default AppNavigator;
