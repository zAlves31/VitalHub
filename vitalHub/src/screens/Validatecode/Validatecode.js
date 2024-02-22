import { Button, ButtonIcon, IconClose } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container, Containerinput } from "../../components/Container/Style"
import { Inputnumeric } from "../../components/Input/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle, Title, SubtitleBlue } from "../../components/Title/Style"
import { LinkResend } from "../../components/Links/Style"

export const Validatecode = ({navigation}) => {
    return(
        <Container>

            <ButtonIcon onPress={() => navigation.navigate("Login")}>
                <IconClose source={require("../../assets/buttonclose.png")}/>
            </ButtonIcon> 

            <Logo source={require('../../assets/logo.png')}/>

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para</Subtitle>
            <SubtitleBlue>username@email.com</SubtitleBlue>


            <Containerinput>
                <Inputnumeric 
                    placeholder="0"
                    placeholderTextColor='#34898F'
                    keyboardType="numeric"
                    maxLength={1}
                    textAlign='center'
                 
                    
                    
                />

                <Inputnumeric 
                    placeholder="0"
                    placeholderTextColor='#34898F'
                    keyboardType="numeric"
                    maxLength={1}
                    textAlign='center'
                />

                <Inputnumeric 
                    placeholder="0"
                    placeholderTextColor='#34898F'
                    keyboardType="numeric"
                    maxLength={1}
                    textAlign='center'
                />

                <Inputnumeric 
                    placeholder="0"
                    placeholderTextColor='#34898F'
                    keyboardType="numeric"
                    maxLength={1}
                    textAlign='center'
                />

            </Containerinput>
            

            <Button onPress={() => navigation.navigate("Resetpassword")}>
                <ButtonTitle>ENTRAR</ButtonTitle>
            </Button>

            <LinkResend>Reenviar Código</LinkResend>

        </Container>
        
    )
}