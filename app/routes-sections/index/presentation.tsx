import React from 'react';
import styled from "styled-components";
import SocialMediaList from "../../src/components/socialMedia-list";
import {SocialMedia} from "~/declarations";
import ConstrainedContainer from "~/src/components/content-constraint";

const PresentationStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-top: 4em;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    margin-top: 6em;
  }

  .presentation {
    &__content {
      display: flex;
      flex-direction: column;
      gap: 1.4em;
      justify-content: center;
      margin-bottom: 1.5em;
      @media screen and (min-width: 600px) {
        max-width: 700px;
        margin-right: 1.5em;
      }

      &-text {
        h1 {
          font-size: 1.5em;
        }

        p {
          margin: 0.8em 0;
        }
      }
    }
    &__image{
      max-width: 500px;
    }
  }

  .me-image {
    width: 100%;
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
            <Container>
                <div className="presentation__content">
                    <div className="presentation__content-text">
                        <h1> Hey there, <span className="highlight--pen"> I’m Katalina! </span></h1>
                        <p>I'm a UX Designer and web developer based in Spain 🇪🇸
                        </p>
                        <p>
                            My goal is to be able to combine both disciplines to design and develop meaningful, usable
                            and
                            accessible experiences.
                        </p>
                    </div>
                    <SocialMediaList items={socialMedia}/>
                </div>
                <div className="presentation__image">
                    <img className="me-image" src="/assets/kp-principal.png" alt="katalina pozzoli image"/>
                </div>
            </Container>
        </PresentationStyles>
    );
};

export default Presentation;
