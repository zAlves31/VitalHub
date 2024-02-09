import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34899f'
})`
width: 90%;
height: 53px;
padding: 16px;
margin-top: 30px;

border: 2px solid #49b3ba;
border-radius: 5px;
font-size: 16px;
font-family: 'MontserratAlternates_600SemiBold';
`

export const Inputnumeric = styled.TextInput`
    width: 65px;
    height: 62px;
    border: 2px solid #49b3ba;
    font-size: 40px;
    margin:10px ;
    font-family:'Quicksand_600SemiBold';
    border-radius:5px ;
    color:#34898F ;

`
export const Inputuser = styled.TextInput`
    width: 90%;
    height: 120px;
    border: 2px solid #49b3ba;
    font-size: 14px;
    margin:10px ;
    font-family:'MontserratAlternates_600SemiBold';
    border-radius:5px ;
    color:#34898F ;
    padding: 16px;
    text-align: justify;
    text-align-vertical:top ;
`

export const Inputuserm = styled(Input)`
    font-size:14px ;
    font-family:'MontserratAlternates_600SemiBold';
`
