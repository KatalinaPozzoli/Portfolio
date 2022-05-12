import React, {useState} from 'react';
import styled from "styled-components";
import ProjectCard from "~/src/components/project-card";
import {Project } from "~/declarations";

const SProjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2.5em;
  h1{
    width: fit-content;
    font-size: 1.5em;
  }
  .project-modifier{
    &__container{
      display: flex;
      gap: 1em
    }
    &__button{
      color: #333333;
      padding: 0.7em 1.5em;
      border-radius: 0.5em;
      font-size: 0.8em;
      &--active{
        background-color: var(--accent-base);
      }
      background-color: var(--accent-light);
    }
  }
  .projects__container{
    @media screen and (min-width: 768px){
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
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
            <h1 className="highlight">Projects</h1>
            <p>Here you can see some of my personal projects</p>
            <div className="project-modifier__container" >
                <button className={`project-modifier__button ${activeType? 'project-modifier__button--active': ''}`}
                        onClick={() => handleStateChange('DESIGN')}>
                    UX DESIGN
                </button>
                <button className={`project-modifier__button ${!activeType ? 'project-modifier__button--active': ''}`}
                        onClick={() => handleStateChange('DEVELOPMENT')}>
                    DEVELOPMENT
                </button>
            </div>
            <div className="projects__container">
                {projects.filter((p) => p.type === activeType).map((project, index) => <ProjectCard
                    key={`project-${index}`} project={project}/>)}
            </div>
        </SProjects>
    );
};

export default Projects;
