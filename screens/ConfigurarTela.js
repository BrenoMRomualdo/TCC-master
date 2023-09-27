import { Button, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import React from 'react';
import Configurar from '../Componentes/Configurar'

const ConfigurarTela = ({navigation}) =>{
    return(
        <View>
            <Configurar navigation={navigation}/>
        </View>
    )
};

export default ConfigurarTela