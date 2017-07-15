import React, {Component} from 'react';
import {
  StyleSheet,
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
        <CardTitle>
          <Text style={styles.title}>Card Title</Text>
        </CardTitle>
        <CardContent>
          <Text>Content</Text>
        </CardContent>
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
