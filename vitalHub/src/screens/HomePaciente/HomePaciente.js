import { StatusBar } from "react-native";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { HeaderPaciente } from "../../components/HeaderPaciente/HeaderPaciente"

import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import { ListComponent } from "../../components/List/List";
import { AppointmentCardPaciente } from "../../components/AppointmentCardPaciente/AppointmentCardPaciente";
import CancellationModal from "../../components/CancellationModal/CancellationModal";
import { FilterAppointment } from "../Home/Style";
import { IconeConsulta } from "../../components/Logo/Style";
import { ButtonSchedule } from "../../components/Button/Style";
import ScheduleModal from "../../components/ScheduleModal/ScheduleModal";
import { useState } from "react";
import DoctorModal from "../../components/DoctorModal/DoctorModal";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
  ];

export const HomePaciente = ({navigation}) => {
    const [statusLista, setStatusLista] = useState("pendente");
    const [showModalSchedule, setshowModalSchedule] = useState(false);
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalDoctor, setshowModalDoctor] = useState(false);
    const [showModalAppointment, setShowAppointment] = useState(false);
    return(
        <Container>

            <StatusBar />

            <HeaderPaciente/>

            <CalendarHome />

            <FilterAppointment>
                {/* Botão agendado */}
                <AbsListAppointment
                textButton={"Agendadas"}
                clickButton={statusLista === "pendente"}
                onPress={() => setStatusLista("pendente")}
                />

                {/* Botão realizado */}
                <AbsListAppointment
                textButton={"Realizadas"}
                clickButton={statusLista === "realizado"}
                onPress={() => setStatusLista("realizado")}
                />

                {/* Botão cancelado */}
                <AbsListAppointment
                textButton={"Canceladas"}
                clickButton={statusLista === "cancelado"}
                onPress={() => setStatusLista("cancelado")}
                />
            </FilterAppointment>

            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}
    
                renderItem={({item}) => 
                    statusLista == item.situacao && (
                        <AppointmentCardPaciente
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowAppointment(true)}
                        /> 
                    )
                }
            />


            <ButtonSchedule onPress={() => setshowModalSchedule(true)}>
                
                <IconeConsulta 
                    source={require("../../assets/Iconeconsulta.png")} 
                    navigation={navigation}
                />
            </ButtonSchedule>
            
            <CancellationModal 
            visible={showModalCancel}
            setShowModalCancel={setShowModalCancel}
            />

            <ScheduleModal
                visible={showModalSchedule}
                setshowModalSchedule={setshowModalSchedule}
                navigation={navigation}
            />

            <DoctorModal
                visible={showModalDoctor}
                setshowModalDoctor={setshowModalDoctor}
                navigation={navigation}
            />



        </Container>
            
    );
}