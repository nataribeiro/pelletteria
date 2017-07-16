import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text
} from 'react-native';
 
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
 
import Button from 'react-native-button';


 
export default class ItemHomeList extends React.Component {

  

  render () {
    return (
      <Card>
       
          <Image
                style={{width: 250, height: 150}}
              
                source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
          />
      
        <CardAction >
          <Button
            style={styles.button}
            onPress={() => {}}>
            Button 1
          </Button>
          <Button
            style={styles.button}
            onPress={() => {}}>
            Button 2
          </Button>
        </CardAction>
      </Card>
    );
  }
}
 
const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  image:{
    flex: 1,
    height: 3,
    width: 4,
    resizeMode: 'cover'
  }
});
