import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonSecondary, ButtonSecondaryTitle, ButtonTitle,  ButtonModal } from "../Button/Style";
import { ModalContent, ModalText, PatientModal } from "../CancellationModal/style";
import { RecordImage } from "../AppointmentCard/Style";


const DoctorModal = ({ navigation, visible, setshowModalDoctor, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContent>
                    <RecordImage source={{ uri: "https://github.com/zAlves31.png"}}/>

                    <Title>Dr.Joao</Title>

                    <ModalText>
                        Dermatologista CRM-15286
                    </ModalText>

                    <ButtonModal>
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setshowModalDoctor(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>
                </ModalContent>
            </PatientModal>
        </Modal>
    );
};

export default DoctorModal;