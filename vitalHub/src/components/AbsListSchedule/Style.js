import styled, { css } from "styled-components";

// componente de botão - ButtonTabsStyle
export const ButtonTabsStyles = styled.TouchableHighlight`
    padding: 15px 18px ;
    border-radius: 5px ;

    /* se o botão estiver clicado, aplica-se o fundo azul,caso contrário, fundo transparente*/
    ${props => props.clickButton ? css`
        background-color: #60BFC5 ;
    `: css`
        background-color: transparent;
        border: 2px solid #60BFC5;
    `}
`

export const ButtonTextStyles = styled.Text`
    font-size: 15px ;
    font-family:'MontserratAlternates_600SemiBold' ;

    /* se o clickButton for true, a cor da fonte será branca, caso contrário azul */
    ${props => props.clickButton ? css`
        color: #fbfbfb
    `: css`
        color: #34898F;
    `}
`