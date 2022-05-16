import React from 'react';
import styled from "styled-components";
import SocialMediaList from "../../src/components/socialMedia-list";
import {SocialMedia} from "~/declarations";

const PresentationStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-top: 4em;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    margin-top: 3em;
  }

  .presentation {
    &__content {
      display: flex;
      flex-direction: column;
      gap: 1.4em;
      justify-content: center;
      margin-bottom: 1.5em;
      @media screen and (min-width: 600px) {
        max-width: 720px;
        margin-bottom: 0;
        margin-right: 1.5em;
      }
    }
   
  }

  h1 {
    font-size: 1.5em;
  }

  .me-image {
    max-width: 400px;
  }
`

const Container = styled(ConstrainedContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`

interface PresentationProps {
    socialMedia: SocialMedia[]
}

const Presentation = ({socialMedia}: PresentationProps) => {
    return (
        <PresentationStyles>
            <div className="presentation__content">
                <h1> Hey there, <span className="highlight--pen"> I’m Katalina! </span></h1>
                <p>I'm a UX Designer and web developer.
                    My goal is to be able to combine both disciplines to design and develop meaningful, usable and
                    accessible experiences.
                    You can check out my work below.
                </p>
                <SocialMediaList items={socialMedia}/>
            </div>
            <img className="me-image" src="/assets/me-image.png" alt="katalina pozzoli image"/>
        </PresentationStyles>
    );
};

export default Presentation;
