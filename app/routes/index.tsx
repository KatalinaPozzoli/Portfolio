// HTTP: GET, POST, PUT, DELETE
// Remix:
// GET -> LoaderFunction => export const loader
// POST, PUT, DELETE -> ActionFunction => export const action
// Render => export default

import React from "react";
import Presentation from "~/Sections/presentation";
import styled from "styled-components";

const SPortfolio = styled.section`
  padding: 1.5em;
  nav{
    margin-bottom: 6em;
    display: flex;
    width: 100%;
    justify-content: space-between;

    button{
      border: none;
      background-color: white;
    }
  }
  
  .me-image{
    margin-top: 2.5em;
  }
  
  .brand-name{
    font-family: var(--font-brand);
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
            <Presentation></Presentation>
            <img className="me-image" src="/assets/me-image.png" alt="katalina pozzoli image"/>
        </SPortfolio>
    )
}
