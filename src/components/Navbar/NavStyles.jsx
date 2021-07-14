import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    padding-right: 100px;
    padding-left: 100px;

    @media screen and (max-width: 960px) {
        transition: 0ms.8s all ease;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 86px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
  
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const BurgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ActionsMenu = styled.ul`
    display: flex;
    align-items: center;
    
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 86px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display:flex;
    align-items: center;    
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        border-bottom: 3px solid #F2C94C;
    }

    &.active {
        border-bottom: 3px solid #F2C94C;
    }
`

export const NavLinkR = styled(LinkR)`
    color: #fff;
    display:flex;
    align-items: center;    
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        border-bottom: 3px solid #F2C94C;
    }

    &.active {
        border-bottom: 3px solid #F2C94C;
    }
`

