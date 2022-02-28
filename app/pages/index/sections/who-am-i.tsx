import {
    AboutMeContainer,
    AboutMeDescriptionText,
    AboutMeSection,
    MeImage,
    WhoAmIDescription,
    WhoAmITitle
} from "~/pages/index/index.styled";
import img from '../../../../public/assets/KPWhoAmI.png'
import {forwardRef} from "react";

const WhoAmI = forwardRef<HTMLElement>(({}, ref) => {
    return (
        <AboutMeSection ref={ref}>
            <AboutMeContainer>
                <MeImage src={img} alt="katalina-pozzoli-image"/>
                <AboutMeDescriptionText>
                    <WhoAmITitle>Who am I?</WhoAmITitle>
                    <WhoAmIDescription>
                        <p>Hi, I'm a User experience designer and web developer based in Argentina. I started two years ago as a web developer using HTML, CSS, JavaScript (more specifically Angular).</p>

                        <p>I got into UI design when a friend of mine asked me to work on the designs of a project she was working on. It pushed my (poor) knowledge limits, so I started learning more in-depth about design principles, patterns, and systems in order to fill those needs. It was that experience that hook me into this world that I fell in love with. And the more I learn, the more I loved it. I haven’t stopped learning since.</p>

                        <p>I took a 13-week UX/UI Bootcamp, and then I joined a UX design community where I took a UI summer marathon, where I developed 14 designs in 14 days. It was an incredible experience where I met a lot of beautiful people that helped me to grow more, especially in what it means to work in a community.</p>

                        <p>Beyond design and development, when I'm not working, I'm probably bouldering or reading about human psychology or reading some utopian sci-fi novel.</p>
                    </WhoAmIDescription>
                </AboutMeDescriptionText>
            </AboutMeContainer>
        </AboutMeSection>
    )
})

export default WhoAmI;
