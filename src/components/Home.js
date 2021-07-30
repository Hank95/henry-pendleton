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
          <h3>
            Googling shit and trying to make cool{" "}
            <a href="https://github.com/Hank95">
              {" "}
              <u>things</u>{" "}
            </a>
            .
          </h3>
          <h4>(Enrolled as a Sofware Engineer Student at Flatiron School.)</h4>
        </Currently>
      </Landing>
      <Portfolio />
    </div>
  );
};

export default Home;
