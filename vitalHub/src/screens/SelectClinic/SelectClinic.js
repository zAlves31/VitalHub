import { ScrollView } from "react-native"
import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { CancelAppointment } from "../../components/Links/Style"
import { TitleB } from "../../components/Title/Style"
import { AppoimentCardClinic } from "../../components/AppoimentCardClinic/AppoimentCardClinic"


const Clinicas = [
    { id: 1, nome: "Clínica Natureh", endereco: "São Paulo, SP", avaliacao: "4.5", funcionamento: "Seg-Sex" },
    { id: 2, nome: "UPA Vila luzita", endereco: "Santo Andre, SP", avaliacao: "4.9", funcionamento: "Seg-Sex" },
    { id: 3, nome: "SP Oncologia Clínica", endereco: "São Paulo, SP", avaliacao: "4.3", funcionamento: "Seg-Sex" },
    { id: 4, nome: "Diamond Pró-Mulher", endereco: "São Paulo, SP", avaliacao: "4.3", funcionamento: "Seg-Sex" }
 
]

export const SelectClinic = ({navigation}) => {
    
    return (
        <Container>
            <TitleB>Selecionar clínica</TitleB>

            <ScrollView>
                {Clinicas.map(clinica => (
                    <AppoimentCardClinic
                        nome={clinica.nome}
                        endereco={clinica.endereco}
                        avaliacao={clinica.avaliacao}
                        funcionamento={clinica.funcionamento}
                    />
                ))}
            </ScrollView>


            <Button onPress={() => navigation.navigate("SelectDoctor")}>
                <ButtonTitle>
                    CONTINUAR
                </ButtonTitle>
            </Button>

            <CancelAppointment onPress={() => navigation.navigate("HomePaciente")}>Cancelar</CancelAppointment>
            

        </Container>
    )
}
