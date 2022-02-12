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
import {LoaderFunction, useLoaderData} from "remix";
import {Project} from "~/declarations";

export const loader: LoaderFunction = async () => {
    const projects: Project[] = [
        {
           type: 'DESIGN',
           title: 'Titulo de Prueba',
           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa lorem, a rutrum eros tempus sed. Pellentesque cursus ipsum id purus pharetra mattis. Fusce diam ipsum, fermentum nec lorem in, fermentum blandit risus. Quisque elementum eros fringilla nunc porta sodales. Fusce accumsan urna non nunc faucibus, a eleifend tellus ultricies. Morbi vitae lorem tellus. Donec posuere mollis est sed interdum. Etiam lobortis vehicula congue. Proin ut dui a nisi consectetur ultrices. Aenean rhoncus, risus non congue faucibus, tortor neque iaculis metus, tempor congue diam augue vitae ex.',
            tools: ['FIGMA', 'PHOTOSHOP', 'ILLUSTRATOR'],
            image: '/assets/IfIWere-thumbnail.png',
            buttonLabel: 'Read the study case'
        },
        {
            type: 'DEVELOPMENT',
            title: 'Prueba Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis massa lorem, a rutrum eros tempus sed. Pellentesque cursus ipsum id purus pharetra mattis. Fusce diam ipsum, fermentum nec lorem in, fermentum blandit risus. Quisque elementum eros fringilla nunc porta sodales. Fusce accumsan urna non nunc faucibus, a eleifend tellus ultricies. Morbi vitae lorem tellus. Donec posuere mollis est sed interdum. Etiam lobortis vehicula congue. Proin ut dui a nisi consectetur ultrices. Aenean rhoncus, risus non congue faucibus, tortor neque iaculis metus, tempor congue diam augue vitae ex.',
            tools: ['FIGMA', 'Angular', 'ILLUSTRATOR'],
            image: '/assets/IfIWere-thumbnail.png',
            buttonLabel: 'Read the study case'
        },
    ]
    return {projects}
}

export default function Index() {
    const { projects } = useLoaderData()

    return (
        <>
            <Container>
                <NavBar>
                    <BrandTitle>Katalina Pozzoli</BrandTitle>
                    <HamburgerMenu/>
                </NavBar>
                <Introduction/>
                <WhoAmI/>
                <Projects projects={projects}/>
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
