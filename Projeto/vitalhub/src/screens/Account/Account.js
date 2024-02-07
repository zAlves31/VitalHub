import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Styled"
import { LinkCalcel } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Text } from "react-native"


export const Account = ({navigation}) => {
    return(
        <Container>
            <Logo source={require('../../assets/logo.png')}/>

            <Title>Criar conta</Title>

            <Text>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Text>

            <Input placeholder="Usuário ou E-mail"/>

            <Input placeholder="Senha"/>

            <Input placeholder="Confirme sua senha"/>

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>

            <LinkCalcel title="login" onPress={() => navigation.navigate("Login")}>Cancelar</LinkCalcel> 
            
        </Container>
        
    )
}