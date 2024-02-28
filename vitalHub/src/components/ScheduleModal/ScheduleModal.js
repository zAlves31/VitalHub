import { Modal } from "react-native";
import { PatientModal } from "../CancellationModal/style";
import { FilterAppointment } from "../../screens/Home/Style";
import { AbsListAppointment } from "../AbsListAppointment/AbsListAppointment";
import { useState } from "react";
import { BlueTitle, LabelSchedule, ModalContentSchedule, TypeButton } from "../ScheduleModal/Style"
import { SubtitleSchedule, Title } from "../Title/Style";
import { ButtonModalSchedule, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";
import { ContainerSchedule } from "../Container/Style";
import { AbsListSchedule } from "../AbsListSchedule/AbsListSchedule";
import { BoxInput } from "../BoxInput/BoxInput";

const ScheduleModal = ({navigation, visible, setshowModalSchedule, ...rest}) =>{
    const [statusLista, setStatusLista] = useState("pendente");
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <PatientModal>
                <ModalContentSchedule>
                    <Title>Agendar consulta</Title>

                        <SubtitleSchedule>Qual o nível da consulta</SubtitleSchedule>
                        <FilterAppointment>
                            {/* Botão Rotina */}
                            <AbsListSchedule
                            textButton={"Rotina"}
                            clickButton={statusLista === "pendente"}
                            onPress={() => setStatusLista("pendente")}
                            />

                            {/* Botão Exame */}
                            <AbsListSchedule
                            textButton={"Exame"}
                            clickButton={statusLista === "realizado"}
                            onPress={() => setStatusLista("realizado")}
                            />

                            {/* Botão Urgencia */}
                            <AbsListSchedule
                            textButton={"Urgência"}
                            clickButton={statusLista === "cancelado"}
                            onPress={() => setStatusLista("cancelado")}
                            />
                        </FilterAppointment>

                        <LabelSchedule>Informe a localização desejada</LabelSchedule>
                        <TypeButton>
                            <BlueTitle>Informe a localização</BlueTitle>
                        </TypeButton>
                        

                        <ContainerSchedule>
                            <ButtonModalSchedule onPress={() => {navigation.navigate("SelectClinic")}}>
                                <ButtonTitle>Continuar</ButtonTitle>
                            </ButtonModalSchedule>

                            <ButtonSecondary onPress={() => setshowModalSchedule(false)}>
                                <ButtonSecondaryTitle>
                                    Cancelar
                                </ButtonSecondaryTitle>
                            </ButtonSecondary>
                        </ContainerSchedule>
                        
                </ModalContentSchedule>
            </PatientModal>
    </Modal>
    );
    
};
export default ScheduleModal;