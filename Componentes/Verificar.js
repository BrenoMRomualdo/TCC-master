import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

const Verificar = ({navigation})=> {
    
    <View style={styles.container}>
      <View style={{marginBottom:50}}>
        <Text style={{fontSize: 20, fontWeight:'bold',textAlign:'center', marginBottom: 10}}>ATENÇÃO! Verifique sua ficha! Está correto?</Text>
      </View>

      <View>
        <Text style={{fontWeight:'bold', textAlign:'justified', marginBottom: 10, width: 650,}}>Você está recebendo uma amostra de 'Tipo de Amostra'.
        Prove a amostra e dê uma nota de 1 até 9 pontos de acordo com a escala abaixo para cada atributo:</Text>
      </View>

      <View style={styles.painel}>
        <View style={styles.hedonica}>
          <Text>[9] Gostei extremamente</Text>
          <Text>[8] Gostei muito</Text>
          <Text>[7] Gostei regularmente</Text>
          <Text>[6] Gostei ligeiramente</Text>
          <Text>[5] Não gostei, nem desgostei</Text>
          <Text>[4] Gostei ligeiramente</Text>
          <Text>[3] Gostei regularmente</Text>
          <Text>[2] Desgostei muito</Text>
          <Text>[1] Desgostei extremamente</Text>
        </View>


        <View style={styles.atributos}>
          <Text style={{fontWeight:'bold',textAlign:'center', marginBottom: 10}}>AMOSTRA: XXXX</Text>
          <label style={{fontWeight:'bold',textAlign:'center', marginBottom: 10}}>
            Sabor: 
            <select style={styles.opcao}>
              <option value="1">001</option>
              <option value="2">002</option>
              <option value="3">003</option>
              <option value="4">004</option>
              <option value="5">005</option>
              <option value="6">006</option>
              <option value="7">007</option>
              <option value="8">008</option>
              <option value="9">009</option>
</select>
          </label>
        </View>
      </View>

      <View>
        <Text style={{fontWeight: 'bold'}}>Observações:</Text>
        <TextInput multiline style={styles.observacoes} placeholder='Digite aqui suas observações (opcional)'/>
      </View>

      <View style={styles.botoes}>
        <Button color='#775553' title='VOLTAR E CORRIGIR' onPress={()=> navigation.navigate('Configurar')} ></Button>
        <Button color='#775553' title='CONFIRMAR E INICIAR'></Button>
      </View>
    </View>

}

export default  Verificar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  painel: {
    margin: 10,
    flexDirection: 'row',
  },
  hedonica: {
    width: 500,
    flex: 0.5,
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 5,
  },
  atributos: {
    flex: 0.5,
    backgroundColor: 'lightgray',
    padding: 20,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'column'
  },
  opcao: {
    marginLeft: 10,
    width: 50,
    borderRadius: 10,
  },
  observacoes: {
    width: 500,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  botoes: {
    width: 400,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}); 
