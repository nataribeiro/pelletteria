import React from 'react';
import {
  Text,
  ScrollView,
  View
} from 'react-native';
import BannerNews from '../components/BannerNews'


export default class ScreenMain extends React.Component {

static navigationOptions = {
  title: 'Detalhes do Produto'
};

  render() {
    return (
      <View>
        <ScrollView >
          < BannerNews />
        </ScrollView>
      </View>
    );
  }
}
