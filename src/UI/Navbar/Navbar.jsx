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
import { GrFacebookOption } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

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
                <span
                  onClick={() =>
                    window.open("https://www.facebook.com/fifthventricle.in/")
                  }
                >
                  <GrFacebookOption />
                </span>
              </IconsButton>
              <IconsButton>
                <span
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/5th-ventricle/"
                    )
                  }
                >
                  <GrLinkedinOption />
                </span>
              </IconsButton>
              <IconsButton>
                <span
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/5th_ventricle/?hl=en"
                    )
                  }
                >
                  <GrInstagram />
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
              <span
                onClick={() =>
                  window.open("https://www.facebook.com/fifthventricle.in/")
                }
              >
                <GrFacebookOption />
              </span>
            </IconsButton>
            <IconsButton>
              <span
                onClick={() =>
                  window.open("https://www.linkedin.com/company/5th-ventricle/")
                }
              >
                <GrLinkedinOption />
              </span>
            </IconsButton>
            <IconsButton>
              <span
                onClick={() =>
                  window.open("https://www.instagram.com/5th_ventricle/?hl=en")
                }
              >
                <GrInstagram />
              </span>
            </IconsButton>
          </div>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
