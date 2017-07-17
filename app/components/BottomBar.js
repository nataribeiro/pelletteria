import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'

export default class BottomBar extends React.Component {
  
  onPressTab = (event) =>{
    
    alert(event);
    if(event.value == 0){
      this.props.navigation.navigate('Home');
    }else{
      this.props.navigation.navigate('ProductList');
    }
  }
  
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={
          (newTabIndex) => this.onPressTab(newTabIndex)}  >
        
        <Tab
          barBackgroundColor="#37474F"
          label="Página principal"
        />
        
        <Tab
          barBackgroundColor="#00796B"
          label="Lista de Produtos"
          
        />
      </BottomNavigation>
    )
  }
}