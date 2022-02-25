import {
    AboutMeContainer,
    AboutMeDescriptionText,
    AboutMeSection,
    MeImage,
    WhoAmIDescription,
    WhoAmITitle
} from "~/pages/index/index.styled";
import img from '../../../../public/assets/Imagen-ejemplo.png'
import {forwardRef} from "react";

const WhoAmI = forwardRef<HTMLElement>(({}, ref) => {
    return (
        <AboutMeSection ref={ref}>
            <AboutMeContainer>
                <MeImage src={img} alt="katalina-pozzoli-image"/>
                <AboutMeDescriptionText>
                    <WhoAmITitle>Who am I?</WhoAmITitle>
                    <WhoAmIDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio eros,
                        sollicitudin id elit sed, tristique vehicula lorem. Cras tristique, urna eget molestie accumsan,
                        justo ex vulputate lectus, vel facilisis tellus enim ac nibh. Proin ornare eros purus, non
                        consequat felis placerat quis. Vestibulum sed ullamcorper urna. Etiam feugiat magna justo, et
                        bibendum nisl finibus sed. Integer quis lobortis diam. Nulla sodales quis elit ac porta.
                        Suspendisse dignissim velit vitae ultricies euismod. Vivamus ornare est vitae leo ultricies, a
                        dapibus nunc ornare. Suspendisse lacinia placerat lacus in interdum. Morbi fermentum nibh congue
                        volutpat dictum.</WhoAmIDescription>
                </AboutMeDescriptionText>
            </AboutMeContainer>
        </AboutMeSection>
    )
})

export default WhoAmI;
