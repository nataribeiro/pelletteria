import React from 'react';
import {
  Text,
  Button,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';

var homeListNews = ["primeira", "Segunda"];
export default class ScreenMain extends React.Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(homeListNews),
    };
  }
  renderRow(rowData, sectionID, rowID) {
      return (
          <TouchableHighlight 
          onPress={this.onPressButtom}>
            <View>
                <Text numberOfLines={1}>{rowData}</Text>
                <View style={{height: 1, backgroundColor: '#dddddd'}}/>
            </View>
          </TouchableHighlight>
      );
    }

static navigationOptions = {
  title: 'Pagina inicial'
};

onPressButtom = (event) => {
  this.props.navigation.navigate('Detail');
}

 _onPressRow(rowData) {
    this.props.navigation.navigate('Detail');
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          />
        <Button
        title="Ir para detalhes"
        color="red"
        onPress={this.onPressButtom}
        />
      </View>
    );
  }
}
