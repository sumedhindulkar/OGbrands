import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer = styled.div`
    background-color: #000000;
`

export const FooterWrapper = styled.div`
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinks = styled.div`
    display: flex;
    justify-content: center;


    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 100px;
    margin-right: 100px;
    justify-content: space-between;


    @media screen and (max-width: 820px) {
        margin-left: 0;
        margin-right: 0;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-right: ${props => props.marginR ? props.marginR : '16px'};
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;


    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;

    }
`

export const LinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    color: #FEFAFA;

`

export const TitleImgWrap = styled(Link)`
    cursor: pointer;
    text-decoration: none;
`

export const LinkTitleImg = styled.img`
    margin-bottom: 16px;
    cursor: pointer;
    width: 70px;
`

export const LinkTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 260px;
    margin-bottom: 16px;
`


export const SocialLinkswrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    justify-content: space-between;
`

export const SocialIcon = styled.a`
    cursor: pointer;
    text-decoration: none;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0.5rem;
    font-size: 14px;    

    &:hover {
        color: #FCD838;
        transition: 0.3s ease-out;
    }
`

export const FooterLink1 = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
    font-size: 14px;    

    &:hover {
        color: #FCD838;
        transition: 0.3s ease-out;
    }
`

export const FooterText = styled.a`
    margin-top: 20px;
    font-size: 14px;
    color: white;
    cursor: pointer;
    text-decoration: none;  
`