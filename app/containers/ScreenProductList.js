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
            {title: 'Produto 1', price: 'R$ 25,00', promo: 'Na compra deste produto bla bla bla'},
            {title: 'Produto 2', price: 'R$ 55,00', promo: 'Na compra deste produto bla bla bla'},
            {title: 'Produto 3', price: 'R$ 66,90', promo: 'Na compra deste produto bla bla bla'}
          ]}
          renderItem={
            ({item}) =>
            <View>

              <View style={itemContainer}>

                <Image style={itemImage} source={require('../../imgs/uvas.png')} />
                <View style={itemDescription}>
                  <Text style={itemTitle}>{item.title}</Text>
                  <View>
                    <Text style={itemPrice}>{item.price}</Text>
                    <Text style={itemFinalPrice}>{item.price}</Text>
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
