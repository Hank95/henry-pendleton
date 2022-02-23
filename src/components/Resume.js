import styled from "styled-components";
import pdf from "./assets/images/henry_pendleton_resume.pdf";

const Resume = () => {
  return (
    <Container>
      <h1>Resume</h1>

      <object data={pdf} type="application/pdf" width="65%" height="1125px">
        <p>
          Alternative text - include a link{" "}
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Resume;
