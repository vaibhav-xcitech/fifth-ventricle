import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
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
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  padding-top: 10px;

  &:hover {
    color: #FAE403;
  }


  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: #FAE403;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 60px;
  background: none;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 45px;
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
