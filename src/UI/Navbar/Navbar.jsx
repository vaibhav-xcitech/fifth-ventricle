import React, { useState } from 'react';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    CenterDiv
} from './Navbar.style';
import { Fab } from 'ui-neumorphism';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {

    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <CenterDiv>
                    <OpenLinksButton
                        onClick={() => {
                            setExtendNavbar((curr) => !curr,
                                console.log("hello"));
                        }}
                    >
                        {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </OpenLinksButton>
                    <LeftContainer>
                        <Logo src='https://www.fifthventricle.in/wp-content/uploads/elementor/thumbs/cropped-fifth-ventricle-full-paqadr3fkgfpd5gl63o14tejvzngica2atitjsjj7k.png'></Logo>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarLinkContainer>
                            <NavbarLink to="/"> Home</NavbarLink>
                            <NavbarLink to="/aboutus"> About Us</NavbarLink>
                            <NavbarLink to="/contact"> Contact</NavbarLink>
                            <NavbarLink to="/buy"> Buy</NavbarLink>
                            <NavbarLink to="/story"> Story</NavbarLink>
                            <Fab style={{ margin: 5 }} dark color='var(--primary)'>
                                <span style={{ color: "#fff" }}><FaFacebookF /></span>
                            </Fab>
                            <Fab style={{ margin: 5 }} dark color='var(--primary)'>
                                <span style={{ color: "#fff" }}><FaTwitter /></span>
                            </Fab>
                            <Fab style={{ margin: 5 }} dark color='var(--primary)'>
                                <span style={{ color: "#fff" }}><FaLinkedinIn /></span>
                            </Fab>
                        </NavbarLinkContainer>
                    </RightContainer>
                </CenterDiv>
            </NavbarInnerContainer>

            {
                extendNavbar && (
                    <NavbarExtendedContainer>
                        <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                        <NavbarLinkExtended to="/aboutus"> About Us</NavbarLinkExtended>
                        <NavbarLinkExtended to="/contact"> Contact</NavbarLinkExtended>
                        <NavbarLinkExtended to="/buy"> Buy</NavbarLinkExtended>
                        <div>
                            <Fab style={{ margin: 5 }} dark color='var(--primary)'>
                                <span style={{ color: "#fff" }}><FaFacebookF /></span>
                            </Fab>
                            <Fab style={{ margin: 5 }} dark color='var(--primary)'>
                                <span style={{ color: "#fff" }}><FaTwitter /></span>
                            </Fab>
                            <Fab style={{ margin: 5 }} dark color='var(--primary)'>
                                <span style={{ color: "#fff" }}><FaLinkedinIn /></span>
                            </Fab>
                        </div>
                    </NavbarExtendedContainer>
                )
            }
        </NavbarContainer >
    )
}

export default Navbar
