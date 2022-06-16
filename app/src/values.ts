import {MenuSection, Project, SocialMedia} from "~/declarations";

export const projectsList: Project[] = [
    {
        type: 'DESIGN',
        title: 'BudgTravel',
        description: 'Design a travel budget app for a UX challenge',
        tools: ['UX RESEARCH', 'UI DESIGN', 'PROTOTYPING', 'FIGMA'],
        image: '/assets/BudgTravel.png',
        buttonLabel: 'Read the study case',
        link: 'https://www.behance.net/gallery/142018277/Case-Study-BudgTravel'
    },
    {
        type: 'DESIGN',
        title: 'Estación Vertical',
        description: 'Redesign of a landing page',
        tools: ['UX WRITING', 'UX RESEARCH', 'UI DESIGN', 'FIGMA'],
        image: '/assets/EstacionVertical.png',
        buttonLabel: 'Read the study case',
        link: 'https://www.behance.net/gallery/141330771/Case-Study-Estacion-Vertical/modules/798509173'
    },
    {
        type: 'DESIGN',
        title: 'IfIWere',
        description: 'Design of an end-to-end mobile application as a final project of a UX/UI bootcamp',
        tools: ['UX RESEARCH', 'UI DESIGN', 'PROTOTYPING', 'USER TESTING', 'FIGMA'],
        image: '/assets/KP-IfIWere-thumbnail.png',
        buttonLabel: 'Read the study case',
        link: 'https://www.behance.net/gallery/134652681/IfIWere'
    },
    {
        type: 'DEVELOPMENT',
        title: 'My portfolio',
        description: 'I designed and developed my own page. I made it on React because I wanted to learn a new JS framework',
        tools: ['FIGMA', 'REMIX', 'REACT', 'TYPESCRIPT', 'HTML', 'CSS'],
        image: '/assets/KP-portfolio.png',
        buttonLabel: 'Try it',
        link: 'https://katalinapozzoli.com/'
    },
    {
        type: 'DEVELOPMENT',
        title: 'Budget Calculator',
        description: 'This project is a budget calculator made in angular, you can set your income and your expenses, and it calculates your budget',
        tools: ['ANGULAR 13', 'TYPESCRIPT', 'HTML', 'CSS'],
        image: '/assets/kp-budget-calculator.png',
        buttonLabel: 'Try it',
        link: 'https://projects.katalinapozzoli.com/budget'
    },
    {
        type: 'DEVELOPMENT',
        title: 'Tic-Tac-Toe',
        description: 'This game is one of the most popular starter projects.',
        tools: ['ANGULAR 13', 'TYPESCRIPT', 'HTML', 'CSS'],
        image: '/assets/kp-tateti.png',
        buttonLabel: 'Try it',
        link: 'https://projects.katalinapozzoli.com/tic-tac-toe'
    },
    {
        type: 'DEVELOPMENT',
        title: 'To do list',
        description: 'I made a to-do list in angular to practice, you can see all your tasks, completed tasks, and clear the ones that you have already made',
        tools: ['ANGULAR 13', 'TYPESCRIPT', 'HTML', 'CSS'],
        image: '/assets/kp-todo.png',
        buttonLabel: 'Try it',
        link: 'https://projects.katalinapozzoli.com/todo-list'
    },
]

export const SocialMediaList: SocialMedia[] = [
    {
        icon: '/assets/icons/mail-icon.svg',
        label: 'Katalinapozzoli2000@gmail.com',
        link: 'mailto:katalinapozzoli2000@gmail.com',
        linkDescription: 'mail icon'
    },
    {
        icon: '/assets/icons/linkedin-icon.svg',
        label: 'Linkedin.com/in/katalina-pozzoli/',
        link: 'https://www.linkedin.com/in/katalina-pozzoli/',
        linkDescription: 'linkedin icon'
    },
    {
        icon: '/assets/icons/behance-icon.svg',
        label: 'Behance.net/katalinaPozzoli',
        link: 'https://www.behance.net/katalinaPozzoli',
        linkDescription: 'behance icon'
    },
    {
        icon: '/assets/icons/dribble-icon.svg',
        label: 'Dribbble.com/KatitaP',
        link: 'https://dribbble.com/KatitaP',
        linkDescription: 'dribble icon'
    },
    {
        icon: '/assets/icons/github-icon.svg',
        label: 'Github.com/katalinaPozzoli',
        link: 'https://github.com/KatalinaPozzoli',
        linkDescription: 'github icon'
    },
]

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
        link: '#contact'
    },
]

export const Breakpoints = {
    DESKTOP: '1181px'
}

export const BreakpointValues = {
    DESKTOP: 1181
}
