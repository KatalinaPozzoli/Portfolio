import styled from "styled-components";
import {Project} from "~/declarations";

const Container = styled.section`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px black;
  border-radius: 1em;
  margin-top: 1em;
  background-color: white;
  transition: box-shadow .6s;
  box-shadow: 0 2px 8px rgba(170, 184, 174, 0.3);
  gap: 1em;
  max-width: 400px;
  min-height: 470px;
  @media screen and (min-width: 600px){
    height: 520px;
  }


  :hover {
    box-shadow: 4px 4px 25px rgba(170, 184, 174, 0.51);
  }

  .project-card {
    &__content{
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
    &__image {
      max-width: 550px;
      border-radius: 0.5em;
    }

    &__tool-container {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1.5em;
      row-gap: 0.5em;
    }

    &__tool {
      font-size: 0.8em;
      color: var(--primary-dark);
      font-weight: 500;
      line-height: 14px;
      margin: 0;
      font-family: var(--font-body);
    }

    &__description {
    }

    &__button {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1em;
      box-sizing: border-box;
      gap: 30px;
      background-color: var(--primary-base);
      border-radius: 0.5em;

      &-label {
        color: #333333;
        font-family: var(--font-body);
        font-weight: 600;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.03em;
        font-size: 1em;
      }
    }
  }
`

interface ProjectProps {
    project: Project
}

const ProjectCard = ({project}: ProjectProps) => {
    return (
        <Container>
            <div className="project-card__content">
                <img className="project-card__image" src={project.image} alt="Project Image Thumbnail"/>
                <h2 className="project-card__title">
                    {project.title}
                </h2>
                <div className="project-card__tool-container">
                    {project.tools.map((tool, index) => <div className="project-card__tool"
                                                             key={`tool-${index}`}> {tool}</div>)}
                </div>
                <p className="project-card__description">
                    {project.description}
                </p>
            </div>
            <a href={project.link} target="_blank" className="project-card__button">
                    <span className="project-card__button-label">
                    {project.buttonLabel}
                    </span>
                <img className="project-card__button-icon" src="/assets/icons/arrow.png" alt="arrow icon"/>
            </a>
        </Container>
    )
}

export default ProjectCard
