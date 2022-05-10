import {Project, SocialMedia} from "~/declarations";

export const projects: Project[] = [
    {
        type: 'DESIGN',
        title: 'IfIWere',
        description: 'Design of an end-to-end mobile application as a final project of a UX/UI bootcamp',
        tools: ['UX RESEARCH', 'UX DESIGN', 'UI DESIGN', 'PROTOTYPING', 'USER TESTING', 'FIGMA'],
        image: '/assets/KP-IfIWere-thumbnail.png',
        buttonLabel: 'Read the study case',
        link: 'https://www.behance.net/gallery/134652681/IfIWere'
    },
    {
        type: 'DESIGN',
        title: 'Estación Vertical',
        description: 'Redesign of a landing page',
        tools: ['UX RESEARCH', 'UX DESIGN', 'UI DESIGN', 'UX WRITING', 'FIGMA'],
        image: '/assets/EstacionVertical.png',
        buttonLabel: 'Read the study case',
        link: 'https://www.behance.net/gallery/141330771/Case-Study-Estacion-Vertical/modules/798509173'
    },
    {
        type: 'DESIGN',
        title: 'BudgTravel',
        description: 'Design a travel budget app for a UX challenge',
        tools: ['UX RESEARCH', 'UX DESIGN', 'UI DESIGN', 'PROTOTYPING', 'FIGMA'],
        image: '/assets/BudgTravel.png',
        buttonLabel: 'Read the study case',
        link: 'https://www.behance.net/gallery/142018277/Case-Study-BudgTravel'
    },
    {
        type: 'DESIGN',
        title: 'Dribble Designs',
        description: 'Daily UI design challenges to practice',
        tools: ['UI DESIGN', 'FIGMA'],
        image: '/assets/KP-DailyCollectionImage.png',
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

export const SocialMediaList : SocialMedia[] = [
    {icon: '/assets/mail-icon.svg', link: 'mailto:katalinapozzoli2000@gmail.com', linkDescription: 'mail icon'},
    {icon: '/assets/linkedin-icon.svg', link: 'https://www.linkedin.com/in/katalina-pozzoli/', linkDescription: 'linkedin icon'},
    {icon: '/assets/behance-icon.svg', link: 'https://www.behance.net/katalinaPozzoli', linkDescription: 'behance icon'},
    {icon: '/assets/dribble-icon.svg', link: 'https://dribbble.com/KatitaP', linkDescription: 'dribble icon'},
    {icon: '/assets/github-icon.svg', link: 'https://github.com/KatalinaPozzoli', linkDescription: 'github icon'},
]
