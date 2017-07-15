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
      </View>
    );
  }
}
