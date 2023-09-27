import { Button, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import React from 'react';
import Iniciar from '../Componentes/Iniciar';


const IniciarTela = ({navigation}) =>{
    return(
    <View>
        <Iniciar navigation={navigation}/>
    </View>
    )
};

export default IniciarTela