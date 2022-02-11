import {
    ContactMeContainer,
    ContactMeDescription,
    ContactMeForm,
    ContactMeInput,
    ContactMeTextarea,
    ContactMeTitle, InnerContainer,
    PortfolioButton
} from "~/pages/index/index.styled";

const ContactMe = () => {
    return (
        <ContactMeContainer>
            <InnerContainer>
                <ContactMeTitle>Lets Talk!</ContactMeTitle>
                <ContactMeDescription>I’d love to know about you</ContactMeDescription>
                <ContactMeForm>
                    <ContactMeInput type="text" placeholder="Name"/>
                    <ContactMeInput type="email" placeholder="Email address"/>
                    <ContactMeTextarea placeholder="Anything you'd like to tell me..."></ContactMeTextarea>
                    <PortfolioButton type="submit"> Submit </PortfolioButton>
                </ContactMeForm>
            </InnerContainer>
        </ContactMeContainer>
    )
}

export default ContactMe;
