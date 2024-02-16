import styled from "styled-components"

import {LinearGradient} from "expo-linear-gradient"

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #ffffff;
margin-top: 30px;
`

export const Containerinput = styled.SafeAreaView`
    flex-direction:row;
    margin:10px ;
    margin-top:50px ;
    
`

export const Containeruser = styled.SafeAreaView`
    flex-direction:row;
    justify-content:center ;
`
export const Containerrecord = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #ffffff;
    margin-top: 30px;

`
export const Containerprofile = styled.SafeAreaView`
    width:80% ;
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

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ['#60BFC5', '#496BBA'],
    start: {x: -0.05, y: 1.08},
    end: {x:1, y:0},
})`
    width:100%;
    height:144px;
    border-radius:15px ;
    
`

