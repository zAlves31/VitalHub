import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonSecondary, ButtonSecondaryTitle, ButtonTitle,  ButtonModal } from "../Button/Style";
import { ModalContent, ModalText, PatientModal } from "./style";

const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>

                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>

                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default CancellationModal;