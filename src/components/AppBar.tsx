import { Navbar } from "react-bootstrap";
import HealthIqImg from "../images/healthiq.png";
import React from "react";
import styled from "styled-components";


const AppBar = () => {
  return (
    <StyledNavbar>
      <Navbar.Brand>
        <StyledImg
          src={HealthIqImg}
          width="30"
          height="30"
          alt=""/>
        Health IQ challenge
      </Navbar.Brand>
    </StyledNavbar>
  );
}

const StyledNavbar = styled(Navbar)`
  justify-content: center;
`;

const StyledImg = styled.img`
  margin-top: -5px;
`;

export default AppBar;
