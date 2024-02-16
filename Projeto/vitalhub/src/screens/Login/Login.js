import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Styled"
import { LinkMedium, LinkAccount } from "../../components/Links/Style"
import { ButtonTitle, ButtonTitleGoogle } from "../../components/ButtonTitle/Style"
import { Button, ButtonGoogle } from "../../components/Button/Style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount} from "./Styled"


export const login = ({navigation}) => {
    return(
        <Container>
            <Logo source={require('../../assets/logo.png')}/>

             <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail"/>
            
            <Input 
                placeholder="Senha"
                secureTextEntry={true}    
            />

            <LinkMedium onPress={() => navigation.navigate("Recoverpassword")}>Esqueceu sua senha?</LinkMedium>

            <Button onPress={() => navigation.navigate("Userprofile")}> 
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>ENTRAR COM GOOGLE</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount> 
                <LinkAccount onPress={() => navigation.navigate("Account")} title="Account">Crie uma conta agora!</LinkAccount>
            </ContentAccount>

        </Container>
    )
}