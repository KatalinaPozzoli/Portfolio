import React from 'react';
import styled from "styled-components";

const NavStyles = styled.nav`
  margin-bottom: 6em;
  
  @media screen and (min-width: 600px){
    margin-bottom: 3em;
  }
  .brand-name {
    font-family: var(--font-brand);
    font-size: 1.5em;
  }

`

const NavigationBar = () => {
    return (
        <NavStyles>
            <h1 className="brand-name">Katalina Pozzoli</h1>
            <button>
                <img src="/assets/Menu_Alt_01.svg" alt="menu-button"/>
            </button>

        </NavStyles>
    );
};

export default NavigationBar;
