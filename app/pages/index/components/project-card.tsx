import styled from "styled-components";
import {FaArrowRight} from "react-icons/fa";
import {DynamicIcon} from "~/pages/index/index.styled";
import {PropsWithChildren, VoidFunctionComponent} from "react";
import {Project} from "~/declarations";

const Container = styled.main`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
`
const ProjectImage = styled.img`
  width: 100%;
  margin: 0 auto;
  border-radius: 1em;

`

const ProjectTitle = styled.h2`
  margin: 1em 0 1em 0;
`

const ProjectToolsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1em;
  row-gap: 0.5em;
  margin-bottom: 1em;

`

const ProjectTools = styled.h4`
  display: inline-flex;
  margin: 0;
  font-family: var(--font-body);
  color: var(--primary-base);
  font-size: 12px;
  font-weight: 500;
`

const ProjectDescription = styled.p`
  margin: 0 0 1.5em 0;

`
const ProjectButton = styled.button`
  background-color: var(--primary-dark);
  color: white;
  font-family: var(--font-body);
  font-weight: 500;
  border: none;
  border-radius: 1em;
  padding: 1.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

`

const ArrowIcon = styled(FaArrowRight)`
  ${DynamicIcon};
`



const ProjectCard: VoidFunctionComponent<PropsWithChildren<{ project: Project }>> = ({project}) => {
    return (
        <Container>
            <ProjectImage src={project.image} alt="If I Were Image Thumbnail"></ProjectImage>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectToolsContainer>
                {project.tools.map((tool,index) => <ProjectTools key={`tool-${index}`}>{tool}</ProjectTools>)}
            </ProjectToolsContainer>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectButton> {project.buttonLabel} <ArrowIcon color="#FFFFFF"></ArrowIcon></ProjectButton>
        </Container>
    )
}

export default ProjectCard
