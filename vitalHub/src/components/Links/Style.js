import styled from "styled-components";

export const LinkMedium = styled.Text`
    font-size: 14px ;
    font-family: 'MontserratAlternates_500Medium' ;
    color:#8c8a97 ;
    margin-top: 10px ;
    align-self: flex-start ;
    margin-left: 20px ;
    margin-bottom: 15px ;
    text-decoration: underline ;
`
export const LinkBold = styled(LinkMedium)`
    color: #4d659d ;
    font-size:16px;
`

export const LinkCalcel = styled.Text`
    color:#4D659D ;
    text-decoration: underline;
    margin-top:18px ;
`

export const LinkResend = styled.Text`
    color:#4D659D ;
    text-decoration: underline;
    margin-top:18px ;
`

export const CancelAppointment = styled.Text`
color: #344F8F;
text-decoration: underline;
font-family: MontserratAlternates_600SemiBold;
margin-bottom: 80px;
margin-top: 40px;
`

export const LinkModal = styled(LinkMedium)`
margin-top: 40px;
`