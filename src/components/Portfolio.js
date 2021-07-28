import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./projects";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.div`
  align-content: center;
  text-align: center;
  width: 100%;
  height: 20%;
  &:hover {
    color: rgba(225, 71, 54, 1);
  }
`;

const Portfolio = () => {
  const [active, setActive] = useState("");

  const handleClick = (e) => {
    console.log(e.target.innerText);
    data.projects.map((project) => {
      if (e.target.innerText === project.title) {
        setActive(project);
      }
    });
  };
  console.log(active);
  return (
    <Container>
      <List>
        <ListItem>Projects</ListItem>
        {data.projects.map((project) => {
          return (
            <ListItem key={project.id} onClick={handleClick}>
              {project.title}
            </ListItem>
          );
        })}
      </List>
      <ProjectCard project={active} />
    </Container>
  );
};

export default Portfolio;
