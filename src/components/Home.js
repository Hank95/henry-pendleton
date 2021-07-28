import React from "react";
import styled from "styled-components";
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const Landing = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Home = () => {
  return (
    <Landing>
      <Image src="../src/assets/images/ocean-texture.jpeg" alt="backgroud" />
    </Landing>
  );
};

export default Home;
