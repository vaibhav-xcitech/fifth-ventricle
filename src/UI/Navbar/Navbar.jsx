import React, { useState } from "react";
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
  CenterDiv,
  IconsButton,
} from "./Navbar.style";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <CenterDiv>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr, console.log("hello"));
            }}
          >
            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
          </OpenLinksButton>
          <LeftContainer>
            <Logo src="https://www.fifthventricle.in/wp-content/uploads/elementor/thumbs/cropped-fifth-ventricle-full-paqadr3fkgfpd5gl63o14tejvzngica2atitjsjj7k.png"></Logo>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/"> Home</NavbarLink>
              <NavbarLink to="/aboutus"> About Us</NavbarLink>
              <NavbarLink to="/contact"> Contact</NavbarLink>
              <NavbarLink to="/chestoBuy"> Buy</NavbarLink>
              <IconsButton>
                <span style={{ color: "#fff" }}>
                  <FaFacebookF />
                </span>
              </IconsButton>
              <IconsButton>
                <span style={{ color: "#fff" }}>
                  <FaLinkedinIn />
                </span>
              </IconsButton>
              <IconsButton>
                <span style={{ color: "#fff" }}>
                  <FaInstagram />
                </span>
              </IconsButton>
            </NavbarLinkContainer>
          </RightContainer>
        </CenterDiv>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/aboutus"> About Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact</NavbarLinkExtended>
          <NavbarLinkExtended to="/chestoBuy"> Buy</NavbarLinkExtended>
          <div style={{ display: "flex" }}>
            <IconsButton>
              <span style={{ color: "#fff" }}>
                <FaFacebookF />
              </span>
            </IconsButton>
            <IconsButton>
              <span style={{ color: "#fff" }}>
                <FaLinkedinIn />
              </span>
            </IconsButton>
            <IconsButton>
              <span style={{ color: "#fff" }}>
                <FaInstagram />
              </span>
            </IconsButton>
          </div>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
