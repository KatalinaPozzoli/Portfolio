// HTTP: GET, POST, PUT, DELETE
// Remix:
// GET -> LoaderFunction => export const loader
// POST, PUT, DELETE -> ActionFunction => export const action
// Render => export default

import {
    BehanceIcon,
    BrandFooterTitle,
    BrandTitle,
    Container,
    DribbleIcon,
    Footer,
    FooterLine,
    GitHubIcon,
    HamburgerMenu,
    LinkedInIcon,
    NavBar,
    SocialMediaLinksContainer
} from "~/pages/index/index.styled";
import Introduction from "~/pages/index/sections/introduction";
import WhoAmI from "~/pages/index/sections/who-am-i";
import Projects from "~/pages/index/sections/projects";
import ContactMe from "~/pages/index/sections/contact-me";
import React from "react";

export default function Index() {
    return (
        <>
            <Container>
                <NavBar>
                    <BrandTitle>Katalina Pozzoli</BrandTitle>
                    <HamburgerMenu/>
                </NavBar>
                <Introduction/>
                <WhoAmI/>
                <Projects/>
                <ContactMe/>
            </Container>
            <Footer>
                <BrandFooterTitle>You can find me</BrandFooterTitle>
                <SocialMediaLinksContainer>
                    <a href="https://www.linkedin.com/in/katalina-pozzoli/" target="_blank"
                       aria-label="linked-in-katalina-pozzoli">
                        <LinkedInIcon size="1.5em" color="#333333"></LinkedInIcon>
                    </a>
                    <a href="https://github.com/KatalinaPozzoli" target="_blank" aria-label="git-hub-katalina-pozzoli">
                        <GitHubIcon size="1.5em" color="#333333"></GitHubIcon>
                    </a>
                    <a href="https://dribbble.com/KatitaP" target="_blank" aria-label="dribble-katalina-pozzoli">
                        <DribbleIcon size="1.5em" color="#333333"></DribbleIcon>
                    </a>
                    <a href="https://www.behance.net/katalinaPozzoli" target="_blank"
                       aria-label="behance-katalina-pozzoli">
                        <BehanceIcon size="1.5em" color="#333333"></BehanceIcon>
                    </a>
                </SocialMediaLinksContainer>
                <FooterLine></FooterLine>
                <BrandFooterTitle> Katalina Pozzoli </BrandFooterTitle>
                <BrandFooterTitle> 2022</BrandFooterTitle>
            </Footer>
        </>
    )
}
