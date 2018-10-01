import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TextInput } from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import Imagem from './source/components/Image';
import Texts from './source/components/Texts';
import Button from './source/components/Button';
import OngScreen from './source/screens/ongScreen';

class App extends Component {

  // static navigationOptions = ({navigation}) => ({
  //   title:'bem vindo'
  // })
  constructor(props) {
    super(props);
    this.state = {
      Texts:''
    }
  }
  render() {
    
    return (
      <View style={styles.container}>
          <Imagem />
          <Texts text={25} value="Let´s create your new account" />
          <Texts text={30} value="I am a ..."/>
          <Button value="Volunteer"/>
          <Button value="Organization"/>
          <Texts text={14.5} value="By cliking Join now, you agree to the M4A User Agreement, Privacy Policy, and Cookie"/>
          {/* <Button title="Log in" onPress={() => this.props.navigation.navigate('Ong') } /> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width:'100%',
    backgroundColor: '#FF7700',
    alignItems: 'center',
    flexDirection: 'column',
  },
  
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
