import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
import App from './app/App';

export default class pelletteria extends Component {

  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('pelletteria', () => pelletteria);
