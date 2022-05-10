import React from 'react';
import styled from "styled-components";

const SocialMediaStyles = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 1em;
  align-items: center;
`

const socialMedia = [
    {icon: '/assets/mail-icon.svg', link: 'katalinapozzoli2000@gmail.com', imgDescription: 'mail icon'},
    {icon: '/assets/linkedin-icon.svg', link: 'https://www.linkedin.com/in/katalina-pozzoli/', imgDescription: 'linkedin icon'},
    {icon: '/assets/behance-icon.svg', link: 'https://www.behance.net/katalinaPozzoli', imgDescription: 'behance icon'},
    {icon: '/assets/dribble-icon.svg', link: 'https://dribbble.com/KatitaP', imgDescription: 'dribble icon'},
    {icon: '/assets/github-icon.svg', link: 'https://github.com/KatalinaPozzoli', imgDescription: 'github icon'},
]

const SocialMediaList = () => {
    return (
        <SocialMediaStyles>
            {socialMedia.map((socialMedia, index) => (
                <li className="nav-bar-sections__section" key={index}>
                    <a href={socialMedia.link} target="_blank">
                        <img src={socialMedia.icon} alt={socialMedia.imgDescription}/>
                    </a>
                </li>
            ))}
        </SocialMediaStyles>
    );
};

export default SocialMediaList;
