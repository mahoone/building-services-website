import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterLinkHref
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>O firmie</FooterLinkTitle>
                            <FooterLink to="services"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Usługi</FooterLink>
                            <FooterLinkHref to="/in-progress">
                                Realizacje
                            </FooterLinkHref>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sprzęt</FooterLinkTitle>
                            <FooterLink to="equipment"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Sprzęt</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lokalizacje</FooterLinkTitle>
                            <FooterLink to="locations"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Lokalizacje</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Kontakt</FooterLinkTitle>
                            <FooterLinkHref to="/kontakt">
                                Kontakt
                            </FooterLinkHref>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Cinek Koparki</SocialLogo>
                        <WebsiteRights>Cinek Koparki {new Date().getFullYear()}
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer >
    )
}

export default Footer
