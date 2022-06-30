import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "65px")};
  background-color: #2f3538;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  transition: all 0.5s ease-in;
  width: 100%;
  box-shadow: 0px 0px 30px -7px rgb(0 0 0 / 50%);

  @media (min-width: 700px) {
    height: 65px;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LeftContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: center;
  padding-right: 50px;
`;

export const RightContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  padding-top: 10px;

  &:hover {
    color: #fae403;
    text-decoration: none;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: #fae403;
  }
`;

export const Logo = styled.img`
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 80px;
  background: none;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
