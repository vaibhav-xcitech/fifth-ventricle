import styled from "styled-components";

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
  `;

export const LeftContainer = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50px;

  @media (max-width: 700px) {
    padding-right: 50px;
  }
`;

export const RightContainer = styled.div`
  flex: 60%;
  display: flex;

  @media (max-width: 700px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const RightDivOne = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const RightDivTwo = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const RightDivThree = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;