import {
    InnerContainer,
    ProjectsButtonsSection,
    ProjectsContainer,
    ProjectsDescription, ProjectsSectionContainer,
    ProjectsTitle,
    TypeOfProjectButton
} from "~/pages/index/index.styled";
import ProjectCard from "~/pages/index/components/project-card";
import {PropsWithChildren, useState, VoidFunctionComponent} from "react";
import {Project} from "~/declarations";

const Projects: VoidFunctionComponent<PropsWithChildren<{ projects: Project[] }>> = ({projects}) => {
    const [activeType, setActiveType] = useState<'DESIGN' | 'DEVELOPMENT'>('DESIGN')

    const handleStateChange = (type: 'DESIGN' | 'DEVELOPMENT') => setActiveType(type)

    return (
        <ProjectsSectionContainer>
            <InnerContainer>
                <ProjectsTitle> Projects </ProjectsTitle>
                <ProjectsDescription>Here you can see some of my personal projects</ProjectsDescription>
                <ProjectsButtonsSection>
                    <TypeOfProjectButton active={activeType === 'DESIGN'} onClick={() => handleStateChange('DESIGN')}> Product Design </TypeOfProjectButton>
                    <TypeOfProjectButton active={activeType === 'DEVELOPMENT'} onClick={() => handleStateChange('DEVELOPMENT')}> Development </TypeOfProjectButton>
                </ProjectsButtonsSection>
                <ProjectsContainer>
                    {projects.filter((p) => p.type === activeType).map((project, index) => <ProjectCard key={`project-${index}`} project={project}/>)}
                </ProjectsContainer>
            </InnerContainer>
        </ProjectsSectionContainer>
    )
}

export default Projects;
