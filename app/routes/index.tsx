// HTTP: GET, POST, PUT, DELETE
// Remix:
// GET -> LoaderFunction => export const loader
// POST, PUT, DELETE -> ActionFunction => export const action
// Render => export default

import React from "react";
import Presentation from "~/routes-sections/index/presentation";
import styled from "styled-components";
import Projects from "~/routes-sections/index/projects";
import {projectsList, SocialMediaList} from "~/src/values";
import ContactMe from "~/routes-sections/index/contact-me";
import NavigationBar from "~/src/components/navigation-bar";

const SPortfolio = styled.section`
  padding: 1.5em;
  .me-image{
    width: 100%;
    margin: 2.5em auto;
  }
`

export default function Index() {
    return (
        <SPortfolio>
            <NavigationBar/>
            <Presentation socialMedia={SocialMediaList}/>
            <img className="me-image" src="/assets/me-image.png" alt="katalina pozzoli image"/>
            <Projects projects={projectsList}/>
            <ContactMe items={SocialMediaList}/>
        </SPortfolio>
    )
}
