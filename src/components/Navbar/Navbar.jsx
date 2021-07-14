import React from "react";
import {
  Nav,
  NavWrapper,
  NavLogo,
  BurgerMenu,
  NavItem,
  NavLinks,
  NavMenu,
  ActionsMenu,
  NavLinkR,
} from "./NavStyles";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import * as Scroll from "react-scroll";
// import Logo from '../../assets/OG_Brands_Web_180x 1logo yellow.png'
import { Redirect } from "react-router-dom";

const Navbar = ({ isOpen, toggle }) => {
  var scroll = Scroll.animateScroll;

  const handleScroll = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavWrapper>
          <NavLogo to="/" onClick={handleScroll} />
          <BurgerMenu onClick={toggle}>
            <FaBars />
          </BurgerMenu>
          <NavMenu>
            <NavItem>
              <NavLinkR to="/">Home</NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR to="/store-locator">Store Locator</NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR to="/contact-Us">Contact Us</NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR to="/distributor">Distributor</NavLinkR>
            </NavItem>
          </NavMenu>
          {/* <ActionsMenu>
                        <NavItem>
                            <NavLinks to='hero'><FaSearch/></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='hero'><FaShoppingCart/></NavLinks>
                        </NavItem>  
                    </ActionsMenu> */}
        </NavWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
