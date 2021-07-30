import styled from "styled-components";

const Card = styled.div`
  margin: 10%;
`;
const TagBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Tag = styled.p`
  border: 1px solid rgb(215, 218, 220);
  border-radius: 3px;
  margin: 5px;
  padding: 2px;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <h3>{project.title}</h3>
      <TagBar>
        {project.specs.map((spec) => {
          return <Tag key={spec}>{spec}</Tag>;
        })}
      </TagBar>
      <p>{project.description}</p>
    </Card>
  );
};

export default ProjectCard;
