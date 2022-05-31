import React, {useState} from 'react';
import styled from "styled-components";
import ProjectCard from "~/src/components/project-card";
import {Project} from "~/declarations";
import ConstrainedContainer from "~/src/components/content-constraint";

const SProjects = styled.section`
  margin: 6em -2em;
  background-color: var(--decorative-beige);
  padding: 4em 0;
  box-sizing: border-box;
  border: 1px solid black;

  h1 {
    width: fit-content;
    font-size: 1.5em;
  }
  .highlight-green{
    position: relative;
    &:before{
      background-color: var(--accent-base);
      content: "";
      position: absolute;
      width: calc(100% + 4px);
      height: 45%;
      left: -2px;
      bottom: 0;
      z-index: -1;
    }
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
    gap: 1em;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`
const Container = styled(ConstrainedContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
  justify-content: space-between;
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
                <h1 className="highlight-green">Projects</h1>
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
