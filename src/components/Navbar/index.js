import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
//import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnLinkIcon,
  NavLinksHref
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Cinek Koparki
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="services"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Usługi</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="equipment"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Sprzęt</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="locations"
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Lokalizacje</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksHref to="/kontakt">Kontakt</NavLinksHref>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="tel:+48783535487"><NavBtnLinkIcon />783 535 487</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
