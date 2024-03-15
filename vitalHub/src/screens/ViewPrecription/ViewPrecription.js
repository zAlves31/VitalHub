import { useEffect, useState } from "react"
import { BoxInput } from "../../components/BoxInput/BoxInput"
import { InputText } from "../../components/BoxInput/Style"
import { Container, ContainerScroll } from "../../components/Container/Style"
import { CancelAppointment } from "../../components/Links/Style"
import { Subtitle, TitleC } from "../../components/Title/Style"
import { UserPicture } from "../../components/UserPicture/Style"
import { BoxPrescription, ButtonCancel, ButtonUpload, ContainerSubTitle, ContentUpload, Line, PrescriptionImage, TextBox, TextBox2, TextCancel, TitleBox } from "./Style"
import CameraModal from "../../components/CameraModal/CameraModal"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const ViewPrecription = ({ navigation, route }) => {
    const { photoUri } = route.params || {};
    const[isPhoto,setIsPhoto] = useState(true)

    function onPressPhoto() {
        navigation.navigate("CameraScreen");
        setIsPhoto(true)
    }

    function onPressCancel() {
        setIsPhoto(false);
        route.params = null
    }

    return (
        <ContainerScroll>
            <Container>
                <UserPicture source={{uri: ('https://github.com/gustavopasqualetti.png')}} />
                <TitleC>Dr Claudio</TitleC>

                <ContainerSubTitle>
                    <Subtitle>Cliníco geral</Subtitle>
                    <Subtitle>CRM-15286</Subtitle>
                </ContainerSubTitle>

                <BoxInput
                    fieldWidht={80}
                    textLabel={'Descrição da consulta'}
                    placeholder='O paciente possuí uma infecção no
                ouvido. Necessário repouse de 2 dias
                e acompanhamento médico constante'
                    multiline={true}
                    fieldHeight={120}

                />
                <BoxInput
                    fieldWidht={80}
                    fieldHeight={60}
                    textLabel={'Diagnóstico do paciente'}
                    placeholder={'Infecção no ouvido'}
                    multiline={true}
                />
                <BoxInput
                    fieldWidht={80}
                    textLabel={'Prescrição médica'}
                    placeholder='Medicamento: Advil
                Dosagem: 50 mg
                Frequência: 3 vezes ao dia
                Duração: 3 dias'
                    multiline={true}
                    fieldHeight={120}
                />

                <TitleBox>Exames médicos</TitleBox>

                {
                    photoUri && isPhoto ?
                        <PrescriptionImage
                            source={{ uri: photoUri }}
                            
                        />
                        :
                        <BoxPrescription>
                            <AntDesign name="upload" size={20} color="#4E4B59" />
                            <TextBox>Nenhuma foto informada</TextBox>
                        </BoxPrescription>
                }



                <ContentUpload>
                    <ButtonUpload onPress={() => {navigation.navigate("Camerabox")}}>
                        <MaterialCommunityIcons name="camera-plus-outline" size={22} color="white" />
                        <TextBox2>Enviar</TextBox2>
                    </ButtonUpload>
                    <ButtonCancel onPress={() => {onPressCancel()}}>
                        <TextCancel>Cancelar</TextCancel>
                    </ButtonCancel>
                </ContentUpload>


                <Line />

                <InputText
                    fieldWidht={250}
                    fieldHeight={80}
                    placeholder='Resultado do exame de sangue : tudo normal'
                    multiline={true}
                />

                <CancelAppointment onPress={() => navigation.replace("Main")}>
                    Voltar
                </CancelAppointment>

            </Container>
        </ContainerScroll>
    )
}