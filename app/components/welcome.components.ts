import styled, {css} from "styled-components";
import {HiMenuAlt3} from 'react-icons/hi';
import { FaBehanceSquare, FaDribbble, FaGithub, FaLinkedin} from "react-icons/fa";

export const DynamicIcon = css`
  width: ${(props: any) => props.size || '1.5em'};
  height: ${(props: any) => props.size || '1.5em'}
`

export const Container = styled.main`
  padding: 1.5em;
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

export const WelcomeTitle = styled.h1`
  font-size: 1.5em;
  margin-top: 100px;
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
  margin-top: 1.75em;
`

// ICONS
export const HamburgerMenu = styled(HiMenuAlt3)`
  ${DynamicIcon};
  color: var(--primary-dark);
`

export const LinkedInIcon = styled(FaLinkedin)`
  ${DynamicIcon};
  color: var(--primary-base);
`
export const GitHubIcon = styled(FaGithub)`
  ${DynamicIcon};
  color: var(--primary-base);
`
export const DribbleIcon = styled(FaDribbble)`
   ${DynamicIcon};
  color: var(--primary-base);
`
export const BehanceIcon = styled(FaBehanceSquare)`
   ${DynamicIcon};
  color: var(--primary-base);
`
