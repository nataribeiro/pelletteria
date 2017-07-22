import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';

import { Divider } from 'react-native-material-design';



export default class ScreenMain extends React.Component {

  static navigationOptions = {
    title: 'Detalhes do Post'
  };

  Comentarios(comentarios) {
  return comentarios.map(function(comentario, i){
    return(
      <View key={i} style={styles.commentContent}>
          <Text style={styles.divider}>{comentario.author}</Text>
          <Text style={styles.divider}>{comentario.title}</Text>
          <Text style={styles.divider}>{comentario.data}</Text>
          <Divider/>
      </View>
    );
  });
}

  render() {
    const {state} = this.props.navigation;
    var item = state.params;
   

  
    return (
      <View style={{backgroundColor:'#FFF', flex: 1 }}>
        <ScrollView style={styles.margin}>
          <Image
            style={{flex: 1, flexDirection: 'row', height: 150}}
            source={{uri: item.img}}
          />

         <View style={styles.bar}>
           
            <Image style={styles.iconesRation}
              source={ item.ration >= 1 ?                    
                       require('../img/ic_star.png') : require('../img/ic_star_outline.png')}/>
            <Image style={styles.iconesRation}
              source={ item.ration >= 2 ?                    
                       require('../img/ic_star.png') : require('../img/ic_star_outline.png')}/>
            <Image style={styles.iconesRation}
              source={ item.ration >= 3 ?                    
                       require('../img/ic_star.png') : require('../img/ic_star_outline.png')}/>
            <Image style={styles.iconesRation}
              source={ item.ration >= 4 ?                    
                       require('../img/ic_star.png') : require('../img/ic_star_outline.png')}/>
            <Image style={styles.iconesRation}
              source={ item.ration >= 5 ?                    
                       require('../img/ic_star.png') : require('../img/ic_star_outline.png')}/>
            <Text style={styles.textRation}> {item.ration}</Text>
          
          
          
          <View style={styles.barIcon}>
            <Image
              style={styles.icones}
              source={ item.bookmaker ?                    
                    require('../img/ic_bookmark.png') : require('../img/ic_bookmark_outline.png')}
                    />
            <Image
              style={styles.icones}
              source={require('../img/ic_share_variant.png')}
            />
         </View>
          
          </View>
          <Text style={styles.title}>{item.title} </Text>
          <Divider style={styles.divider}/>
          <Text style={styles.description}>{item.desc}</Text>
          
          <View style={styles.commentContent}>
            <Text style={styles.titleComment}>Comentários</Text>
            {this.Comentarios(item.comments)}
          </View>
          
        </ScrollView>

        <View>
          <TouchableHighlight style={styles.addButton}
              underlayColor='#ff7043' onPress={()=>{this.props.navigation.navigate('ProductList')}}>

              
              <Image
              style={styles.iconeFloat}
              source={require('../img/ic_currency_white.png')}/>
          </TouchableHighlight>
        </View>
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
  commentContent:{
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleComment: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    color: '#808080',
    textAlign: 'center',
    backgroundColor: '#F2F2F2'
  },
  number:{
    fontStyle: 'italic',
    color: '#808080', 
    fontSize: 10,
  },
  divider: {
    marginTop: 6,
    marginBottom: 6,
  },
  margin:{
    marginLeft: 8,
    marginRight: 8,
  },
  bar:{
    paddingTop: 8,
    paddingBottom: 8,
    flex: 1, 
    flexDirection: 'row'
  },
  barIcon:{
    paddingTop: 8,
    paddingBottom: 8,
    flex: 1, 
    flexDirection: 'row',
    position: 'absolute',
    right: 0
  },
  icones:{
    width: 24, 
    height: 24,
    marginRight: 16,
  },
  textRation:{
    width: 24, 
    height: 24,
    paddingTop: 4
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
  iconeFloat:{
    height: 24,
    width: 24,
    margin: 13
  },
  addButton: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

