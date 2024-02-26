import styled from "styled-components";

//import lib linear gradient
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ["#60BFC5", "#496BBA"],
  start: { x: -0.05, y: 1.08 },
  end: { x: 1, y: 0 },
  
})`
  width: 100%;
  padding: 20px;
  padding-bottom: 22px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 4px 15px #00000014;
`;

export const Containerinput = styled.SafeAreaView`
    flex-direction:row;
    margin:10px ;
    margin-top:50px ;
    
`
export const Containerprofile = styled.SafeAreaView`
    width:100% ;
    flex: 1;
    align-items: center;
    background-color: #ffffff;
    margin-top: 30px;
`
export const Containerprofilecep = styled.SafeAreaView`
    width: 80%;
    justify-content: space-between;
    flex-direction: row;
    align-items:center ;
  `

export const Containeruser = styled.SafeAreaView`
    width: 80%;
    justify-content: space-between;
    flex-direction: row;
    align-items:center ;
  `