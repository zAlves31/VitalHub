import { Button, View } from "react-native"

export const Navigation = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
            <Button
            title="login"
            onPress={() => navigation.navigate("Login")}
            />

            <Button
            title="Userquery"
            onPress={() => navigation.navigate("Userquery")}
            />

            <Button
            title="Home"
            onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}