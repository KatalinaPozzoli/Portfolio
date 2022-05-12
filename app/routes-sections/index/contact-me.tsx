import React from 'react';
import styled from "styled-components";
import {SocialMedia} from "~/declarations";

const ContactMeStyles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 2.5em;

  h1 {
    width: fit-content;
    font-size: 1.5em;
  }
  h2{
    font-size: 1em;
  }

  .contact-me {
    &__social-media{
      &-container{
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
      &-list{
        display: flex;
        gap: 1em;
      }
      &-item{
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1em;
      }
    }
  }
`

interface ContactMeProps {
    items: SocialMedia[]
}

const ContactMe = ({items}: ContactMeProps) => {
    return (
        <ContactMeStyles>
            <h1 className="highlight"> Got a project in mind? </h1>
            <h2>
                Let's make something awesome together. You can find me on my social media:
            </h2>
            <div className="contact-me__social-media-container">
                {items.map((socialMedia, index) => (
                    <li className="contact-me__social-media-list" key={index}>
                        <a className="contact-me__social-media-item" href={socialMedia.link} target="_blank">
                            <img src={socialMedia.icon} alt={socialMedia.linkDescription}/>
                            <p> {socialMedia.label} </p>
                        </a>
                    </li>))}
            </div>

        </ContactMeStyles>
    );
};

export default ContactMe;
