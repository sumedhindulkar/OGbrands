import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const SideBarWrapper = styled.aside`
    position: fixed;
    z-index: 900;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: 0.3s  ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SidebarContainer = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6,60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #F2C94C;
        transition:0.2s ease-in-out;
    }
`

export const SidebarLinkR = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #F2C94C;
        transition:0.2s ease-in-out;
    }
`

export const SidebarLinkIcon = styled.div`
    margin-right: 20px;

        &:hover {
        color: #F2C94C;
        transition:0.2s ease-in-out;
    }
`

export const SidebarLinkWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 24px;
`
