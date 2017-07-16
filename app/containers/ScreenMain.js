import React from 'react';
import {
  Text,
  Button,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';

import ItemHomeList from '../components/ItemHomeList'

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
                <ItemHomeList>{rowData}</ItemHomeList>
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
    alert(rowData.Text)
  }

  render() {
    return (
      
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
      
    );
  }
}
