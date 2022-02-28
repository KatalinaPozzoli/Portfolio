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
import ContactFormMeImage from '../../../../public/assets/KPContactMeImage.png'
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
                        <ContactMeForm method="post" action="?index">
                            <ContactMeInput type="text" placeholder="Name" name="name"/>
                            <ContactMeInput type="email" placeholder="Email address" name="email"/>
                            <ContactMeTextarea placeholder="Anything you'd like to tell me..." name="message"></ContactMeTextarea>
                            <PortfolioButton type="submit"> Submit </PortfolioButton>
                        </ContactMeForm>
                    </FormBodySectionContainer>
                </FormSectionContainer>
            </InnerContainer>
        </ContactMeContainer>
    )
})

export default ContactMe;
