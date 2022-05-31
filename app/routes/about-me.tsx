import React, {useContext} from 'react';
import styled from "styled-components";
import ConstrainedContainer from "~/src/components/content-constraint";
import {MenuSection} from "~/declarations";
import {navigationContext, NavigationContext} from "~/root";

const SAboutMe = styled.section`
  .about-me {
    &__me-description {
      margin-bottom: 2em;
      grid-area: about-me;
    }

    &__frameworks {
      margin-bottom: 1em;
      grid-area: skills;
      @media screen and (min-width: 600px) {
        margin-top: 2em;
        margin-bottom: 0;
      }
    }

    &__image {
      width: 100%;
      grid-area: image;
    }
  }

  h1 {
    font-size: 1.5em;
    width: fit-content;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1em;
    line-height: 1.4em;
    letter-spacing: 0.03em;
    margin-bottom: 1em;
  }

  h2 {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1.1em;
    line-height: 19px;
    margin-bottom: 1.2em;
  }

  li {
    display: flex;
    gap: 0.8em;
    margin-bottom: 1.2em;
  }

  button {
    margin-bottom: 1.5em;
    width: 100%;
    max-height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7em;
    box-sizing: border-box;
    background-color: var(--accent-light);
    border-radius: 0.5em;
    grid-area: download-button;
    @media screen and (min-width: 600px) {
      margin-top: 0;
    }
  }

  a {
    text-decoration: none;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 1em;
    color: #333333;
  }
`
const Container = styled(ConstrainedContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
  padding: 0 0.5em;
  box-sizing: border-box;
  margin-top: 4em;
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-areas:
          "about-me skills"
          "about-me download-button"
          "image image";
  }


`

const DesignToolIcons = [
    {link: "/assets/icons/figma.png", alt: "Figma icon"},
    {link: "/assets/icons/illustrator.png", alt: "Illustrator icon"},
    {link: "/assets/icons/photoshop.png", alt: "Photoshop icon"},
    {link: "/assets/icons/miro.png", alt: "Miro icon"},
    {link: "/assets/icons/whimsical.png", alt: "Whimsical icon"},
]

const WebToolIcons = [
    {link: "/assets/icons/html.png", alt: "HTML icon"},
    {link: "/assets/icons/css.png", alt: "CSS icon"},
    {link: "/assets/icons/sass.png", alt: "SASS icon"},
    {link: "/assets/icons/javascript.png", alt: "JavaScript icon"},
    {link: "/assets/icons/react.png", alt: "React icon"},
    {link: "/assets/icons/angular.png", alt: "Angular icon"},
    {link: "/assets/icons/github.png", alt: "Github icon"},
]
export const AboutMeMenuSections: MenuSection[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'About Me',
        link: '#'
    },
    {
        label: 'Projects',
        link: '/#projects'
    },
    {
        label: 'Contact',
        link: '/#contact'
    },
    {
        label: 'Resume',
        link: "https://api.cdn.doesrobbiedream.com/katita/PozzoliKatalinaCV.pdf"
    },
]

const AboutMe = () => {
    const navigation: NavigationContext = useContext(navigationContext)
    navigation.setMenuItems(AboutMeMenuSections
    )
    return (
        <SAboutMe>
            <Container>
                <section className="about-me__me-description">
                    <h1 className="highlight">About Me</h1>
                    <div>
                        <p>Hi, I'm a User experience designer and web developer based in Argentina. I started two years
                            ago
                            as a
                            web
                            developer using HTML, CSS, JavaScript (more specifically Angular).
                        </p>
                        <p>
                            I got into UI design when a friend of mine asked me to work on the designs of a project she
                            was
                            working
                            on. It pushed my (poor) knowledge limits, so I started learning more in-depth about design
                            principles,
                            patterns, and systems in order to fill those needs. It was that experience that hook me into
                            this
                            world
                            that I fell in love with. And the more I learn, the more I loved it. I haven’t stopped
                            learning
                            since.
                        </p>
                        <p>
                            I took a 13-week UX/UI Bootcamp, and then I joined a UX design community where I took a UI
                            summer
                            marathon, where I developed 14 designs in 14 days. It was an incredible experience where I
                            met a
                            lot
                            of
                            beautiful people that helped me to grow more, especially in what it means to work in a
                            community.

                        </p>
                        <p>
                            Beyond design and development, when I'm not working, I'm probably bouldering or reading
                            about
                            human
                            psychology or reading some utopian sci-fi novel.
                        </p>
                    </div>
                </section>
                <section className="about-me__frameworks">
                    <div>
                        <h1 className="highlight">Skills & Frameworks </h1>
                        <h2>
                            Design Tools
                        </h2>
                        <li>
                            {DesignToolIcons.map((tool, index) => <ul key={index}>
                                <img src={tool.link} alt={tool.alt}/>
                            </ul>)}
                        </li>
                        <h2>
                            Development frameworks
                        </h2>
                        <li>
                            {WebToolIcons.map((tool, index) => <ul key={index}>
                                <img src={tool.link} alt={tool.alt}/>
                            </ul>)}
                        </li>
                    </div>
                </section>
                <button>
                    <a href="https://api.cdn.doesrobbiedream.com/katita/PozzoliKatalinaCV.pdf" target="_blank"> Download
                        resume </a>
                </button>
                <img className="about-me__image" src="/assets/kp-friends.png"
                     alt="katalina pozzoli and group of friends"/>
            </Container>
        </SAboutMe>
    );
};

export default AboutMe;
