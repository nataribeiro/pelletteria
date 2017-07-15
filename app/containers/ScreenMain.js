import React from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';


export default class ScreenMain extends React.Component {

static navigationOptions = {
  title: 'Pagina inicial'
};

onPressButtom = (event) => {
  this.props.navigation.navigate('Detail');
}

onPressProductList = () => {
  this.props.navigation.navigate('ProductList');
}

  render() {
    return (
      <View>
        <Text>
          Tela inicial
        </Text>
        <Button
        title="Ir para detalhes"
        color="red"
        onPress={this.onPressButtom}
        />
        <Button
        title="Ir para lista de produtos"
        color="blue"
        onPress={this.onPressProductList}
        />
      </View>

    );
  }
}
