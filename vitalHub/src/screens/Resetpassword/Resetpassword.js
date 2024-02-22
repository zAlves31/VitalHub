import { Button, ButtonIcon, IconClose } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"

export const Resetpassword = ({navigation}) => {
    return(
        <Container>

            <ButtonIcon onPress={() => navigation.navigate("Login")}>
                <IconClose source={require("../../assets/buttonclose.png")}/>
            </ButtonIcon> 

            <Logo source={require('../../assets/logo.png')}/>

            <Title>Redefinir senha</Title>

            <Subtitle>Insira e confirme a sua nova senha</Subtitle>

            <Input
                placeholder="Nova Senha"
                secureTextEntry={true}  
            />

            <Input 
                placeholder="Confirmar nova senha"
                secureTextEntry={true}  
            />

            <Button>
                <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
            </Button>
        </Container>
    )
}