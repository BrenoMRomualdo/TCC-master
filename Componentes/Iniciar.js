import { Button, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const Iniciar = ({navigation}) =>{
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ display: 'flex' }}>
        <View style={styles.fotoSensorial}>
          {/* Conteúdo da primeira coluna */}
          <Image style={styles.fotoSensorial} source={require('../assets/img01.jpg')} />
        </View>

      </View>
      {/* Conteudo segunda coluna */}
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View >
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={{ textAlign: 'center', fontSize: 50, fontFamily: 'bold', marginTop: 25 }}>Bem-vindo ao ASA!</Text>
            <Text style={{ textAlign: 'center', fontSize: 18 }}>Clique no botão INÍCIO para começar sua análise.</Text>
          </View>
          <View style={styles.botoes}>
            <Button color='#775553' title='INICIAR' onPress={() => navigation.navigate('Configurar')}></Button>
            <Button color='#775553' title='SAIR'></Button>
          </View>
        </View>
      </View>
    </View>
}

export default Iniciar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    fontSize: '20px',
    padding: '15px',
    margin: '15px',
    textAlign: 'center'
  },

  logo: {
    width: 225,
    height: 225,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 230,
    marginTop: 75,
  },

  fotoSensorial: {
    width: 765,
    height: 751,
    position: 'sticky'
  },

  botoes: {
    width: 400,
    marginTop: 45,
    marginLeft: 135,
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});