import React from 'react';
import styled from "styled-components";
import ConstrainedContainer from "~/src/components/content-constraint";
import {MenuSections} from "~/src/values";

const NavStyles = styled.nav`
  .brand-name {
    font-family: var(--font-brand);
    font-size: 1.5em;
  }
`
const BrandBar = styled.section`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  align-items: center;
  position: relative;
  z-index: 2;
  border-bottom: 1px solid var(--decorative-gray);
  background: white;
  box-shadow: 0 0 10px 0 #e4e4e4;
  
  &.nav-bar-sections__brand-bar--opened {
    box-shadow: 0 0 10px 0 transparent;
  }
  
`
const NavigationMenu = styled.ul`
  position: absolute;
  width: 100%;
  z-index: 1;
  transition: top .3s ease-out;
  top: -500%;
  background: white;
  padding: 1em 0;
  box-shadow: 0 0 10px 0 #e4e4e4;

  &.nav-bar-sections__navigation-menu--opened {
    top: 60px;
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
`

const Container = styled(ConstrainedContainer)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  
  position: relative;

  @media screen and (min-width: 1181px) {
    padding: 1.4em 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

`

const NavigationBar = () => {
    return (
        <NavStyles>
            <Container>
                <BrandBar className={`${opened ? 'nav-bar-sections__brand-bar--opened' : ''}`}>
                    <h1 className="brand-name">Katalina Pozzoli</h1>
                    <button onClick={() => setOpened(!opened)}>
                        <img
                            className={navigationIconClass}
                            src={navigationIcon} alt="menu-button"
                        />
                    </button>
                </BrandBar>
                <NavigationMenu className={`${opened ? 'nav-bar-sections__navigation-menu--opened' : ''}`}>
                    {MenuSections.map((link, index) => (
                        <NavigationItem className="nav-bar-sections__section" key={index}>
                            <a href={link.link} onClick={() => setOpened(!opened)}> {link.label}</a>
                        </NavigationItem>
                    ))}
                </NavigationMenu>
            </Container>
        </NavStyles>
    );
};

export default NavigationBar;
