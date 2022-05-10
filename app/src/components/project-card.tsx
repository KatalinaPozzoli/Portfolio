import styled from "styled-components";

const Container = styled.section`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  border-radius: 1em;
  margin-top: 1em;
  transition: box-shadow .6s;
  box-shadow: 0 2px 8px rgba(170, 184, 174, 0.3);
  gap: 1em;
  :hover {
    box-shadow: 4px 4px 25px rgba(170, 184, 174, 0.51);
  }
`

const ProjectCard = () => {
    return (
        <Container>
            <img src="/assets/BudgTravel.png" alt=""/>
            <h2>
                BudgTravel
            </h2>
            <p> Designing and end-to-ent mobile app as a final project of a UX/UI bootcamp</p>
            <button>
                Read Case Study
            </button>
        </Container>
    )
}

export default ProjectCard
