import styled from "styled-components";
import {Project} from "~/declarations";

const Container = styled.section`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 1em;
  margin-top: 1em;
  background-color: white;
  transition: box-shadow .6s;
  box-shadow: 0 2px 8px rgba(170, 184, 174, 0.3);
  gap: 1em;

  :hover {
    box-shadow: 4px 4px 25px rgba(170, 184, 174, 0.51);
  }
`

interface ProjectProps {
    project: Project
}

const ProjectCard = ({project}: ProjectProps) => {
    return (
        <Container>
            <img src={project.image} alt="Project Image Thumbnail"/>
            <h2>
                {project.title}
            </h2>
            <div>
                {project.tools.map((tool, index) => <div key={`tool-${index}`}> {tool}</div>)}
            </div>
            <p>
                {project.description}
            </p>
            <button>
                <a href={project.link} target="_blank"> {project.buttonLabel} </a>
            </button>
        </Container>
    )
}

export default ProjectCard
