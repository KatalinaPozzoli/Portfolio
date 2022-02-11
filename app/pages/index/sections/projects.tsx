import {
    InnerContainer,
    ProjectButton,
    ProjectsButtonsSection,
    ProjectsContainer,
    ProjectsDescription,
    ProjectsTitle
} from "~/pages/index/index.styled";

const Projects = () => {
    return (
        <ProjectsContainer>
            <InnerContainer>
                <ProjectsTitle> Projects </ProjectsTitle>
                <ProjectsDescription>Here you can see some of my personal projects</ProjectsDescription>
                <ProjectsButtonsSection>
                    <ProjectButton> Product Design </ProjectButton>
                    <ProjectButton> FrontEnd </ProjectButton>

                </ProjectsButtonsSection>
            </InnerContainer>
        </ProjectsContainer>
    )
}

export default Projects;
