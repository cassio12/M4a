import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

import dogs from '../assets/dogs.jpeg'

export default class App extends React.Component {

   static navigationOptions = ({navigation}) => ({
    title:'bem vindo',
    header: null
  })
  constructor(props) {
		super(props);
		this.state = {
      ong:[
        {
        key:1,
        img: dogs,
        data: '24 maio',
        title:'Feira de Adoção',
        rua: 'Visconde de Niteroi',
        horario: '20H'
      },
      {
        key:2,
        img: dogs,
        data: '24 maio',
        title:'Feira de Adoção',
        rua: 'Visconde de Niteroi',
        horario: '20H'
      },
      {
        key:3,
        img: dogs,
        data: '24 maio',
        title:'Feira de Adoção',
        rua: 'Visconde de Niteroi',
        horario: '20H'
      },
    ]
    }
  } 
  listaRender(item) {
    return (
      <View style={styles.listagem}>
        <View style={styles.photoDogs}>
            <Image source={item.img} style={styles.photoDogsImg}  />
        </View>
        <View style={styles.text}>
          <View style={styles.data}>
            <Text style={styles.data1}>{item.data}</Text>
          </View>
          <View style={styles.subTitle}>
            <Text style={styles.text1}> {item.title}</Text>
            <Text style={styles.text1}>{item.rua}</Text>
            <Text style={styles.text1}>{item.horario}</Text>
            <View style={styles.acaoSobreOng}>
              <Text style={styles.descartar}>x</Text>
            </View>
          </View>
        </View>  
      </View>
    );
  }
  render() {
    
    return (
        <View style={styles.container}>
          <View style={styles.nav}>
            <Image source={require('../assets/perfil.png')} style={styles.navItenPerfil}  />
            <Image style={styles.navIten} source={require('../assets/lupa.png')} />
            <Image style={styles.navIten} source={require('../assets/balão.jpeg')} />
          </View>
          <ScrollView >
            <View style={styles.corpo}>
              <FlatList 
              data={this.state.ong}
              renderItem={({item}) => this.listaRender(item )}/>

            </View>
           
          </ScrollView>
        </View>
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
    
  },
  nav:{
    width:'100%',
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-around',
    //marginTop: 25,
    backgroundColor:'red',
  },
  navIten:{
    width:25,
    height:25,
  },
  navItenPerfil:{
    width:25,
    height:25,
    borderRadius: 500,
  },
  listagem:{
    flex:1,
    width: '100%',
    height: 300,
  },
  corpo:{
    width: '100%',
  },
  photoDogs:{
    width:'90%',
    height:'55%',
    margin:20 ,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text:{
    height: '30%',
    flexDirection:'row'
  },
  text1:{
    fontSize: 20,
    alignItems: 'flex-start',
  },
  data1:{
    fontSize: 30,
    textAlign: 'center',
  },
  data:{
    width:'30%',
    marginLeft: 20,
    backgroundColor:'#f1921e',
  }
});
