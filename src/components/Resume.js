import styled from "styled-components";
import { Document } from "react-pdf";
import pdf from "./assets/images/resume.pdf";

const Resume = () => {
  return (
    <Container>
      <h1>Resume</h1>
      {/* <PDF
        src="https://docs.google.com/document/d/e/2PACX-1vQ2hL1BPzzeyP7JEF7473EkiWibQdPNDH9PrwT6UwLqJ17OwbG1X5jpN_V2YaACZSZhhCFx1mdgkJdI/pub?embedded=true"
        title="Resume"
      ></PDF> */}
      {/* 
      <PDF
        title="Henry Resume"
        src="https://drive.google.com/file/d/1avOsFeaAzafyXilG4MuK0kyuWsAMnVoz/preview"
        // width="640"
        // height="480"
        allow="autoplay"
      ></PDF> */}
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

const PDF = styled.iframe`
  width: 65%;
  height: 1000px;
  margin: auto;
`;
export default Resume;
