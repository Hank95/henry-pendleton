/* eslint-disable array-callback-return */
import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./projects";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [active, setActive] = useState(data.projects[data.projects.length - 1]);

  const handleClick = (e) => {
    data.projects.map((project) => {
      if (e.target.innerText === project.title) {
        setActive(project);
      }
    });
  };

  const orderedProjects = [].concat(data.projects).reverse();

  return (
    <Container>
      <List>
        <Title>Projects:</Title>
        {orderedProjects.map((project) => {
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

const Container = styled.div`
  z-index: 1000;
  width: 80%;
  /* max-height: 800px; */
  margin: auto;
  display: grid;
  grid-template-columns: 30% 70%;
  background-color: rgb(32, 33, 36);
  border-radius: 10px;
  @media (max-width: 600px) {
    display: block;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  padding-top: 20px;
  height: 10%;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;
const ListItem = styled.div`
  align-content: center;
  cursor: pointer;
  text-align: center;
  padding-top: 40px;
  font-size: 30px;
  width: 100%;
  height: 75px;
  border-radius: 10px;
  &:hover {
    color: rgba(225, 71, 54, 1);
    box-shadow: 0 0 15px 4px rgba(100, 100, 100, 0.06);
  }
  @media (max-width: 600px) {
    height: 20px;
    font-size: 15px;
    padding-top: 5px;
  }
`;

export default Portfolio;
