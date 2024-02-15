import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container, Containerrecord, Containeruser } from "../../components/Container/Style"
import { Inputuser, Inputuserm } from "../../components/Input/Styled"
import { LinkCalcel } from "../../components/Links/Style"
import { Imageuser } from "../../components/Logo/Style"
import { Subtitleinput, Subtitleuser, Title } from "../../components/Title/Style"
import { Scroll } from "../../components/Scroll/scroll"

export const Userquery = () => {
    return (

        <Container>
            <Imageuser source={require("../../assets/userimage.png")} />
            <Title>Richard Kosta</Title>

            <Scroll>

            <Containeruser>
                <Subtitleuser>22 anos</Subtitleuser>
                <Subtitleuser>richard.kosta@gmail.com</Subtitleuser>
            </Containeruser>
            
                <Containerrecord>


                    <Subtitleinput>Descrição da consulta</Subtitleinput>
                        <Inputuser
                            placeholder="Descrição"
                            placeholderTextColor='#34898F'
                            multiline
                            numberOfLines={5}
                            maxLength={200}

                        />

                    <Subtitleinput>Diagnóstico do paciente</Subtitleinput>
                        <Inputuserm
                            placeholder="Diagnóstico"
                            placeholderTextColor='#34898F'
                            maxLength={60}


                        />

                    <Subtitleinput>Prescrição medica</Subtitleinput>
                        <Inputuser
                            placeholder="Prescrição medica"
                            placeholderTextColor='#34898F'
                            multiline
                            numberOfLines={6}
                            maxLength={250}

                        />

                    <Button>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </Button>

                    <LinkCalcel>Cancelar</LinkCalcel>

                </Containerrecord>
            </Scroll>


        </Container>
    )
}