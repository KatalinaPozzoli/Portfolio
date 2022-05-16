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

const SPortfolio = styled.section`
  padding: 2em 2em 0 2em;
  box-sizing: border-box;
`

export default function Index() {
    return (
        <SPortfolio>
            <Presentation socialMedia={SocialMediaList}/>
            <Projects projects={projectsList}/>
            <ContactMe items={SocialMediaList}/>
        </SPortfolio>
    )
}
