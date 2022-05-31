import React from 'react';
import styled from "styled-components";
import {SocialMedia} from "~/declarations";
import ConstrainedContainer from "../../src/components/content-constraint";

const ContactMeStyles = styled.section`

  h1 {
    width: fit-content;
    font-size: 1.5em;
  }

  h2 {
    font-size: 1em;
  }

  .contact-me {
    &__image {
      display: none;
      @media screen and (min-width: 1024px) {
        display: flex;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1em;
    }

    &__social-media {
      &-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 0.5em;
        box-sizing: border-box;
      }

      &-list {
        display: flex;
        gap: 1em;
      }

      &-item {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1em;
      }

      &-label {
        font-size: 0.8em;

        @media (min-width: 320px) {
          font-size: 1em;
        }
      }
    }
  }
`
const Container = styled(ConstrainedContainer)`
  display: flex;
  width: 100%;
  gap: 2em;
  justify-content: space-between;
  margin-top: 5em;
`

interface ContactMeProps {
    items: SocialMedia[]
}

const ContactMe = ({items}: ContactMeProps) => {
    return (
        <ContactMeStyles>
            <Container>
                <img className="contact-me__image" src="/assets/kp-working.png" alt="katalina pozzoli working"/>
                <div className="contact-me__content">
                    <h1 className="highlight"> Got a project in mind? </h1>
                    <h2>
                        Let's make something awesome together. You can find me on my social media:
                    </h2>
                    <div className="contact-me__social-media-container">
                        {items.map((socialMedia, index) => (
                            <li className="contact-me__social-media-list" key={index}>
                                <a className="contact-me__social-media-item" href={socialMedia.link} target="_blank">
                                    <img src={socialMedia.icon} alt={socialMedia.linkDescription}/>
                                    <p className="contact-me__social-media-label"> {socialMedia.label} </p>
                                </a>
                            </li>))}
                    </div>
                </div>

            </Container>
        </ContactMeStyles>
    );
};

export default ContactMe;
