import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TextInput } from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation'

import OngScreen from './source/screens/ongScreen';

class App extends Component {

  // static navigationOptions = ({navigation}) => ({
  //   title:'bem vindo'
  // })

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.containerLogin}>
          <Image style={styles.logo} source={require('./source/assets/m4a.png')}/>
          <View style={styles.boxInput}>
            <Text>Log in</Text>
            <TextInput style={styles.input} title='Email'/>
            <TextInput style={styles.input} title='Password'/>
            {/* <Button title="Log in" onPress={() => this.props.navigation.navigate('Ong') } /> */}
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,  
    width:'100%',
    backgroundColor: '#38A800',
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'column',
  },
  containerLogin:{
    width:'95%',
    height:'90%',
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  logo:{
    width: '30%',
    height: 100,
    alignItems:'center',
  },
  input:{
    width:'100%',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dashed',
  },
  boxInput:{
    width: '90%',
    height:100,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    
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
