import React, {useState, VoidFunctionComponent} from 'react';
import styled from "styled-components";
import ConstrainedContainer from "~/src/components/content-constraint";
import {Breakpoints} from "~/src/values";
import {useWindowWidth} from "~/src/effects/useWindowWidth";
import {MenuSection} from "~/declarations";

const NavStyles = styled.nav`
  max-width: 100%;
  background-color: var(--primary-base);
  border-bottom: 0.5px solid black;
  box-shadow: 0 0 10px 0 #e4e4e4;

  .brand-name {
    font-family: var(--font-brand);
    font-size: 1.5em;
    
  }
`
const BrandBar = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 1.5em;
  box-sizing: border-box;
  z-index: 2;
  
  @media screen and (min-width: ${Breakpoints.DESKTOP}) {
    padding: 0;
  }
`
const NavigationMenu = styled.ul`
  width: 100%;
  z-index: 2;
  transition: top .3s ease-out;
  background: white;
  padding: 1em 0;
  box-shadow: 0 0 10px 0 #e4e4e4;
  position: absolute;
  top: -500%;

  &.nav-bar-sections__navigation-menu--opened {
    top: 70px;
  }

  @media screen and (min-width: ${Breakpoints.DESKTOP}) {
    position: static;
    top: auto;
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: none;
    box-shadow: none;
  }
`

const NavigationItem = styled.li`
  padding: 0 2em;
  margin-bottom: 0.6em;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: var(--font-heading);
  color: var(--text-regular);
  font-weight: 300;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${Breakpoints.DESKTOP}) {
    padding: 0 1.25em;
    position: relative;
    margin-bottom: 0;
    a {
      &:hover, &.active, &:focus {
        font-weight: 500;
        color: black;
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
        background: black;
        transition: width .3s;
      }

      &:after {
        right: 50%;
      }

      &:before {
        left: 50%
      }
    }

  }
`

const Container = styled(ConstrainedContainer)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;

  button {
    cursor: pointer;
    background: transparent;
    padding: 0;
  }

`

const NavigationBar: VoidFunctionComponent<{ menuSections: MenuSection[] }> = ({menuSections}) => {
    const [opened, setOpened] = useState(false)
    const windowWidth = useWindowWidth()
    // Navigation Icon
    const navigationIcon = opened ? '/assets/icons/Close_Circle.svg' : '/assets/icons/Menu_Alt_01.svg'
    const navigationIconClass = opened
        ? 'nav-bar__hamburger-menu-icon nav-bar__hamburger-menu-icon--opened'
        : 'nav-bar__hamburger-menu-icon'

    const renderNavigationMenu = () => {
        return (
            <NavigationMenu className={`${opened ? 'nav-bar-sections__navigation-menu--opened' : ''}`}>
                {menuSections.map((link, index) => (
                    <NavigationItem className="nav-bar-sections__section" key={index}>
                        <a href={link.link} onClick={() => setOpened(!opened)}> {link.label}</a>
                    </NavigationItem>
                ))}
            </NavigationMenu>
        )
    }

    const isDesktop = () => windowWidth && windowWidth >= 1181
    const isMobile = () => windowWidth && windowWidth <= 1180

    return (
        <NavStyles>
            <Container>
                <BrandBar className={`${opened ? 'nav-bar-sections__brand-bar--opened' : ''}`}>
                    <h1 className="brand-name">
                        <a href="/">Katalina Pozzoli</a>
                        </h1>
                    {
                        isDesktop()
                            ? renderNavigationMenu()
                            : (
                                <button onClick={() => setOpened(!opened)}>
                                    <img
                                        className={navigationIconClass}
                                        src={navigationIcon} alt="menu-button"
                                    />
                                </button>
                            )
                    }
                </BrandBar>
                {isMobile() ? renderNavigationMenu() : ''}
            </Container>
        </NavStyles>
    );
};

export default NavigationBar;
