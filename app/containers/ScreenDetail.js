import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { Divider } from 'react-native-material-design';


export default class ScreenMain extends React.Component {

static navigationOptions = {
  title: 'Detalhes do Post'
};

  render() {
    const {state} = this.props.navigation;
    return (
      <View style={{backgroundColor:'#FFF', flex: 1 }}>
        <ScrollView style={styles.margin}>
          <Image
            style={{flex: 1, flexDirection: 'row', height: 150}}
            source={{uri: 'https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.0-9/18157965_529320550743919_8740887904695140169_n.jpg?oh=810e507d46bb980644bcb491c73132c9&oe=59FDFD23'}}
          />

          <Text style={styles.title}>Bolsa de couro das melhores </Text>
          <Divider/>

          <View style={styles.barIcon}>
          <Image style={styles.icones}
            source={require('../img/ic_message_text_outline.png')}
          />
          <Image
            style={styles.icones}
            source={require('../img/ic_bookmark_outline.png')}
          />
          <Image
            style={styles.iconesRight}
            source={require('../img/ic_share_variant.png')}
          />
         </View>
          <Text style={styles.description}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. </Text>
          
          <View style={styles.barIcon}>
            <Image style={styles.iconesRation}
              source={require('../img/ic_star.png')}
            />
            <Image style={styles.iconesRation}
              source={require('../img/ic_star.png')}
            />
            <Image style={styles.iconesRation}
              source={require('../img/ic_star.png')}
            />
            <Image style={styles.iconesRation}
              source={require('../img/ic_star.png')}
            />
            <Image style={styles.iconesRation}
              source={require('../img/ic_star_outline.png')}
            />
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    color: '#000'
  },
  divider: {
    color: '#000',
    marginRight: 16,
    marginLeft: 16,
  },
  margin:{
    marginLeft: 8,
    marginRight: 8,
  },
  barIcon:{
    paddingTop: 8,
    paddingBottom: 8,
    flex: 1, 
    flexDirection: 'row'
  },
  icones:{
    width: 24, 
    height: 24,
    marginRight: 16,
  },
  iconesRation:{
    width: 24, 
    height: 24,
  },
  iconesRight:{
    width: 24, 
    height: 24,
    position: 'absolute',
    right: 0,
    top: 8,
  },
});

