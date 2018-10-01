import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';

export default class TextCreat extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.TextCreat, {fontSize:this.props.text}]}>{this.props.value}</Text>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {  
        width:'80%',
        backgroundColor: '#FF7700',
        marginTop: 15,
    },
})