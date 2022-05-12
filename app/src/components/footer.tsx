import React from 'react';
import styled from "styled-components";
import {SocialMedia} from "~/declarations";
import SocialMediaList from "~/src/components/socialMedia-list";

const FooterStyles = styled.footer`
  background-color: var(--primary-base);
  margin-left: -1.5em;
  margin-right: -1.5em;
  margin-top: 2.5em;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1em;
  
  @media screen and (min-width: 600px ){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  p{
    font-size: 0.9em;
  }
  
  span {
    color: var(--primary-dark);
    font-weight: 500;
    font-size: 0.9em;
  }
 
`

interface FooterProps {
    socialMedia: SocialMedia[]
}

const Footer = ({socialMedia}: FooterProps) => {
    return (
        <FooterStyles>
            <SocialMediaList items={socialMedia}/>
            <p> 2022 . Made with love and coffee by <span>Katalina Pozzoli</span></p>
        </FooterStyles>
    );
};

export default Footer;
