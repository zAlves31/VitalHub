import { ScrollView } from "react-native"
import { Button } from "../../components/Button/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { CancelAppointment } from "../../components/Links/Style"
import { TitleB } from "../../components/Title/Style"
import { AppoimentCardDoctor } from "../../components/AppoimentCardDoctor/AppoimentCardDoctor"
 

const Doutor = [
    { id: 1, nome: "Dr.Joao", especialidade: "Demartologa, Esteticista", foto:{ uri: ("https://github.com/zAlves31.png") } },
    { id: 2, nome: "Dr.Marcelo", especialidade: "Cirurgião, Cardiologista", foto:{ uri: ("https://github.com/MarceloAC04.png") }  },
    { id: 3, nome: "Dr.Eduardo", especialidade: "Clínico, Pediatra", foto:{ uri: ("https://github.com/Eduardopasqualetti.png") } }
 
]

export const SelectDoctor = ({navigation}) => {
    
    return (
        <Container>
            <TitleB>Selecionar médico</TitleB>

            <ScrollView>
                {Doutor.map(doutor => (
                    <AppoimentCardDoctor
                        nome={doutor.nome}
                        especialidade={doutor.especialidade}
                        foto={doutor.foto}
                        
                    />
                ))}
            </ScrollView>


            <Button onPress={() => navigation.navigate("SelectDate")}>
                <ButtonTitle>
                    CONTINUAR
                </ButtonTitle>
            </Button>

            <CancelAppointment onPress={() => navigation.navigate("HomePaciente")}>Cancelar</CancelAppointment>
            

        </Container>
    )
}
