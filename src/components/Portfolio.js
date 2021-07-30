/* eslint-disable array-callback-return */
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
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  padding-top: 20px;
  height: 10%;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.div`
  align-content: center;
  text-align: center;
  padding-top: 40px;
  font-size: 30px;
  width: 100%;
  height: 20%;
  &:hover {
    color: rgba(225, 71, 54, 1);
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  }
`;

const Portfolio = () => {
  const [active, setActive] = useState(data.projects[data.projects.length - 1]);

  const handleClick = (e) => {
    data.projects.map((project) => {
      if (e.target.innerText === project.title) {
        setActive(project);
      }
    });
  };

  return (
    <Container>
      <List>
        <Title>Projects</Title>
        {data.projects.map((project) => {
          return (
            <ListItem
              className={active.id === project.id ? "active" : "none"}
              key={project.id}
              onClick={handleClick}
            >
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
