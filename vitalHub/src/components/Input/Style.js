import styled from "styled-components";


export const InputText = styled.TextInput`
/* width: ${props => `${props.fieldWidht}%`};
height: ${props => `${props.fieldHeight}px`}; */
background-color: #F5F3F3;
font-size: 14px;
font-family: MontserratAlternates_500Medium;
border-radius: 10px;
padding: 20px;

`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34898f'
})`
    width: 90% ;
    height: 53px ;
    padding: 16px;
    margin-top: 15px ;

    border: 2px solid #49b3ba ;
    border-radius: 5px;
    color: #34898f ;
    font-size:16px ;
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