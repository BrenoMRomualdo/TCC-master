import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IniciarTela from './screens/IniciarTela';
import ConfigurarTela from './screens/ConfigurarTela';
import VerificarTela from './screens/VerificarTela';

const Stack = createStackNavigator();

function App(){
  <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Iniciar">

        <Stack.Screen 
        name="Iniciar" 
        component={IniciarTela}/>

        <Stack.Screen 
        name="Configurar" 
        component={ConfigurarTela}/>

        <Stack.Screen 
        name="Verificar" 
        component={VerificarTela}/>

        </Stack.Navigator>
      </NavigationContainer>
}

export default App; 