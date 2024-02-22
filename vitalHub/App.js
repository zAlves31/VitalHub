import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

//import das fonts
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";

import { Quicksand_500Medium, Quicksand_400Regular,Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";

import { Home } from "./src/screens/Home/Home";
import { StatusBar } from "react-native";
import { Account } from "./src/screens/Account/Account";
import { Recoverpassword } from "./src/screens/Recoverpassword/Recoverpassword";
import { Validatecode } from "./src/screens/Validatecode/Validatecode";
import { Resetpassword } from "./src/screens/Resetpassword/Resetpassword";


export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_600SemiBold
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    // envolve a estrutura da navegação
    <NavigationContainer>

      {/* componente para navegação */}
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/* tela */}
        <Stack.Screen
          // nome da tela
          name="Navegacao"
          //componente que será chamado
          component={Navegacao}
          //título da tela
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          // nome da tela
          name="Login"
          //componente que será chamado
          component={Login}
          //título da tela
          options={{ title: "Login" }}
        />

        <Stack.Screen
          // nome da tela
          name="Home"
          //componente que será chamado
          component={Home}
          //título da tela
          options={{ title: "Home" }}

          
        />

        <Stack.Screen 
          name='Account'
          component={Account}
          options={{ title:'Account'}}        
        />

        <Stack.Screen 
          name='Recoverpassword'
          component={Recoverpassword}
          options={{ title: 'Recoverpassword' }}        
        />

        <Stack.Screen 
          name='Validatecode'
          component={Validatecode}
          options={{ title: 'Validatecode' }}        
        />

        <Stack.Screen 
          name='Resetpassword'
          component={Resetpassword}
          options={{ title: 'Resetpassword' }}        
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}