import React, {useContext} from 'react';
import styled from "styled-components";
import ConstrainedContainer from "~/src/components/content-constraint";
import {MenuSection} from "~/declarations";
import {navigationContext, NavigationContext} from "~/root";

const SAboutMe = styled.section`
  padding: 0 1.5em;
  box-sizing: border-box;
  .about-me {
    &__me-description {
      font-size: 1.1em;
      grid-area: about-me;
      max-width: 700px;
      @media screen and (min-width: 600px){
        margin-right: 2em;
      }
    }

    &__frameworks {
      margin-bottom: 1em;
      grid-area: skills;
      align-self: flex-start;
      border: solid 1px black;
      border-radius: 8px;
      box-shadow: 2px 2px 0 #000000;
      width: 100%;
      max-width: 430px;
      @media screen and (min-width: 600px) {
        margin-top: 2em;
        margin-bottom: 0;
      }

      h1 {
        width: 100%;
        font-size: 1.3em;
        font-weight: 400;
        background-color: var(--accent-base);
        padding: 0.8em 1em;
        box-sizing: border-box;
        border-bottom: solid 1px black;
        border-radius: 8px 8px 0 0;
      }

      &-list {
        padding: 0.8em;
        box-sizing: border-box;
        @media screen and (min-width: 600px) {
          padding: 1em 2em;
        }
      }
    }

    &__image {
      width: 100%;
      grid-area: image;
      margin-top: 0;
      @media screen and (min-width: 600px) {
        margin-top: 2em;
      }
    }
  }

  h1 {
    font-size: 1.5em;
    width: fit-content;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1em;
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

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9em;
    margin-bottom: 1.5em;
  }

  button {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7em;
    box-sizing: border-box;
    background: #CDDAFD;
    border: 1px solid #000000;
    box-shadow: 2px 2px 0 #000000;
    border-radius: 8px;
    font-size: 1em;
    @media screen and (min-width: 600px) {
      margin-top: 3em;
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
                    <h1 className="highlight"><span>About Me</span></h1>
                    <div>
                        <p>Hi, I'm a User experience designer and web developer based in Spain. I started two years
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
                            Beyond design and development, when I'm not working, I'm probably bouldering, playing board games with friends or reading
                            about human psychology or some utopian sci-fi novel.
                        </p>
                    </div>
                </section>
                <section className="about-me__frameworks">
                    <h1>Skills & Frameworks </h1>
                    <div className="about-me__frameworks-list">
                        <h2>
                            Design Tools
                        </h2>
                        <ul>
                            {DesignToolIcons.map((tool, index) => <li key={index}>
                                <img src={tool.link} alt={tool.alt}/>
                            </li>)}
                        </ul>
                        <h2>
                            Development frameworks
                        </h2>
                        <ul>
                            {WebToolIcons.map((tool, index) => <li key={index}>
                                <img src={tool.link} alt={tool.alt}/>
                            </li>)}
                        </ul>
                        <button>
                            <a href="https://api.cdn.doesrobbiedream.com/katita/PozzoliKatalinaCV.pdf"
                               target="_blank"> Download
                                resume </a>
                        </button>
                    </div>

                </section>
                <img className="about-me__image" src="/assets/kp-friends.png"
                     alt="katalina pozzoli and group of friends"/>
            </Container>
        </SAboutMe>
    );
};

export default AboutMe;
