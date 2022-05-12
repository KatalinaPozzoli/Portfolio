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
import Footer from "~/src/components/footer";

const SPortfolio = styled.section`
  padding: 1.5em 1.5em 0 1.5em;
`

export default function Index() {
    return (
        <SPortfolio>
            <NavigationBar/>
            <Presentation socialMedia={SocialMediaList}/>
            <Projects projects={projectsList}/>
            <ContactMe items={SocialMediaList}/>
            <Footer socialMedia={SocialMediaList}/>
        </SPortfolio>
    )
}
