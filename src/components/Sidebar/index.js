import React from 'react'
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarLinkHref
} from './SidebarElements'
import { NavBtnLinkIcon } from '../Navbar/NavbarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="services" onClick={toggle}>
                        Usługi
                    </SidebarLink>
                    <SidebarLink to="equipment" onClick={toggle}>
                        Sprzęt
                    </SidebarLink>
                    <SidebarLink to="locations" onClick={toggle}>
                        Lokalizacje
                    </SidebarLink>
                    <SidebarLinkHref to="/kontakt" onClick={toggle}>
                        Kontakt
                    </SidebarLinkHref>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/getInTouch"><NavBtnLinkIcon />
                        146812 067
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
