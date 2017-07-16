import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

import Banner from 'react-native-banner';

onClickPurchase = () => {
  Alert.alert('Produto comprado!');
}

export default class productDetails extends Component {

  static navigationOptions = {
    title: 'DETALHES'
  };

  constructor(props) {
      super(props);
      this.banners = [
          // {
          //     title: ' ',
          //     image: require('../../imgs/uvas.png'),
          // },
          // {
          //     title: ' ',
          //     image: require('../../imgs/uvas.png'),
          // }
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

    for(i=0; i<item.images.length; i++) {
      this.banners[i] = { title: ' ', image: item.images[i] }
    }

    const { container, itemImage, itemTitle, itemPrice, itemLine, bannerContainer, banner, textWhite,
            textWhiteBold, textBold, textTitle, textInfo,
            discountView, discountViewTexts, discontViewArrow,
            sizeView, sizeButtonsView, sizeInfoView, sizeP, sizeM, sizeG,
            confirmPurchaseView, priceView, installmentInfoView, confirmPurchaseButton } = styles;
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

          <Text style={itemTitle}>{item.title}</Text>
          <View style={itemLine} />

          <Text style={textTitle}>TAMANHO</Text>
          <View style={sizeView}>
            <View style={sizeButtonsView}>
              <TouchableHighlight style={sizeP}>
                <Text>P</Text>
              </TouchableHighlight>
              <TouchableHighlight style={sizeM}>
                <Text>M</Text>
              </TouchableHighlight>
              <TouchableHighlight style={sizeG}>
                <Text>G</Text>
              </TouchableHighlight>
            </View>

            <View style={sizeInfoView}>
              <Text style={textWhite}>47cm x 67cm</Text>
            </View>
          </View>

          <View style={itemLine} />

          <View style={discountView}>
            <View style={discountViewTexts}>
              <Text style={textTitle}>OPÇÃO DE DESCONTO</Text>
              <Text style={textInfo}>SEM DESCONTO - R$ 149,90</Text>
            </View>
            <Image style={discontViewArrow} source={require('../images/right_arrow.png')} />
          </View>

          <View style={itemLine} />

          <View style={discountViewTexts}>
            <Text style={textTitle}>CARACTERÍSTICAS</Text>
            <Text style={textInfo}>Composição: {"\n"}100% Acrílico {"\n"}Referência: GLIB</Text>
          </View>

          <View style={itemLine} />

          <View style={confirmPurchaseView}>
            <View style={priceView}>
              <Text style={textWhite}>De {item.price}</Text>
              <Text style={textWhiteBold}>Por {item.finalPrice}</Text>
            </View>

            <View style={installmentInfoView}>
              <Text style={textWhite}>Ou em até</Text>
              <Text style={textWhite}>4x de R$ 37,48</Text>
            </View>

            <TouchableOpacity
              onPress={onClickPurchase}
              style={confirmPurchaseButton}>
            <Text style={textBold}>CONFIRMAR COMPRA</Text>
            </TouchableOpacity>
          </View>

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
  textBold: {
    fontWeight: 'bold'
  },
  textWhite: {
    color: '#fff'
  },
  textWhiteBold: {
    color: '#fff',
    fontWeight: 'bold'
  },
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
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#000'
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
    flex: 2,
    flexDirection: 'row',
    padding: 10
  },
  sizeInfoView: {
    height: 50,
    flex: 1,
    backgroundColor: '#1f9fd1',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5
  },
  sizeP: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  sizeM: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeG: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },

  confirmPurchaseView: {
    paddingVertical: 10,
    backgroundColor: '#4a4a4a',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceView: {
    flex: 1.2,
    padding: 10
  },
  installmentInfoView: {
    flex: 1.2,
    padding: 10
  },
  confirmPurchaseButton: {
    flex: 2,
    backgroundColor: '#fce336',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingVertical: 5,
    borderRadius: 5
  },

  textTitle: {
    paddingLeft: 10,
    color: '#777777'
  },
  textInfo: {
    paddingLeft: 10,
    color: '#000'
  }
});
