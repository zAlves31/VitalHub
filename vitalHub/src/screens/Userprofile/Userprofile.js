import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container, Containerprofile, Containerprofilecep, Containeruser } from "../../components/Container/Style"
import { Imageuser } from "../../components/Logo/Style"
import { Subtitleuser, Title } from "../../components/Title/Style"
import { BoxInput }  from "../../components/BoxInput/BoxInput"
import { Button } from "../../components/Button/Style"
import { Scroll } from "../../components/Scroll/Scroll"

export const Userprofile = () => {
    return(
        <Container>
            <Imageuser source={{ uri: "https://github.com/gustavopasqualetti.png" }} />
            <Title>Gustavo Pasqualetti</Title>

            <Scroll>

                <Containeruser>
                    <Subtitleuser>18 anos</Subtitleuser>
                    <Subtitleuser>gustavo.pasqualetti@gmail.com</Subtitleuser>
                </Containeruser>

                <Containerprofile>
                    <BoxInput
                       fieldWidht={80}
                       textLabel='Data de nascimento:'
                       placeholder='DD/MM/AAAA'
                       editable={true}
                       keyboardType="numeric"

                    />

                    <BoxInput
                        fieldWidht={80}
                        textLabel='CPF:'
                        placeholder='CPF'
                        editable={true}
                        keyboardType="numeric"
                    />

                    <BoxInput
                        fieldWidht={80}
                        textLabel='Endereço'
                        placeholder='Endereço'
                        editable={true}
                    />


                    <Containerprofilecep>

                        <BoxInput
                            fieldWidht={45}
                            textLabel='CEP'
                            placeholder='Cep'
                            editable={true}
                            keyboardType="numeric"
                        />
                        <BoxInput
                            fieldWidht={45}
                            textLabel='Cidade'
                            placeholder='Cidade'
                            editable={true}
                        />

                    </Containerprofilecep>

                    <Button>
                        <ButtonTitle>EDITAR</ButtonTitle>
                    </Button>

                    <Button>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </Button>
                </Containerprofile>



            </Scroll>

        </Container>
    )
}