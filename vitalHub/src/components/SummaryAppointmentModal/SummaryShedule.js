import { Modal } from "react-native"
import { Subtitle, Title } from "../Title/Style"
import { LabelSchedule } from "../ScheduleModal/Style"
import { BoxSchedule, CancelSchedule, SubTitleSchedule, ContentModal, ViewModal } from "./Style"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"

export const SummaryScheduleModal = ({
    visible, setShowModalSummary, ...rest
}) => {



    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <Title>Agendar Consulta</Title>
                    <SubTitleSchedule>Consulte os dados selecionados para a sua consulta</SubTitleSchedule>

                    <BoxSchedule>
                        <LabelSchedule>Data da consulta</LabelSchedule>
                        <Subtitle>1 de Novembro de 2023</Subtitle>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Médico(a) da consulta</LabelSchedule>
                        <Subtitle>Dra Alessandra</Subtitle>
                        <Subtitle>Demartologa, Esteticista</Subtitle>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Local da consulta</LabelSchedule>
                        <Subtitle>São Paulo, SP</Subtitle>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Tipo da consulta</LabelSchedule>
                        <Subtitle>Rotina</Subtitle>
                    </BoxSchedule>

                    <Button>
                        <ButtonTitle>
                            CONFIRMAR
                        </ButtonTitle>
                    </Button>

                    <CancelSchedule>Cancelar</CancelSchedule>


                </ContentModal>
            </ViewModal>
        </Modal>
    )
}