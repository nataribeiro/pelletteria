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
            source={{uri: this.props.children.img}} />
            <Text style={styles.publish}>Publicado em: {this.props.children.publish}</Text>
        </CardImage>
        
        <CardTitle style={cardTitle}>
          <Text style={styles.title}>{this.props.children.title}</Text>
          
        </CardTitle>
      
        
        <CardContent styles={cardContent}>
            
            <View style={styles.content}>
              
              <Text>{this.props.children.desc}</Text>
              <Divider style={styles.divider} />  
              <View style={styles.barIcon}>
                <Text style={styles.number}>{this.props.children.comments.length}</Text>
                <Image style={styles.icones}
                  source={require('../img/ic_message_text_outline.png')}/>
              
                <Image
                  style={styles.icones}
                  source={
                    this.props.children.bookmaker ?                    
                    require('../img/ic_bookmark.png') : require('../img/ic_bookmark_outline.png')}
                    />
                  
                <Image
                  style={styles.iconesRight}
                  source={require('../img/ic_share_variant.png')}/>
                  
              </View>

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
  number:{
    fontStyle: 'italic',
    color: '#808080', 
    fontSize: 10,
  },
  publish:{
    fontStyle: 'italic',
    color: '#808080', 
    fontSize: 10,
    position: 'absolute',
    left: 4,
    top: 4,
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
   content:{
    flex: 2,
  },
  icones:{
    width: 24, 
    height: 24,
    marginRight: 16,
  },
  divider:{
    flex: 1, 
    flexDirection: 'row', 
    height: 1, 
    marginTop: 10,
    marginBottom: 10
  },
  iconesRight:{
    width: 24, 
    height: 24,
    position: 'absolute',
    right: 0,
    top: 8,
  },
});