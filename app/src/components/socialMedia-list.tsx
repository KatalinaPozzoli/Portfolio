import React from 'react';
import styled from "styled-components";
import {SocialMedia} from "~/declarations";

const SocialMediaStyles = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 1em;
  align-items: center;
`

interface SocialMediaProps {
    items: SocialMedia[]
}

const SocialMediaList = ({items}: SocialMediaProps) => {
    return (
        <SocialMediaStyles>
            {items.map((socialMedia, index) => (
                <li className="nav-bar-sections__section" key={index}>
                    <a href={socialMedia.link} target="_blank">
                        <img src={socialMedia.icon} alt={socialMedia.linkDescription}/>
                    </a>
                </li>
            ))}
        </SocialMediaStyles>
    );
};

export default SocialMediaList;
