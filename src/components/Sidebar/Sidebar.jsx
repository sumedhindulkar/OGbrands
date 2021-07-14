import React from 'react'
import { SideBarWrapper,CloseIcon,Icon,SidebarContainer,SidebarMenu,SidebarLink,SidebarLinkWrap,SidebarLinkIcon,SidebarLinkR} from './SidebarStyle'
import {FaSearch,FaShoppingCart} from 'react-icons/fa'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SideBarWrapper isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarContainer onClick={toggle}>
                <SidebarMenu>
                    <SidebarLinkR onClick={toggle} to='/'>Home</SidebarLinkR>
                    <SidebarLink onClick={toggle} to='catalog'>Shop</SidebarLink>
                    <SidebarLinkR onClick={toggle} to='/store-locator'>Store Locator</SidebarLinkR>
                    <SidebarLinkR onClick={toggle} to='/contact-us'>Contact Us</SidebarLinkR>
                    {/* <SidebarLinkWrap>
                        <SidebarLinkIcon><FaSearch size='1.5rem'/></SidebarLinkIcon>
                        <SidebarLinkIcon><FaShoppingCart size='1.5rem'/></SidebarLinkIcon>
                    </SidebarLinkWrap> */}
                </SidebarMenu>
            </SidebarContainer>
        </SideBarWrapper>
    )
}

export default Sidebar
