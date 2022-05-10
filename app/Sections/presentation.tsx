import React from 'react';
import styled from "styled-components";
import SocialMediaList from "~/components/contact-list";

const PresentationStyles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  h1{
    .highlight{
      position:relative;
      &:before{
         content:"";
          z-index:-1;
          left:-0.5em;
          top:-0.1em;
          border-width:2px;
          border-style:solid;
          border-color:var(--primary-base);
          position:absolute;
          border-right-color:transparent;
          width:100%;
          height:1em;
          transform:rotate(2deg);
          opacity:0.7;
          border-radius:50%;
          padding:0.1em 0.25em;
      }
      &:after{
        content:"";
        z-index:-1;
        left:-0.5em;
        top:0.1em;
        padding:0.1em 0.25em;
        border-width:2px;
        border-style:solid;
        border-color:var(--primary-base);
        border-left-color:transparent;
        border-top-color:transparent;
        position:absolute;
        width:100%;
        height:1em;
        transform:rotate(-1deg);
        opacity:0.7;
        border-radius:50%;
      }
    }
  }
  p{

  }
`

const Presentation = () => {
    return (
        <PresentationStyles>
            <h1> Hey there, <span className="highlight"> I’m Katalina! </span></h1>
            <p>I'm a UX Designer and web developer.
                My goal is to be able to combine both disciplines to design and develop meaningful, usable and accessible experiences.
                You can check out my work below.
            </p>
            <SocialMediaList></SocialMediaList>
        </PresentationStyles>
    );
};

export default Presentation;
