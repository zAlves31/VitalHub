import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from './src/screens/Navigation/Navigation';
import { login, loginNav } from './src/screens/Login/Login';

const Stack = createNativeStackNavigator();

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import { Account } from './src/screens/Account/Account';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { Recoverpassword } from './src/screens/Recoverpassword/Recoverpassword';
import { Validatecode } from './src/screens/Validatecode/Validatecode';
import { Resetpassword } from './src/screens/Resetpassword/Resetpassword';

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold, MontserratAlternates_500Medium,MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_600SemiBold
  })

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (
 
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen 
        name='Navegacao'
        component={Navigation}
        options={{ title: 'Navegacao' }}
        />

        <Stack.Screen 
        name='Login'
        component={login}
        options={{ title: 'Login' }}        
        />

        <Stack.Screen 
        name='Account'
        component={Account}
        options={{ title: 'Account' }}        
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

