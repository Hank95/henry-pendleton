import styled from "styled-components";

import medium from "./assets/images/medium.svg";
import gitHub from "./assets/images/github.svg";
import linkedin from "./assets/images/linkedin.svg";
import logo from "./assets/images/hp_logo2_white.svg";

const Footer = () => {
  return (
    <Content>
      <Info>
        <img src={logo} alt="HP" />
      </Info>
      <Social>
        <a href="https://www.linkedin.com/in/henry-pendleton-25255243/">
          <SocialImage src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/Hank95">
          <SocialImage src={gitHub} alt="Git Hub" />
        </a>
        <a href="https://hhpendleton.medium.com">
          <SocialImage src={medium} alt="Medium" />
        </a>
      </Social>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(32, 33, 36);
  color: white;
  margin-top: 35px;
  /* position: absolute;
  bottom: 0; */
`;

const Info = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: baseline;
`;
const SocialImage = styled.img`
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin: 20px;
  &:hover {
    color: white;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

export default Footer;
