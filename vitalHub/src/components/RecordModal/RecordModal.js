import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonSecondary, ButtonSecondaryTitle, ButtonTitle,  ButtonModal } from "../Button/Style";
import { ModalContent, ModalText, PatientModal } from "../CancellationModal/style";
import { RecordImage } from "../AppointmentCard/Style";


const RecordModal = ({ visible, setShowAppointment, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <RecordImage source={{ uri: "https://github.com/gustavopasqualetti.png" }} />

                    <Title>Gustavo Pasqualetti</Title>

                    <ModalText>
                        18 anos gustavo@gmail.com
                    </ModalText>

                    <ButtonModal>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowAppointment(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default RecordModal;