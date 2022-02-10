import {
    Container,
    NavBar,
    BrandTitle,
    HamburgerMenu,
    WelcomeTitle,
    WelcomeTitleName,
    SocialMediaLinksContainer, LinkedInIcon, GitHubIcon, DribbleIcon, BehanceIcon
} from '~/components/welcome.components'

export default function WelcomeIndex(){

    const alertWhenHamburgerClicked = () => {
        alert('Hamburger Clicked')
    }

    return (
        <Container>
           <NavBar>
               <BrandTitle>Katalina Pozzoli</BrandTitle>
               <HamburgerMenu  onClick={alertWhenHamburgerClicked}/>
           </NavBar>
            <WelcomeTitle>
                Hey there! <br/>
                I’m <WelcomeTitleName>Katalina</WelcomeTitleName>, <br/>
                a UX designer and <br/>
                Front-end Developer
            </WelcomeTitle>
            <SocialMediaLinksContainer>
                <a href="https://www.linkedin.com/in/katalina-pozzoli/" target="_blank">
                    <LinkedInIcon size="1.75em"></LinkedInIcon>
                </a>
                <a href="https://github.com/KatalinaPozzoli" target="_blank">
                    <GitHubIcon size="1.75em"></GitHubIcon>
                </a>
                <a href="https://dribbble.com/KatitaP" target="_blank">
                    <DribbleIcon size="1.75em"></DribbleIcon>
                </a>
                <a href="https://www.behance.net/katalinaPozzoli" target="_blank">
                    <BehanceIcon size="1.75em"></BehanceIcon>
                </a>


            </SocialMediaLinksContainer>
        </Container>
    )
}
