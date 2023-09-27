
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import {Image} from 'react-native'

function pushData() {
  let mesa = document.getElementById("tabelaAtributos");
  let novaView = document.createElement("atributo");
  var inputText = document.getElementById("inputText").value;
  var node = document.createTextNode(inputText);
  novaView.appendChild(node);
  mesa.appendChild(novaView);
  console.log(node)
  console.log(novaView)
}
function removerAtributo(){
  let mesa = document.getElementById("tabelaAtributos");
  let atributo = document.getElementById("tabelaAtributos").children[0];
  mesa.removeChild(atributo);
  console.log(atributo)
}

const Configurar = ({navigation})=>{
    <View style={styles.container}>
      <View style={{marginBottom:50}}>
        <View style={styles.logo} >   
          <Image style={styles.Imagem} source={require('../assets/Logo.png')}/>
        </View>
     
        <Text style={{fontSize: 40, fontWeight:'bold',textAlign:'center', marginTop:15,marginBottom: 10}}>Vamos configurar seu Teste?</Text>
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight:'bold', marginTop:5 , marginBottom:5 }}>N° de provadores:</Text>
        <TextInput style={styles.placeholder} placeholder="  N°"></TextInput>
        <Text style={{fontSize: 20, fontWeight:'bold', marginTop:5 , marginBottom:5 }}>Tipo de amostra:</Text>
        <TextInput  style={styles.texto} placeholder='Digite o tipo de amostra'></TextInput>
        <Text style={{fontSize: 20, fontWeight:'bold', marginTop:5 , marginBottom:5 }} >Atributos:</Text>
        <View style={{flexDirection:'row', marginBottom:5}}>
          <TextInput style={styles.texto} id='inputText' placeholder='Digite o nome do atributo'></TextInput> 
          <Button title='  +  ' color='#775553' onPress={pushData}></Button>
        </View>
        <Pressable id='tabelaAtributos' style={styles.Atributos} onPress={removerAtributo}></Pressable>


        <View style={styles.botoes}>
        <Button color='#775553' title='VOLTAR' onPress={()=> navigation.navigate("Iniciar")} ></Button>
        <Button color='#775553' title='PROXIMO' onPress={()=> navigation.navigate("Verificar")}></Button>
      </View>
      </View>
      <View style={styles.ImagemFundo}>
        <Image style={styles.Imagem2} source={require('../assets/imagemFundo.png')}/>
      </View>
    </View>
}

export default Configurar;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },

  logo:{
    flex: 1,
    justifyContent: 'left',
    position:'absolute',
    screenLeft: 500, 
    alignItems: 'left',
  },

  Imagem:{
    width: 200,
    height: 200,
    right: 500,
    position:'relative'
    
  },

  ImagemFundo:{
    flex:1,
    alignItems:'flex-end',
    backgroundsize:'cover',
    position:'absolute',
    margin: 670
  },
  
  Imagem2:{
    width: 1900,
    height:250,
    backgroundsize:'cover', 
  },

  Atributos: {
    color: 'black',
    fontSize: 20,
    borderWidth:1,
    marginTop:2,
    marginBottom:2,
    borderRadius:5,
    cursor:'pointer'

  },

  
  botoes: {
    width: 500,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  placeholder:{
    fontSize: 20,
    borderWidth:1,
    borderTopWidth: 3.5,
    borderColor: '000',
    borderRadius: 5,
    width: 45
  },
  texto:{
    fontSize: 20,
    borderWidth:1,
    borderTopWidth: 3.5,
    borderColor: '000',
    borderRadius: 5,
    marginRight:3,
    width:450,
  },

});
