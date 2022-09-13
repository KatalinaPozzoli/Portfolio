import React, {useState} from 'react';
import styled from "styled-components";
import ProjectCard from "~/src/components/project-card";
import {Project} from "~/declarations";
import ConstrainedContainer from "~/src/components/content-constraint";

const SProjects = styled.section`
  margin: 6em -1.5em;
  background-color: var(--decorative-beige);
  padding: 4em 0;
  box-sizing: border-box;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  h1 {
    width: fit-content;
    font-size: 1.5em;
  }

  .project-modifier {
    &__container {
      display: flex;
      gap: 1em;
    }

    &__button {
      color: #333333;
      padding: 0.7em 1.5em;
      font-size: 0.8em;
      border: 1px solid #000000;
      box-shadow: 2px 2px 0 #000000;
      border-radius: 8px;
      min-width: 12em;
      cursor: pointer;
      &:not(&--active):hover{
        background-color: #cbebcd;
      }
      
      &--active {
        background-color: var(--accent-base);
      }
      background-color: var(--accent-light);
    }
  }

  .projects__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2em;
    width: 100%;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      //justify-content: space-between;
      justify-content: flex-start;
    }
  }
`
const Container = styled(ConstrainedContainer)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  justify-content: space-between;
  padding: 0 1.5em;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

interface ProjectsProps {
    projects: Project[]
}

const Projects = ({projects}: ProjectsProps) => {

    const [activeType, setActiveType] = useState<'DESIGN' | 'DEVELOPMENT'>('DESIGN')
    const handleStateChange = (type: 'DESIGN' | 'DEVELOPMENT') => setActiveType(type)

    return (
        <SProjects>
            <Container>
                <h1 className="highlight highlight--green"><span>Projects</span></h1>
                <p>Here you can see some of my personal projects</p>
                <div className="project-modifier__container">
                    <button
                        className={`project-modifier__button ${activeType === 'DESIGN' ? 'project-modifier__button--active' : ''}`}
                        onClick={() => handleStateChange('DESIGN')}>
                        UX DESIGN
                    </button>
                    <button
                        className={`project-modifier__button ${activeType === 'DEVELOPMENT' ? 'project-modifier__button--active' : ''}`}
                        onClick={() => handleStateChange('DEVELOPMENT')}>
                        DEVELOPMENT
                    </button>
                </div>
                <div className="projects__container">
                    {projects.filter((p) => p.type === activeType).map((project, index) => <ProjectCard
                        key={`project-${index}`} project={project}/>)}
                </div>
            </Container>
        </SProjects>
    );
};

export default Projects;
