import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
 
import {Card, CardImage, CardContent, CardTitle, CardAction} from 'react-native-card-view';
import Button from 'react-native-button';
import { Divider } from 'react-native-material-design';
 
export default class ItemHomeList extends React.Component {

  render () {
    return (
      <Card>
        <CardImage styles={cardImage}>
          <Image
            style={{flex: 1, flexDirection: 'row', height: 150}}
            source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}} />
        </CardImage>
        
        <CardTitle style={cardTitle}>
          <Text style={styles.title}>Bolsa de couro das melhores </Text>
        </CardTitle>
      
 <CardContent styles={cardContent}>
    <Divider style={{flex: 1, flexDirection: 'row', height: 1}} />
 </CardContent>
        <CardContent styles={cardContent}>
            
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
          </CardContent>

      </Card>
    );
  }
}

const cardImage = {cardImage: {flex: 1, flexDirection: 'row'}};
const cardTitle = {cardTitle: {flex: 1,flexDirection: 'row'}};
const cardContent = {cardContent: {flex: 1, flexDirection: 'row', marginTop: 0, marginBottom: 0}};
const cardAction= {cardAction: {flex: 1, flexDirection: 'row'}};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: '#808080', 
    fontSize: 22,
  },
  button: {
    marginRight: 10
  },
  image:{
    flex: 1,
    height: 3,
    width: 4,
    resizeMode: 'cover'
  }, 
  barIcon:{
    flex: 1, 
    flexDirection: 'row'
  },
  icones:{
    width: 24, 
    height: 24,
    marginRight: 16,
  },

  iconesRight:{
    width: 24, 
    height: 24,
    position: 'absolute',
    right: 0,
    top: 8,
  },
});