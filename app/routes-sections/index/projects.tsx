import React from 'react';
import styled from "styled-components";
import ProjectCard from "~/src/components/project-card";

const SProjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1{
    width: fit-content;
  }
`

const Projects = () => {
    return (
        <SProjects>
            <h1 className="highlight">Projects</h1>
            <p>Here you can see some of my personal projects</p>
            <ProjectCard></ProjectCard>
        </SProjects>
    );
};

export default Projects;
