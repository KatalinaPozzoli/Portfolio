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
    InnerContainer,
    LinkedInIcon,
    MenuItem,
    MenuItemButton,
    MenuList,
    NavBar,
    SocialMediaLinksContainer, LeafIllustrationLeft, LeafIllustrationRight
} from "~/pages/index/index.styled";
import Introduction from "~/pages/index/sections/introduction";
import WhoAmI from "~/pages/index/sections/who-am-i";
import Projects from "~/pages/index/sections/projects";
import ContactMe from "~/pages/index/sections/contact-me";
import React, {MutableRefObject, useRef} from "react";
import {LoaderFunction, useLoaderData} from "remix";
import {Project} from "~/declarations";
import {animateScroll} from "~/utils/animateScroll";
import Leaf from '../../public/assets/KP-leaf.png'

export const loader: LoaderFunction = async () => {
    const projects: Project[] = [
        {
            type: 'DESIGN',
            title: 'IfIWere',
            description: 'Designing and end-to-ent mobile app as a final project of a UX/UI bootcamp',
            tools: ['UX RESEARCH', 'UX DESIGN', 'UI DESIGN', 'PROTOTYPING', 'USER TESTING', 'FIGMA'],
            image: '/assets/KP-IfIWere-thumbnail.png',
            buttonLabel: 'Read the study case',
            link: 'https://www.behance.net/gallery/134652681/IfIWere'
        },
        {
            type: 'DESIGN',
            title: 'Dribble Designs',
            description: 'Designing DailyUI Challenge to practice',
            tools: ['UI DESIGN', 'FIGMA'],
            image: '/assets/KP-DailyUi-thumbnail.png',
            buttonLabel: 'See all the shots',
            link: 'https://dribbble.com/KatitaP'
        },
        {
            type: 'DEVELOPMENT',
            title: 'My portfolio',
            description: 'I designed and developed my own page. I made it on React because i wanted to learn a new JS framework',
            tools: ['FIGMA', 'REMIX', 'REACT', 'TYPESCRIPT', 'HTML', 'CSS'],
            image: '/assets/IfIWere-thumbnail.png',
            buttonLabel: 'Try it',
            link: ''
        },
        {
            type: 'DEVELOPMENT',
            title: 'Budget Calculator',
            description: 'This project is a budget calculator made in angular, you can set your income and your expenses, and it calculates your budget',
            tools: ['ANGULAR 13', 'TYPESCRIPT', 'HTML', 'CSS'],
            image: '/assets/kp-budget-calculator.png',
            buttonLabel: 'Try it',
            link: ''
        },
        {
            type: 'DEVELOPMENT',
            title: 'Tic-Tac-Toe',
            description: 'This game is one of the most popular, so I wanted to replicate it just to practice',
            tools: ['ANGULAR 13', 'TYPESCRIPT', 'HTML', 'CSS'],
            image: '/assets/kp-tateti.png',
            buttonLabel: 'Try it',
            link: ''
        },
        {
            type: 'DEVELOPMENT',
            title: 'To do list',
            description: 'I made a to-do list in angular to practice, you can see all your tasks, your completed tasks, and even clear the ones that you have already made',
            tools: ['ANGULAR 13', 'TYPESCRIPT', 'HTML', 'CSS'],
            image: '/assets/kp-todo.png',
            buttonLabel: 'Try it',
            link: ''
        },
    ]
    return {projects}
}

interface MenuSectionDeclaration {
    label: string
    action: (...args: any[]) => void,
    relatedRef?: MutableRefObject<HTMLElement | null>
}

export default function Index() {
    const {projects} = useLoaderData()

    const scrollTo = (element: HTMLElement, duration = 1000) => {
        const initialPosition = window.scrollY;
        animateScroll({ targetPosition: element.offsetTop, initialPosition, duration })
    }

    const sections: Record<string, MenuSectionDeclaration> = {
        whoAmI: {
            label: 'About Me',
            action: scrollTo,
            relatedRef: useRef<HTMLElement>(null)
        },
        projects: {
            label: 'Projects',
            action: scrollTo,
            relatedRef: useRef<HTMLElement>(null)
        },
        contactMe: {
            label: 'Contact Me',
            action: scrollTo,
            relatedRef: useRef<HTMLElement>(null)
        },
        resume: {
            label: 'Resume',
            action: () => {
                window.open('https://api.cdn.doesrobbiedream.com/katita/PozzoliKatalinaCV.pdf')
            }
        }
    };

    return (
        <>
            <Container>
                <LeafIllustrationLeft src={Leaf}></LeafIllustrationLeft>
                <LeafIllustrationRight src={Leaf}></LeafIllustrationRight>
                <InnerContainer>
                    <NavBar>
                        <BrandTitle>Katalina Pozzoli</BrandTitle>
                        <MenuList>
                            {Object.values(sections).map(({label, action, relatedRef}) =>
                                (
                                    <MenuItem key={`section-${label}`}>
                                        <MenuItemButton onClick={() => action(relatedRef?.current)}>
                                            {label}
                                        </MenuItemButton>
                                    </MenuItem>
                                )
                            )}
                        </MenuList>
                    </NavBar>
                </InnerContainer>
                <Introduction/>
                <WhoAmI ref={sections.whoAmI.relatedRef}/>
                <Projects ref={sections.projects.relatedRef} projects={projects}/>
                <ContactMe ref={sections.contactMe.relatedRef}/>
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
                        <BehanceIcon size="1.7em" color="#333333"></BehanceIcon>
                    </a>
                </SocialMediaLinksContainer>
                <FooterLine></FooterLine>
                <BrandFooterTitle> Katalina Pozzoli </BrandFooterTitle>
                <BrandFooterTitle> 2022</BrandFooterTitle>
            </Footer>
        </>
    )
}
