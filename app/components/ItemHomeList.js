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
        <CardImage>
          <Image
                style={{width: 400, height: 200}}
                resizeMode={Image.resizeMode.cover}
                source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
              />
        </CardImage>

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
  }
});
