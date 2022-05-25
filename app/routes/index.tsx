// HTTP: GET, POST, PUT, DELETE
// Remix:
// GET -> LoaderFunction => export const loader
// POST, PUT, DELETE -> ActionFunction => export const action
// Render => export default

import React, {useContext} from "react";
import Presentation from "~/routes-sections/index/presentation";
import styled from "styled-components";
import Projects from "~/routes-sections/index/projects";
import {projectsList, SocialMediaList} from "~/src/values";
import ContactMe from "~/routes-sections/index/contact-me";
import {MenuSection} from "~/declarations";
import {NavigationContext, navigationContext} from "~/root";

const SPortfolio = styled.section`
  padding: 2em 2em 0 2em;
  box-sizing: border-box;
`

export const HomeMenuSections: MenuSection[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'About Me',
        link: 'about-me'
    },
    {
        label: 'Projects',
        link: '#projects'
    },
    {
        label: 'Contact',
        link: '#contact'
    },
    {
        label: 'Resume',
        link: "https://api.cdn.doesrobbiedream.com/katita/PozzoliKatalinaCV.pdf"
    },
]


export default function Index() {

    const navigation: NavigationContext = useContext(navigationContext)
    navigation.setMenuItems(HomeMenuSections)

    return (
        <SPortfolio>
            <Presentation socialMedia={SocialMediaList}/>
            <Projects projects={projectsList}/>
            <ContactMe items={SocialMediaList}/>
        </SPortfolio>
    )
}
