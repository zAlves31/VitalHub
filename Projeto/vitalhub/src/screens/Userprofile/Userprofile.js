import { Buttonprofile } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container, Containerprofile, Containerprofilecep, Containeruser } from "../../components/Container/Style"
import { Imageuser } from "../../components/Logo/Style"
import { Scroll } from "../../components/Scroll/scroll"
import { Subtitleuser, Title } from "../../components/Title/Style"
import { BoxInput }  from "../../components/BoxInput/index"

export const Userprofile = () => {
    return(
        <Container>
            <Imageuser source={require("../../assets/userimage.png")} />
            <Title>Richard Kosta</Title>

            <Scroll>

                <Containeruser>
                    <Subtitleuser>22 anos</Subtitleuser>
                    <Subtitleuser>richard.kosta@gmail.com</Subtitleuser>
                </Containeruser>

                <Containerprofile>
                    <BoxInput
                       fieldWidht={80}
                       textLabel='Data de nascimento:'
                       placeholder='DD/MM/AAAA'
                    />

                    <BoxInput
                        fieldWidht={80}
                        textLabel='CPF:'
                        placeholder='859********'
                    />

                    <BoxInput
                        fieldWidht={80}
                        textLabel='Endereço'
                        placeholder='Rua Vicenso Silva, 987'
                    />
                    

                    <Containerprofilecep>

                        <BoxInput
                            fieldWidht={45}
                            textLabel='CEP'
                            placeholder='06548-909'
                        />
                        <BoxInput
                            fieldWidht={45}
                            textLabel='Cidade'
                            placeholder='Moema-SP'
                        />
                        
                    </Containerprofilecep>

                    <Buttonprofile>
                        <ButtonTitle>EDITAR</ButtonTitle>
                    </Buttonprofile>

                    <Buttonprofile>
                        <ButtonTitle>SALVAR</ButtonTitle>
                    </Buttonprofile>
                </Containerprofile>



            </Scroll>

        </Container>
    )
}