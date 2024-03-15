import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />

      <Button title="Home" onPress={() => navigation.navigate("Home")} />

      <Button title="HomePaciente" onPress={() => navigation.navigate("HomePaciente")} />
      
      <Button title="LocalAppointment" onPress={() => navigation.navigate("LocalAppointment")} />

      <Button title="ViewPrecription" onPress={() => navigation.navigate("ViewPrecription")} />

      <Button title="Camerabox" onPress={() => navigation.navigate("Camerabox")} />
      


    </View>
  );
};
