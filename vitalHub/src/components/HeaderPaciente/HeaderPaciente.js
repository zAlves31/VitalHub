import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const HeaderPaciente = () => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={{ uri: "https://github.com/gustavopasqualetti.png" }} />
          <DataUser>
            <TextDefault>Bem vindo !</TextDefault>
            <NameUser>Gustavo Pasqualetti</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};