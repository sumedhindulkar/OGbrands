import styled from 'styled-components'

export const ContactUsContainer = styled.div`
    height: 860px;
`

export const ContactWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;   
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
`

export const Col = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: ${props => props.padding ? '100px' : 0};


    @media screen and (max-width: 480px) {
        width: 100%;
        padding: ${props => props.padding ? '50px' : 0};
    }
`

export const FormHeading = styled.h1`
    font-weight: 600;
    font-size: 48px;
    line-height: 25px;
    letter-spacing: 0.1px;
    color: #000000;
    padding-bottom: 50px;



    @media screen and (max-width: 1366px) {
        font-size: 40px;
    }


    @media screen and (max-width: 480px) {
        font-size: 25px;
        padding-bottom: 30px;
    }
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 500px;

    @media screen and (max-width: 480px) {
        height: 300px;
    }
`

export const FormField = styled.h4`
    font-weight: 300;
    font-size: 16.1237px;
    line-height: 22px;
    color: grey;
`

export const FormInput = styled.input`
    border: 0;
    outline: none;
    width: ${props => props.width ? props.width : '100%'};
    background: transparent;
    border-bottom: 1px solid grey;
`

export const ImgWrapper = styled.div`
    height: 70%;
    display: flex;
    background: #FCD804;
    justify-content: center;
    padding-top: 90px;


    @media screen and (max-width: 480px) {
      padding-top: 70px;
    }
`

export const Img = styled.img`
    @media screen and (max-width: 480px) {
       height: 220px;
    }
`

export const PurpleDiv = styled.div`
    height: 30%;
    background: #651FFF;
    opacity: 1;


    @media screen and (max-width: 480px) {
        height: 120px;
    }
`