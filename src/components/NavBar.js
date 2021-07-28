import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr 1fr 1fr;
`;
const GridItem = styled.div`
  height: 100px;
  width: auto;
  position: relative;
  align-content: center;
  text-align: center;
`;

const NavBar = () => {
  return (
    <Nav>
      <Container>
        <img src="../src/assets/images/hp_logo2.svg" alt="logo" />
        <GridItem></GridItem>
      </Container>
    </Nav>
  );
};

export default NavBar;
