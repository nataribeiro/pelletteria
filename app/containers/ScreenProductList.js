import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

export default class productList extends Component {

  static navigationOptions = {
    title: 'Lista'
  };

  render() {
    const { container, itemContainer, itemImage, itemTitle, itemDescription,
      itemButton, itemPrice, itemFinalPrice, buttonText, itemLine } = styles;
    return (
      <View style={container}>
        <FlatList
          data={[
            {title: 'Produto 1', price: 'R$ 99,90', finalPrice: 'R$ 79,90', promo: 'Na compra deste produto bla bla bla', images: ['http://static5.netshoes.net/Produtos/bolsa-santa-lolla-shopper-alca-gorgurao-feminina/06/H08-1297-006/H08-1297-006_zoom1.jpg?resize=544:*']},
            {title: 'Produto 2', price: 'R$ 159,90', finalPrice: 'R$ 119,90', promo: 'Na compra deste produto bla bla bla', images: ['https://http2.mlstatic.com/bolsa-feminina-envernizada-social-excutivo-luxo-linda-D_NQ_NP_772015-MLB25113764040_102016-F.jpg']},
            {title: 'Produto 3', price: 'R$ 89,90', finalPrice: 'R$ 59,90', promo: 'Na compra deste produto bla bla bla', images: ['https://s-media-cache-ak0.pinimg.com/736x/d0/cf/5c/d0cf5c1c136b7f24625ae005b655f621.jpg', 'https://ae01.alicdn.com/kf/HTB1UJMxIXXXXXbCXFXXq6xXFXXXK/2015-moda-PU-de-couro-bolsa-bolsas-de-couro-das-mulheres-elegante-lades-bolsa-mulheres-shoulder.jpg_350x350.jpg']}
          ]}
          renderItem={
            ({item}) =>
            <View>

              <View style={itemContainer}>

                <Image style={itemImage} source={{uri: item.images[0]}} />
                <View style={itemDescription}>
                  <Text style={itemTitle}>{item.title}</Text>
                  <View>
                    <Text style={itemPrice}>{item.price}</Text>
                    <Text style={itemFinalPrice}>{item.finalPrice}</Text>
                  </View>

                  <Text>{item.promo}</Text>
                  <TouchableOpacity
                    // onPress={this.onClickBuy.bind(this)}
                    onPress={() => {this.props.navigation.navigate('ProductDetails', item)}}
                    style={itemButton}>
                    <Text style={buttonText}>COMPRAR</Text>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={itemLine} />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemContainer: {
    flex: 1,
    height: 200,
    flexDirection: 'row',
    marginTop: 10,
  },
  itemImage: {
    flex: 1,
    marginHorizontal: 10,
    resizeMode: 'stretch'
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDescription: {
    flex: 2,
    marginRight: 10,
    justifyContent: 'space-between'
  },
  itemPrice: {

  },
  itemFinalPrice: {
    fontWeight: 'bold'
  },
  itemButton: {
    backgroundColor: '#fce336',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold'
  },
  itemLine: {
    height: 1,
    marginVertical: 10,
    backgroundColor: '#C3C3C3'
  }
});
