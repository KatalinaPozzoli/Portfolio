import {AboutMeContainer, InnerContainer, MeImage, WhoAmIDescription, WhoAmITitle} from "~/pages/index/index.styled";
import img from '../../assets/Imagen-ejemplo.png'

const WhoAmI = () => {
    return (
        <AboutMeContainer>
            <InnerContainer>
                <MeImage src={img} alt="katalina-pozzoli-image"/>
                <WhoAmITitle>Who am I?</WhoAmITitle>
                <WhoAmIDescription>Hi, I'm a User experience designer and web developer based in Argentina.
                    I started in the world of technology two years ago, and since then I haven't stopped learning.
                    I consider myself a curious person, I like challenges, problem-solving, and working with
                    people.</WhoAmIDescription>
            </InnerContainer>
        </AboutMeContainer>
    )
}

export default WhoAmI;
