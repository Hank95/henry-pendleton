import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import background from "./assets/images/ocean-texture-dark.jpg";
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const Landing = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: aliceblue;
  margin-bottom: 25px;
`;
const Currently = styled.div`
  position: absolute;
  top: 35%;
  left: 20%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0px;
`;
const Home = () => {
  return (
    <div>
      <Landing>
        <Image src={background} alt="backgroud" />
        <Currently>
          <h1>Henry</h1>
          <h1>Pendleton</h1>
          <h2>is currently ...</h2>
          <h3>Looking to build cool things.</h3>
          <h4>(Recent grad of the Flatiron Software Engineer Program)</h4>
        </Currently>
      </Landing>
      <Portfolio />
    </div>
  );
};

export default Home;
