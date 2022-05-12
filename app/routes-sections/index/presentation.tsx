import React from 'react';
import styled from "styled-components";
import SocialMediaList from "../../src/components/socialMedia-list";
import {SocialMedia} from "~/declarations";

const PresentationStyles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  h1{
    font-size: 1.5em;
  }
`

interface PresentationProps {
    socialMedia: SocialMedia[]
}

const Presentation = ({socialMedia}: PresentationProps) => {
    return (
        <PresentationStyles>
            <h1> Hey there, <span className="highlight--pen"> I’m Katalina! </span></h1>
            <p>I'm a UX Designer and web developer.
                My goal is to be able to combine both disciplines to design and develop meaningful, usable and
                accessible experiences.
                You can check out my work below.
            </p>
            <SocialMediaList items={socialMedia}/>
        </PresentationStyles>
    );
};

export default Presentation;
