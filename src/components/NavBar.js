import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import logo from "./assets/images/hp_logo2_white.svg";

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;
  z-index: 100;
`;
const Logo = styled.img`
  margin: 7%;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 10%;
`;
const GridItem = styled.div`
  height: 100px;
  width: auto;
  position: relative;
  align-content: center;
  text-align: center;
  font-size: 30px;
  margin-top: 20%;
`;
const Burger = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10%;
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Nav>
      <Logo src={logo} alt="logo" />

      {click ? (
        <Container>
          <GridItem>
            <svg
              width="50"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              onClick={handleClick}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.75 6.75L19.25 12L13.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 12H4.75"
              ></path>
            </svg>
          </GridItem>
          <GridItem>
            <Link to="/"> Home</Link>
          </GridItem>
          <GridItem>
            <Link to="/blog"> Blog</Link>
          </GridItem>
          <GridItem>
            <Link to="/resume"> Resume</Link>
          </GridItem>
        </Container>
      ) : (
        <Burger>
          <svg
            id="burger-menu"
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 24 24"
            onClick={handleClick}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 5.75H19.25"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 18.25H19.25"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 12H19.25"
            />
          </svg>
        </Burger>
      )}
    </Nav>
  );
};

export default NavBar;
