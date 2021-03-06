import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Landing>
        <Currently>
          <Title>Henry</Title>
          <Title>Pendleton</Title>
          <h2>is currently ...</h2>
          <h3>Looking to build cool things.</h3>
          <h4>(Recent grad of the Flatiron Software Engineer Program)</h4>
        </Currently>
      </Landing>
      <Portfolio />
    </div>
  );
};

const Title = styled.h1`
  font-size: 4rem;
  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;
const Landing = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-bottom: 25px;
`;
const Currently = styled.div`
  position: absolute;
  top: 35%;
  left: 25%;
  padding: 10px 20px;
  @media (max-width: 750px) {
    left: 100px;
  }
  @media (max-width: 550px) {
    left: 20px;
  }
`;

export default Home;
