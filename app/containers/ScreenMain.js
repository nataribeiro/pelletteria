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

var homeListNews = [];
export default class ScreenMain extends React.Component {
  static navigationOptions = {
    title: 'Posts da Semana'
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      
      dataSource: ds.cloneWithRows(homeListNews),
    };
  }

  componentDidMount() {
  return fetch('http://www.mocky.io/v2/5973af071000005904441901')
    .then((response) => response.json())
    .then((responseJson) => {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState( {dataSource: ds.cloneWithRows(responseJson)})
    })
    .catch((error) => {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState( {dataSource: ds.cloneWithRows(list)})
    });
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

var list = [
    { 'title': 'Bolsa de couro artesanal',
      'desc': 'Mais uma bolsa entregue e uma cliente feliz com nosso trabalho!\nBolsa saco em couro azul royal, detalhes em metal ouro.\nEncomende a sua também!',
      'img': 'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/17862821_520833191592655_6798476686917722834_n.jpg?oh=94693ba7d3437afd01235b625470f368&oe=59C793DD',
      'publish': '25/06/2017 15h35',
      'ration': 3.2,
      'comments':[
        {author:'anonimo', data:'25/06/2017 15h45', title:'Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Quem num gosta di mim que vai caçá sua turmis! Mé faiz elementum girarzis, nisi eros vermeio.'},
        {author:'anonimo', data:'25/06/2017 16h35', title:'Viva Forevis aptent taciti sociosqu ad litora torquent. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Atirei o pau no gatis, per gatis num morreus.'},
        {author:'anonimo', data:'25/06/2017 16h40', title:'Sapien in monti palavris qui num significa nadis i pareci latim. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'}],
      'bookmaker':false
    },
    { 
      'title': 'Bolsa de couro Azul',
      'desc': 'Mais uma bolsa entregue e uma cliente feliz com nosso trabalho!\nBolsa saco em couro azul royal, detalhes em metal ouro.\nEncomende a sua também!',
      'img': 'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/18157965_529320550743919_8740887904695140169_n.jpg?oh=810e507d46bb980644bcb491c73132c9&oe=59FDFD23',
      'publish': '25/07/2017 15h35',
      'ration': 3,
      'comments':[
        {author:'Mussum', data:'25/07/2017 15h39', title:'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Interagi no mé, cursus quis, vehicula ac nisi. Diuretics paradis num copo é motivis de denguis. Quem num gosta di mé, boa gentis num é.'},
        {author:'Mussum', data:'25/07/2017 15h53', title:'Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.'},
        {author:'Mussum', data:'25/07/2017 19h12', title:'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Detraxit consequat et quo num tendi nada. Cevadis im ampola pa arma uma pindureta.'}],
      'bookmaker':true},
    { 
      'title': 'Bolsa de couro Azul menor',
      'desc': 'Mais uma bolsa entregue e uma cliente feliz com nosso trabalho!\nBolsa saco em couro azul royal, detalhes em metal ouro.\nEncomende a sua também!',
      'img': 'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/17991060_524657621210212_2631165626405611233_n.jpg?oh=5e875e09289f6e198fa7774e185176a8&oe=5A09D368',
      'publish': '25/07/2017 17h35',
      'ration': 5,
      'comments':[
        {author:'Mussum', data:'25/07/2017 17h38', title:'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!'},
        {author:'Mussum', data:'25/07/2017 18h38', title:'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem num gosta di mim que vai caçá sua turmis! Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis!'},
        {author:'Mussum', data:'25/07/2017 19h38', title:'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Cevadis im ampola pa arma uma pindureta.'},
        {author:'Mussum', data:'25/07/2017 20h38', title:'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Casamentiss faiz malandris se pirulitá.'},
        {author:'Mussum', data:'25/07/2017 21h38', title:'acabou os ipsum do mussum'},
        {author:'Mussum', data:'25/07/2017 22h38', title:'sem mais comentarios'},
        {author:'Mussum', data:'25/07/2017 23h38', title:'terminou'},
        {author:'Mussum', data:'26/07/2017 02h38', title:'voltem para casa'},
      ],
      'bookmaker':true}]
