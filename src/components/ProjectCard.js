import styled from "styled-components";

const Card = styled.div`
  margin: 30px;
`;
const TagBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
const Tag = styled.p`
  border: 1px solid rgb(215, 218, 220);
  border-radius: 3px;
  margin: 5px;
  padding: 2px;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  color: white;
  background-color: rgba(0, 35, 55, 1);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Description = styled.div`
  margin-bottom: 15px;
`;
const Video = styled.iframe`
  width: 100%;
  height: 60%;
  @media (max-width: 850px) {
    height: fit-content;
  }
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
      <Description>{project.description}</Description>

      {project.youtube ? (
        <Video
          src={`https://www.youtube.com/embed/${project.youtube}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Video>
      ) : null}
      <Button href={project.url}>GitHub Repository</Button>
    </Card>
  );
};

export default ProjectCard;
