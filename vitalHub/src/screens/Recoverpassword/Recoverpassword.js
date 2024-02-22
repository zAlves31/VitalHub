import { Button, ButtonIcon, IconReturn } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"

export const Recoverpassword = ({navigation}) => {
    return(
        <Container>

            <ButtonIcon onPress={() => navigation.navigate("Login")}>
                <IconReturn source={require("../../assets/buttonback.png")}/>
            </ButtonIcon> 
            <Logo source={require('../../assets/logo.png')}/>

            <Title>Recuperar senha</Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

            <Input placeholder="Usuário ou E-mail"/>

            <Button onPress={() => navigation.navigate("Validatecode")} >
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </Button>


        </Container>
    )
}