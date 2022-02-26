import {
    ContactMeContainer,
    ContactMeDescription,
    ContactMeForm,
    ContactMeImage,
    ContactMeInput,
    ContactMeTextarea,
    ContactMeTitle,
    FormBodySectionContainer,
    FormSectionContainer,
    InnerContainer,
    PortfolioButton
} from "~/pages/index/index.styled";
import ContactFormMeImage from '../../../../public/assets/ContactFormMeImage.png'
import {forwardRef} from "react";

const ContactMe = forwardRef<HTMLElement>(({}, ref) => {
    return (
        <ContactMeContainer ref={ref}>
            <InnerContainer>
                <FormSectionContainer>
                    <ContactMeImage src={ContactFormMeImage} alt="Katalina-pozzoli-image"></ContactMeImage>
                    <FormBodySectionContainer>
                        <ContactMeTitle>Lets Talk!</ContactMeTitle>
                        <ContactMeDescription>I’d love to know about you</ContactMeDescription>
                        <ContactMeForm>
                            <ContactMeInput type="text" placeholder="Name"/>
                            <ContactMeInput type="email" placeholder="Email address"/>
                            <ContactMeTextarea placeholder="Anything you'd like to tell me..."></ContactMeTextarea>
                            <PortfolioButton type="submit"> Submit </PortfolioButton>
                        </ContactMeForm>
                    </FormBodySectionContainer>
                </FormSectionContainer>
            </InnerContainer>
        </ContactMeContainer>
    )
})

export default ContactMe;
