import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppNavigator from './components/Navigation'


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
