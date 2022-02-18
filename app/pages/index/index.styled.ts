import styled, {css} from "styled-components";
import {HiMenuAlt3} from 'react-icons/hi';
import {FaBehanceSquare, FaDribbble, FaGithub, FaLinkedin} from "react-icons/fa";

//COMMONS
export const DynamicIcon = css`
  width: ${(props: any) => props.size || '1.5em'};
  height: ${(props: any) => props.size || '1.5em'};
  color: ${(props: any) => props.color || 'var(--primary-base)'}
`
export const PortfolioButton = styled.button`
  background-color: var(--primary-dark);
  color: white;
  font-family: var(--font-body);
  font-weight: 500;
  border: none;
  border-radius: 1em;
  padding: 1em;
`

//HEADER
export const Container = styled.main`
  padding: 1.5em;
`

export const InnerContainer = styled.section`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

export const NavBar = styled.nav`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BrandTitle = styled.h1`
  font-size: 1.5em;
  font-family: var(--font-brand);
`

//FOOTER
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  padding: 1em;
`
export const BrandFooterTitle = styled.h3`
  font-family: var(--font-brand);
  font-size: 1.2em;
  margin: 0 0 8px 0;
`
export const FooterLine = styled.span`
  background: var(--accent-dark);
  height: 1px;
  width: 150px;
  margin: 0.75em 0;
`

//DESCRIPTION SECTION
export const WelcomeTitle = styled.h1`
  font-size: 1.5em;
  margin-top: 100px;
  margin-bottom: 1em;
`
export const WelcomeTitleName = styled.span`
  font-size: 1.75em;
  font-family: var(--font-brand);
  color: var(--accent-dark);
`
export const SocialMediaLinksContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`

// ICONS
export const HamburgerMenu = styled(HiMenuAlt3)`
  ${DynamicIcon};
  color: var(--primary-dark);
`

export const LinkedInIcon = styled(FaLinkedin)`
  ${DynamicIcon};
`
export const GitHubIcon = styled(FaGithub)`
  ${DynamicIcon};
`
export const DribbleIcon = styled(FaDribbble)`
  ${DynamicIcon};
`
export const BehanceIcon = styled(FaBehanceSquare)`
  ${DynamicIcon};
`

//ABOUT ME SECTION
export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-light);
  margin-left: -2em;
  margin-right: -2em;
  margin-top: 2.5em;
  padding: 2em;
`
export const MeImage = styled.img`
  display: flex;
  width: 235px;
  height: auto;
  align-self: center;
`
export const WhoAmITitle = styled.h2`
  margin-bottom: 8px;
`

export const WhoAmIDescription = styled.p`
  margin-top: 0;
`

//PROJECTS
export const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
`
export const ProjectsTitle = styled.h2`
  margin-bottom: 8px;
`

export const ProjectsDescription = styled.p`
  margin-top: 0;
`
export const ProjectsButtonsSection = styled.section`
  display: flex;
  gap: 1em;
`
export const TypeOfProjectButton = styled.button<{ active: boolean }>`
  transition: background-color .3s, color .3s;
  background-color: ${ (props) => props.active ? 'var(--accent-dark)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--accent-dark)' };
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 0.8em;
  border: none;
  border-radius: 1em;
  padding: 0.65em;
  cursor: pointer;
  
`
export const ProjectsContainer =styled.section``

//CONTACT
export const ContactMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--accent-light);
  margin-left: -2em;
  margin-right: -2em;
  margin-top: 2.5em;
  padding: 2em;
`
export const ContactMeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
`

export const ContactMeDescription = styled.p`
  margin-top: 0
`
export const ContactMeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const ContactMeInput = styled.input`
  border: #E5E5E5;
  border-radius: 1em;
  padding: 1em;

  ::placeholder {
    color: #9A9A9F;
    font-family: var(--font-body);
    font-weight: 300;
  }
`
export const ContactMeTextarea = styled.textarea`
  border: #E5E5E5;
  border-radius: 1em;
  padding: 1em;
  min-height: 5em;
  margin-bottom: 1em;

  ::placeholder {
    color: #9A9A9F;
    font-family: var(--font-body);
    font-weight: 300;
  }
`

