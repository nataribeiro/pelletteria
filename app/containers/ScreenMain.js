import React from 'react';
import {
  Text,
  Button,
  ListView,
  TouchableHighlight,
  StyleSheet,
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
            onPress={() => {this.props.navigation.navigate('Detail', rowData)}}>

            <View>
                <ItemHomeList>{rowData}</ItemHomeList>
            </View>
          </TouchableHighlight>
      );
    }

static navigationOptions = {
  title: 'Pagina inicial'
};

onPressProductList = (event) =>{
  this.props.navigation.navigate('ProductList');
}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}/>
        <Button
          title="Ir para lista de produtos"
          onPress={this.onPressProductList}/>
      </View>
      
    );
  }
}
