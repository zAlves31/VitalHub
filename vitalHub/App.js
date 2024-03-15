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
import { Userprofile } from "./src/screens/Userprofile/Userprofile";
import { HomePaciente } from "./src/screens/HomePaciente/HomePaciente";
import { SelectClinic } from "./src/screens/SelectClinic/SelectClinic";
import { SelectDoctor } from "./src/screens/SelectDoctor/SelectDoctor";
import { SelectDate } from "./src/screens/SelectDate/SelectDate";
import { LocalAppointment } from "./src/screens/LocalAppointment/LocalAppointment";
import { InsertRecord } from "./src/screens/InsertRecord/InsertRecord";
import { ViewPrecription } from "./src/screens/ViewPrecription/ViewPrecription";
import Camerabox from "./src/screens/Camera/Camera";


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

        <Stack.Screen 
          name='Userprofile'
          component={Userprofile}
          options={{ title: 'Userprofile' }}        
        />

        <Stack.Screen 
          name='HomePaciente'
          component={HomePaciente}
          options={{ title: 'HomePaciente' }}        
        />

        <Stack.Screen 
          name='SelectClinic'
          component={SelectClinic}
          options={{ title: 'SelectClinic' }}        
        />

        <Stack.Screen 
          name='SelectDoctor'
          component={SelectDoctor}
          options={{ title: 'SelectDoctor' }}        
        />

        <Stack.Screen 
          name='SelectDate'
          component={SelectDate}
          options={{ title: 'SelectDate' }}        
        />

        <Stack.Screen 
          name='LocalAppointment'
          component={LocalAppointment}
          options={{ title: 'LocalAppointment' }}        
        />   

        <Stack.Screen 
          name='InsertRecord'
          component={InsertRecord}
          options={{ title: 'InsertRecord' }}        
        />   

        <Stack.Screen 
          name='ViewPrecription'
          component={ViewPrecription}
          options={{ title: 'ViewPrecription' }}        
        />  

        <Stack.Screen 
          name='Camerabox'
          component={Camerabox}
          options={{ title: 'Camerabox' }}        
        />   


        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
