import { useState } from "react";
import { Container } from "../../components/Container/Style"
import { TitleB } from "../../components/Title/Style"
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { CancelAppointment } from "../../components/Links/Style";
import FullCalender from "../../components/CalendarSelectDate/CalendarSelectDate"
import SelectInput from "../../components/SelectInput/SelectInput";
import { SummaryScheduleModal } from "../../components/SummaryAppointmentModal/SummaryShedule";

export const SelectDate = ({navigation }) => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const [showModalSummary, setShowModalSummary] = useState(false)

    return (
        <Container>
            <TitleB>Selecionar Data</TitleB>
            <FullCalender
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate}
            />

            <SelectInput
            labelText='Selecione um horário disponível'
            defaultText='Selecionar horário'
            handleSelectedFn={setSelectedTime}
            />

            <Button onPress={() => setShowModalSummary(true)}>
                <ButtonTitle>
                    CONFIRMAR
                </ButtonTitle>
            </Button>

            <CancelAppointment onPress={() => navigation.navigate("HomePaciente")}>Cancelar</CancelAppointment>

            <SummaryScheduleModal
                visible={showModalSummary}
                setShowModalSummary={setShowModalSummary}
                navigation={navigation}
            />

        </Container>
    )
}