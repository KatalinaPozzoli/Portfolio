import React from 'react';
import styled from "styled-components";
import {SocialMedia} from "~/declarations";
import SocialMediaList from "~/src/components/socialMedia-list";

const FooterStyles = styled.footer`
  background-color: var(--primary-base);
  margin-left: -2em;
  margin-right: -2em;
  margin-top: 4em;
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
    
    @media screen and (min-width: 600px ) {
      align-self: center;
    }
  }
  
  span {
    color: var(--primary-dark);
    font-weight: 500;
    font-size: 0.9em;
  }
 
`

const Container = styled(ConstrainedContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
  padding: 0 0.5em;
  box-sizing: border-box;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
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
