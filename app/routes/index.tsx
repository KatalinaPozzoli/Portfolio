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
  padding: 1.5em;
  nav{
    margin-bottom: 6em;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
  .brand-name{
    font-family: var(--font-brand);
  }

  .me-image{
    width: 100%;
    margin: 2.5em auto;
  }
`

export default function Index() {
    return (
        <SPortfolio>
            <nav>
                <h1 className="brand-name">Katalina Pozzoli</h1>
                <button>
                    <img src="/assets/Menu_Alt_01.svg" alt="menu-button"/>
                </button>
            </nav>
            <Presentation socialMedia={SocialMediaList}></Presentation>
            <img className="me-image" src="/assets/me-image.png" alt="katalina pozzoli image"/>
            <Projects projects={projectsList}></Projects>
            <ContactMe items={SocialMediaList}></ContactMe>
        </SPortfolio>
    )
}
