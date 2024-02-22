import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Style"
import { LinkCalcel } from "../../components/Links/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title } from "../../components/Title/Style"


export const Account = ({navigation}) => {
    return(
        <Container>
            <Logo source={require('../../assets/logo.png')}/>

            <Title>Criar conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>

            <Input placeholder="Usuário ou E-mail"/>

            <Input
                placeholder="Senha"
                secureTextEntry={true}  
            />

            <Input 
                placeholder="Confirme sua senha"
                secureTextEntry={true}  
            />

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>

            <LinkCalcel title="login" onPress={() => navigation.navigate("Login")}>Cancelar</LinkCalcel> 
            
        </Container>
        
    )
}