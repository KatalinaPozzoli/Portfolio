import {
    ContactMeContainer,
    ContactMeDescription,
    ContactMeForm,
    ContactMeInput,
    ContactMeImage,
    ContactMeTextarea,
    ContactMeTitle, InnerContainer,
    PortfolioButton, FormSectionContainer, FormBodySectionContainer
} from "~/pages/index/index.styled";
import ContactFormMeImage from '../../../../public/assets/ContactFormMeImage.png'

const ContactMe = () => {
    return (
        <ContactMeContainer>
            <InnerContainer>
                <FormSectionContainer>
                    <ContactMeImage src={ContactFormMeImage}></ContactMeImage>
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
}

export default ContactMe;
