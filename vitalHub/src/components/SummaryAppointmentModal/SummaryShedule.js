import { Modal } from "react-native"
import { Subtitle, SubtitleSummary, Title } from "../Title/Style"
import { LabelSchedule } from "../ScheduleModal/Style"
import { BoxSchedule, CancelSchedule, SubTitleSchedule, ContentModal, ViewModal } from "./Style"
import { Button } from "../Button/Style"
import { ButtonTitle } from "../ButtonTitle/Style"

export const SummaryScheduleModal = ({
    navigation, visible, setShowModalSummary, ...rest
}) => {



    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModal>
                <ContentModal>
                    <Title>Agendar Consulta</Title>
                    <SubTitleSchedule>Consulte os dados selecionados para a sua consulta</SubTitleSchedule>

                    <BoxSchedule>
                        <LabelSchedule>Data da consulta</LabelSchedule>
                        <SubtitleSummary>1 de Novembro de 2023</SubtitleSummary>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Médico(a) da consulta</LabelSchedule>
                        <SubtitleSummary>Dra Alessandra</SubtitleSummary>
                        <SubtitleSummary>Demartologa, Esteticista</SubtitleSummary>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Local da consulta</LabelSchedule>
                        <SubtitleSummary>São Paulo, SP</SubtitleSummary>
                    </BoxSchedule>
                    <BoxSchedule>
                        <LabelSchedule>Tipo da consulta</LabelSchedule>
                        <SubtitleSummary>Rotina</SubtitleSummary>
                    </BoxSchedule>

                    <Button>
                        <ButtonTitle>
                            CONFIRMAR
                        </ButtonTitle>
                    </Button>

                    <CancelSchedule onPress={() => setShowModalSummary(false)} >Cancelar</CancelSchedule>


                </ContentModal>
            </ViewModal>
        </Modal>
    )
}