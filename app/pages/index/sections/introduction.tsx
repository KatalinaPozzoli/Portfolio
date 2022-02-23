import React from 'react';
import {
    BehanceIcon,
    DribbleIcon,
    GitHubIcon, InnerContainer,
    LinkedInIcon,
    SocialMediaLinksContainer,
    WelcomeTitle,
    WelcomeTitleName
} from "~/pages/index/index.styled";

const Introduction = () => {
    return (
        <InnerContainer>
            <WelcomeTitle>
                Hey there! <br/>
                I’m <WelcomeTitleName>Katalina</WelcomeTitleName>, <br/>
                a UX designer and Front-end Developer
            </WelcomeTitle>
            <SocialMediaLinksContainer>
                <a href="https://www.linkedin.com/in/katalina-pozzoli/" target="_blank" aria-label="linked-in-katalina-pozzoli">
                    <LinkedInIcon size="1.75em"></LinkedInIcon>
                </a>
                <a href="https://github.com/KatalinaPozzoli" target="_blank" aria-label="git-hub-katalina-pozzoli">
                    <GitHubIcon size="1.75em"></GitHubIcon>
                </a>
                <a href="https://dribbble.com/KatitaP" target="_blank" aria-label="dribble-katalina-pozzoli">
                    <DribbleIcon size="1.75em"></DribbleIcon>
                </a>
                <a href="https://www.behance.net/katalinaPozzoli" target="_blank" aria-label="behance-katalina-pozzoli">
                    <BehanceIcon size="1.75em"></BehanceIcon>
                </a>
            </SocialMediaLinksContainer>
        </InnerContainer>
    );
};

export default Introduction;
