import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Button } from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation'

import OngScreen from './source/screens/ongScreen';

class App extends Component {

  static navigationOptions = ({navigation}) => ({
    title:'bem vindo'
  })

  render() {
    
    return (
         <Button title="ONG" onPress={() => this.props.navigation.navigate('Ong') } />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'column',
  }
});


const Navegador = StackNavigator({
  Home:{
    screen: App
  },
  Ong:{
    screen: OngScreen
  }
})

export default Navegador;
