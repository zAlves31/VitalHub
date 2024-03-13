import MapView, { Marker } from "react-native-maps"
import { BoxInput }  from "../../components/BoxInput/BoxInput"
import { Container, ContentInfo, ContentLocal } from "../../components/Container/Style"
import { Subtitle, Title } from "../../components/Title/Style"
import { ContainerAddress, ContainerLocal} from "./Style"
import { StyleSheet } from "react-native"


export const LocalAppointment = () => {
    return (
        <Container>
            <ContentLocal>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -23.6503,
                        longitude: -46.5640,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: -23.6503,
                            longitude: -46.5640,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005
                        }}
                        title='Destino'
                        description='Rua Roseira'
                        pinColor={'red'}
                    />
                </MapView>
            </ContentLocal>
            <ContentInfo>
                <ContainerLocal>
                    <Title>Clínica Natureh</Title>
                    <Subtitle>São Paulo, SP</Subtitle>
                </ContainerLocal>

                <BoxInput
                    fieldWidht={80}
                    textLabel='Endereco'
                    placeholder='Rua Vicenso Silva, 987'
                />
                <ContainerAddress>
                    <BoxInput
                        fieldWidht={35}
                        textLabel='Número'
                        placeholder='578'
                    />

                    <BoxInput
                        fieldWidht={35}
                        textLabel='Bairro'
                        placeholder='Moema-SP'
                    />

                </ContainerAddress>
            </ContentInfo>
        </Container>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',
        height: '60%'
    }

});