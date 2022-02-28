import styled, {css} from "styled-components";
import {HiMenuAlt3} from 'react-icons/hi';
import {FaBehanceSquare, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import {IoIosCloseCircle} from "react-icons/io"

//COMMONS
export const LeafIllustrationLeft = styled.img`
  display: none;
  @media screen and (min-width: 1340px) {
    display: flex;
    position: absolute;
    height: 30em;
    top: 0;
    left: 2em;
  }
  @media screen and (min-width: 1700px) {
    height: 35em;
    left: 10em;
  }
`
export const LeafIllustrationRight = styled.img`
  display: none;
  @media screen and (min-width: 1340px) {
    display: flex;
    position: absolute;
    height: 30em;
    top: 0;
    right: 2em;
  }
  @media screen and (min-width: 1700px) {
    height: 35em;
    right: 10em;
  }
`
export const DynamicIcon = css`
  width: ${(props: any) => props.size || '1.5em'};
  height: ${(props: any) => props.size || '1.5em'};
  color: ${(props: any) => props.color || 'var(--primary-base)'};
  cursor: pointer;
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
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  position:relative;
  display: block;
`
//NAVBAR
export const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  height: 65px;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  
  .navbar__container {
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1em;
    box-sizing: border-box;
    background-color: rgb(255,255,255, 0.9);
    backdrop-filter: blur(2px);
    position: relative;
    z-index: 1;
  }
  
  @media screen and (min-width: 768px){
    position: relative;
    justify-content: space-between;
  }
`

export const BrandTitle = styled.h1`
  font-size: 1.5em;
  font-family: var(--font-brand);
  flex: 1;
  margin: 0;
`
export const NavigationSection = styled.section<{open: boolean}>`
  transition: top .3s;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(2px);
  z-index: 0;
  
  .close-icon {
    position: absolute;
    top: 1em;
    right: 1em;
    z-index: 1;
  }

  @media screen and (max-width: 768px){
    position: absolute;
    top: ${(props: any) => props.open ? "64px" : "-500%"};
    //top: 0;
    left: 0;
    right: 0;
    padding: 1em 0;
  }
`
export const MenuList = styled.ul<{open: boolean}>`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 1em;
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media screen and (max-width: 768px){
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
  @media screen and (min-width: 769px) {
    position: static;
    display: flex;
    font-size: 0.8em;
  }
  @media screen and (min-width: 940px) {
    gap: 1.5em;
    font-size: 1em;
  }
`

export const MenuItem = styled.li`
  height: 100%;
  position: relative;

  &:hover, &.active {
    color: var(--accent-dark);

    &:after, &:before {
      width: 50%;
    }
  }

  &:after, &:before {
    content: '';
    position: absolute;
    top: calc(100% + 0.25em);
    width: 0;
    height: 1px;
    background: var(--accent-dark);
    transition: width .3s;
  }

  &:after {
    right: 50%;
  }

  &:before {
    left: 50%
  }
  
  @media screen and (max-width: 768px){
    display: inline-flex;
  }
`

export const MenuItemButton = styled.button`
  font-size: 1em;
  font-family: var(--font-heading);
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  color: inherit;
  
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
  margin-top: 196px;
  margin-bottom: 1em;
  width: 270px;
  @media screen and (min-width: 769px) {
    width: 100%;
  }
`
export const WelcomeTitleName = styled.span`
  font-size: 1.75em;
  font-family: var(--font-brand);
  color: var(--accent-dark);
  margin-left: 0.1em;
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
  display: flex;
  @media screen and (min-width: 769px){
    display: none;
  }
`
export const CloseCircle = styled(IoIosCloseCircle)`
  ${DynamicIcon};
  color: var(--primary-dark);
  display: flex;
  @media screen and (min-width: 769px){
    display: none;
  }
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
export const AboutMeSection = styled.section`
  background-color: var(--primary-light);
  margin-left: -2em;
  margin-right: -2em;
  margin-top: 2.5em;
  padding: 2em;

  @media screen and (min-width: 769px) {
    margin-top: 4em;
  }
`

export const AboutMeContainer = styled(InnerContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`

export const MeImage = styled.img`
  display: flex;
  flex: 0.5;
  margin-top: calc(0.83em * 1.5);
  border-radius: 0.8em;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`
export const AboutMeDescriptionText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  @media screen and (min-width: 769px) {
    margin-left: 2em;
    max-width: 850px;
  }
`

export const WhoAmITitle = styled.h2`
  margin-bottom: 0;
`

export const WhoAmIDescription = styled.section`
  margin-top: 0;
  p {
    font-size: 1em;
    line-height: 1.3em;
    word-spacing: 0.08em;
  }
  @media screen and (min-width: 520px){
    p {
      font-size: 1em;
      line-height: 1.5em;
      word-spacing: 0.1em;
    }
  }
`

//PROJECTS
export const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  padding-top: 1em;
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
  background-color: ${(props) => props.active ? 'var(--accent-dark)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--accent-dark)'};
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 1em;
  border: none;
  border-radius: 1em;
  padding: 0.5em 2em;
  cursor: pointer;

`
export const ProjectsContainer = styled.section``

//CONTACT
export const ContactMeContainer = styled.section`
  background-color: var(--accent-light);
  margin-left: -2em;
  margin-right: -2em;
  margin-top: 2.5em;
  padding: 2em;
  @media screen and (min-width: 769px) {
    margin-top: 4em;
  }
`
export const FormSectionContainer = styled.section`
  display: flex;
  align-items: flex-start;
`
export const FormBodySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 769px) {
    margin-left: 2em;
  }
`

export const ContactMeImage = styled.img`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    flex: 1;
    border-radius: 0.8em;
  }
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
  flex: 0.98;
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

