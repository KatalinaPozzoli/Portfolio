// HTTP: GET, POST, PUT, DELETE
// Remix:
// GET -> LoaderFunction => export const loader
// POST, PUT, DELETE -> ActionFunction => export const action
// Render => export default

import {
    BehanceIcon,
    BrandFooterTitle,
    BrandTitle,
    CloseCircle,
    Container,
    DribbleIcon,
    Footer,
    FooterLine,
    GitHubIcon,
    HamburgerMenu,
    InnerContainer,
    LeafIllustrationLeft,
    LeafIllustrationRight,
    LinkedInIcon,
    MenuItem,
    MenuItemButton,
    MenuList,
    NavBar,
    NavigationSection,
    SocialMediaLinksContainer
} from "~/pages/index/index.styled";
import Introduction from "~/pages/index/sections/introduction";
import WhoAmI from "~/pages/index/sections/who-am-i";
import Projects from "~/pages/index/sections/projects";
import ContactMe from "~/pages/index/sections/contact-me";
import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {ActionFunction, LoaderFunction, useActionData, useLoaderData} from "remix";
import {Project} from "~/declarations";
import {animateScroll} from "~/utils/animateScroll";
import Leaf from '../../public/assets/KP-leaf.png';
import sendContactMail from '~/utils/contactEmail/sendMail'
import createTransporter from "../utils/contactEmail/createTransport";

export const action: ActionFunction = async ({request}) => {
    const body = await request.formData();
    const parsed: Record<string, any> = {}
    for (const [key, value] of body.entries()) {
        parsed[key] = value
    }
    try {
        const transporter = createTransporter({
            service: 'SendinBlue',
            auth: {
                user: 'katalinapozzoli2000@gmail.com',
                pass: process.env.SMTP_SERVER_KEY
            }
        })

        const response = await sendContactMail
        (transporter)
        ({from: parsed.email, content: parsed.message})

        return {
            status: 200,
            success: true,
            message: "I received your message! Will contact you soon!"
        }
    } catch (e) {

        return {
            status: 500,
            success: false,
            message: "The email server failed on deliver your message. Please, contact me on social media."
        }
    }
}

export const loader: LoaderFunction = async () => {
    const projects: Project[] = [
        {
            type: 'DESIGN',
            title: 'IfIWere',
            description: 'Designing an end-to-end mobile app as a final project of a UX/UI bootcamp',
            tools: ['UX RESEARCH', 'UX DESIGN', 'UI DESIGN', 'PROTOTYPING', 'USER TESTING', 'FIGMA'],
            image: '/assets/KP-IfIWere-thumbnail.png',
            buttonLabel: 'Read the study case',
            link: 'https://www.behance.net/gallery/134652681/IfIWere'
        },
        {
            type: 'DESIGN',
            title: 'Dribble Designs',
            description: 'Designing DailyUI Challenges to practice',
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
            image: '/assets/KP-portfolio-design.png',
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
            description: 'This game is one of the most popular starter projects.',
            tools: ['ANGULAR 13', 'TYPESCRIPT', 'HTML', 'CSS'],
            image: '/assets/kp-tateti.png',
            buttonLabel: 'Try it',
            link: ''
        },
        {
            type: 'DEVELOPMENT',
            title: 'To do list',
            description: 'I made a to-do list in angular to practice, you can see all your tasks, completed tasks, and clear the ones that you have already made',
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
    const actionData = useActionData()

    const scrollTo = (element: HTMLElement, duration = 1000) => {
        const initialPosition = window.scrollY;
        animateScroll({targetPosition: element.offsetTop - 65, initialPosition, duration})
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

    useEffect(() => {
        if (actionData && !actionData.success) {
            alert(actionData.message)
        }
    }, [])

    const [open, setOpen] = useState(false)

    return (
        <>
            <Container>
                <LeafIllustrationLeft src={Leaf} alt="leaf-illustration-decoration"></LeafIllustrationLeft>
                <LeafIllustrationRight src={Leaf} alt="leaf-illustration-decoration"></LeafIllustrationRight>
                <InnerContainer>
                    <NavBar>
                        <div className="navbar__container">
                            <BrandTitle>Katalina Pozzoli</BrandTitle>
                            {open ?
                                <CloseCircle className="close-icon" onClick={() => {
                                    setOpen(!open)
                                }}> </CloseCircle> :
                                <HamburgerMenu onClick={() => {
                                    setOpen(!open)
                                }}></HamburgerMenu>
                            }
                        </div>
                        <NavigationSection open={open}>
                            <MenuList open={open}>
                                {Object.values(sections).map(({label, action, relatedRef}) =>
                                    (
                                        <MenuItem key={`section-${label}`}>
                                            <MenuItemButton onClick={() => {
                                                setOpen(false)
                                                action(relatedRef?.current)
                                            }}>
                                                {label}
                                            </MenuItemButton>
                                        </MenuItem>
                                    )
                                )}
                            </MenuList>
                        </NavigationSection>
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
