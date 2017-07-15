import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Banner from 'react-native-banner';

export default class productDetails extends Component {

  static navigationOptions = {
    title: 'DETALHES'
  };

  constructor(props) {
      super(props);
      this.banners = [
          {
              title: ' ',
              image: require('../../imgs/uvas.png'),
          },
          {
              title: ' ',
              image: require('../../imgs/uvas.png'),
          }
      ];

      // this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};
      this.state = {
          clickTitle: '',
          defaultIndex: 0,
      }
      this.defaultIndex = 0;
  }


  render() {
    const {state} = this.props.navigation;
    var item = state.params;
    const { container, itemImage, itemTitle, itemPrice, itemLine, bannerContainer, banner,
            discountView, discountViewTexts, discontViewArrow,
            sizeView, sizeButtonsView, sizeInfoView, sizeButton, sizeP, sizeM, sizeG } = styles;
    return (
      <ScrollView style={container}>
        <View>
          <View style={[bannerContainer, this.iosMarginTop]}>
            <Banner
                banners={this.banners}
                defaultIndex={this.defaultIndex}
                onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
            />
            <Text>{this.state.clickTitle}</Text>
          </View>

          <Text>{item.title}</Text>
          <View style={itemLine} />

          <Text>TAMANHO</Text>
          <View style={sizeView}>
            <View style={sizeButtonsView}>
              <TouchableHighlight style={sizeButton, sizeP}>
                <Text>P</Text>
              </TouchableHighlight>
              <TouchableHighlight style={sizeButton, sizeM}>
                <Text>M</Text>
              </TouchableHighlight>
              <TouchableHighlight style={sizeButton, sizeG}>
                <Text>G</Text>
              </TouchableHighlight>
            </View>

            <View style={sizeInfoView}>
              <Text>47cm x 67cm</Text>
            </View>
          </View>

          <View style={itemLine} />

          <View style={discountView}>
            <View style={discountViewTexts}>
              <Text>OPÇÃO DE DESCONTO</Text>
              <Text>SEM DESCONTO - R$ 149,90</Text>
            </View>
            <Image style={discontViewArrow} source={require('../images/right_arrow.png')} />
          </View>

          <View style={itemLine} />

          <View style={discountViewTexts}>
            <Text>CARACTERÍSTICAS</Text>
            <Text>Composição: {"\n"} 100% Acrílico {"\n"} Referência: GLIB</Text>
          </View>

          <View style={itemLine} />

        </View>
      </ScrollView>
    );
  }

  onMomentumScrollEnd(event, state) {
      console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
      this.defaultIndex = state.index;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff'
  },
  bannerContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  banner: {
    flex: 1,
  },
  itemImage: {
    resizeMode: 'stretch'
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemPrice: {

  },
  itemLine: {
    height: 1,
    marginVertical: 10,
    backgroundColor: '#C3C3C3'
  },
  discountView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  discountViewTexts: {
    justifyContent: 'space-around'
  },
  discontViewArrow: {
    margin: 10,
    resizeMode: 'stretch'
  },

  sizeView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  sizeButtonsView: {
    flexDirection: 'row'
  },
  sizeInfoView: {

  },
  sizeButton: {

  },
  sizeP: {

  },
  sizeM: {

  },
  sizeG: {

  },

  image: {
    flex: 1,
    resizeMode: 'center'
  },
});
