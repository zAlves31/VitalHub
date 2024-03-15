import { Modal } from "react-native"
import { ModalContent, ViewModal } from "../CancellationModal/style"
import { TextModal } from "../Title/Style"
import { LinkModal } from "../Links/Style"
import { ModalImage } from "../UserPicture/Style"
import { Title } from "../Title/Style"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"

export const LocalModal = ({ navigation, appointmentData, visible, setShowModalLocal, ...rest }) => {

    const { nome, crm, imagem, especialidade } = appointmentData || {};

    onPressHandler = () => {
        navigation.navigate("HomePaciente")
        setShowModalLocal(false)
    }

    onPressContinue = () => {
        navigation.navigate("LocalAppointment")
        setShowModalLocal(false)
    }

    return (
        <Modal  {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ModalContent>

                    <ModalImage
                        source={imagem}
                    />

                    <Title>{nome}</Title>

                    <TextModal>{especialidade}    {crm}</TextModal>

                    <Button onPress={() => {onPressContinue()}}>
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </Button>

                    <LinkModal onPress={() => { onPressHandler() }}>
                        Cancelar
                    </LinkModal>


                </ModalContent>
            </ViewModal>
        </Modal>
    )
}