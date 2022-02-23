import styled from "styled-components";
import {FaArrowRight} from "react-icons/fa";
import {DynamicIcon} from "~/pages/index/index.styled";
import {PropsWithChildren, VoidFunctionComponent} from "react";
import {Project} from "~/declarations";

const Container = styled.section`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  
  
  border-radius: 1em;
  margin-top: 2em;
  transition: box-shadow .6s;
  box-shadow: 0 2px 8px rgba(170, 184, 174, 0.3);
  :hover {
    box-shadow: 4px 4px 25px rgba(170, 184, 174, 0.51);
  }
  @media screen and (min-width: 768px){
    flex-direction: row-reverse;
    align-items: stretch;
    gap: 2em;
  }
`

const ProjectImageContainer = styled.section`
  flex: 1;
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

const ProjectImage = styled.img`
  width: 100%;
  margin: 0 auto; 
  border-radius: 1em;
`
const ProjectBodyContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    padding: 1.5em 1em;
  }
`
const ProjectBody = styled.section`
  display: flex;
  flex-direction: column;
`

const ProjectTitle = styled.h2`
`

const ProjectToolsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1em;
  row-gap: 0.5em;
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
`
const ProjectLink = styled.a`
  background-color: var(--primary-dark);
  color: white;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1em;
  border: none;
  text-decoration: none;
  border-radius: 1em;
  padding: 0.5em 1em;
  display: inline-flex;
  justify-content: space-between;
  gap: 1.5em;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 280px;
  }
`

const ArrowIcon = styled(FaArrowRight)`
  ${DynamicIcon};
`


const ProjectCard: VoidFunctionComponent<PropsWithChildren<{ project: Project }>> = ({project}) => {
    return (
        <Container>
            <ProjectImageContainer>
                <ProjectImage src={project.image} alt="Project Image Thumbnail"></ProjectImage>
            </ProjectImageContainer>
            <ProjectBodyContainer>
                <ProjectBody>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectToolsContainer>
                        {project.tools.map((tool, index) => <ProjectTools key={`tool-${index}`}>{tool}</ProjectTools>)}
                    </ProjectToolsContainer>
                    <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectBody>
                <ProjectLink href={project.link} target="_blank"> <span>{project.buttonLabel}</span> <ArrowIcon
                    color="#FFFFFF"> </ArrowIcon></ProjectLink>
            </ProjectBodyContainer>

        </Container>
    )
}

export default ProjectCard
