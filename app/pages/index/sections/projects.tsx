import {
    InnerContainer,
    ProjectsButtonsSection,
    ProjectsContainer,
    ProjectsDescription,
    ProjectsSectionContainer,
    ProjectsTitle,
    TypeOfProjectButton
} from "~/pages/index/index.styled";
import ProjectCard from "~/pages/index/components/project-card";
import {forwardRef, useState} from "react";
import {Project} from "~/declarations";

const Projects = forwardRef<HTMLElement, { projects: Project[] }>(({projects}, ref) => {
    const [activeType, setActiveType] = useState<'DESIGN' | 'DEVELOPMENT'>('DESIGN')

    const handleStateChange = (type: 'DESIGN' | 'DEVELOPMENT') => setActiveType(type)

    return (
        <ProjectsSectionContainer ref={ref}>
            <InnerContainer>
                <ProjectsTitle> Projects </ProjectsTitle>
                <ProjectsDescription>Here you can see some of my personal projects</ProjectsDescription>
                <ProjectsButtonsSection>
                    <TypeOfProjectButton active={activeType === 'DESIGN'}
                                         onClick={() => handleStateChange('DESIGN')}> UX Design </TypeOfProjectButton>
                    <TypeOfProjectButton active={activeType === 'DEVELOPMENT'}
                                         onClick={() => handleStateChange('DEVELOPMENT')}> Development </TypeOfProjectButton>
                </ProjectsButtonsSection>
                <ProjectsContainer>
                    {projects.filter((p) => p.type === activeType).map((project, index) => <ProjectCard
                        key={`project-${index}`} project={project}/>)}
                </ProjectsContainer>
            </InnerContainer>
        </ProjectsSectionContainer>
    )
})

export default Projects;
