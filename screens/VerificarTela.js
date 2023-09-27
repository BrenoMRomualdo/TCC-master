import { Button, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import React from 'react';
import Verificar from '../Componentes/Verificar'

const VerificarTela = ({navigation}) =>{
    return(
        <View>
            <Verificar navigation={navigation}/>
        </View>
    )
};

export default VerificarTela;