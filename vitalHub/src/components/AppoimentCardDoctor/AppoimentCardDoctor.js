import { useState } from "react";
import { Title } from "../Title/Style"
import { ContainerCardDoctor, ContentDoctor, DoctorInfo, ImageCardDoctor, Subtitleespecialidade } from "./Style"

export const AppoimentCardDoctor = ({
    nome,
    especialidade,
    foto
}) => {

    const [clicked, setClicked] = useState(false); 

    const handleClick = () => {
        setClicked(!clicked); 
    };

    return (
        <ContainerCardDoctor onPress={handleClick} clicked={clicked}>
            <ContentDoctor>

                <ImageCardDoctor source={foto} />

                <DoctorInfo>
                    <Title>{nome}</Title>
                    <Subtitleespecialidade>{especialidade}</Subtitleespecialidade>
                </DoctorInfo>


            </ContentDoctor>
        </ContainerCardDoctor>
    )
}
