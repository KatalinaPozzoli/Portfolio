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
import {forwardRef, useEffect, useRef, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useContactForm from "~/hooks/useContactForm.hook";

interface ContactForm {
    name: string
    email: string
    message: string
    captcha: string
}

const ContactMe = forwardRef<HTMLElement>(({}, ref) => {
    const captcha = useRef<ReCAPTCHA>()
    const {formIsValid, setFormValue} = useContactForm({
        name: '',
        email: '',
        message: '',
        captcha: ''
    })

    return (
        <ContactMeContainer ref={ref}>
            <InnerContainer>
                <FormSectionContainer>
                    <ContactMeImage src={ContactFormMeImage} alt="Katalina-pozzoli-image"></ContactMeImage>
                    <FormBodySectionContainer>
                        <ContactMeTitle>Lets Talk!</ContactMeTitle>
                        <ContactMeDescription>I’d love to know about you</ContactMeDescription>
                        <ContactMeForm onSubmit={event => !formIsValid ? event.preventDefault() : true} method="post" action="?index">
                            <ContactMeInput
                                onChange={({target}) => setFormValue('name', target.value)}
                                type="text" placeholder="Name" name="name" required/>
                            <ContactMeInput
                                onChange={({target}) => setFormValue('email', target.value)}
                                type="email" placeholder="Email address" name="email" required/>
                            <ContactMeTextarea
                                onChange={({target}) => setFormValue('message', target.value)}
                                required placeholder="Anything you'd like to tell me..."
                                               name="message"></ContactMeTextarea>
                            <ReCAPTCHA
                                ref={captcha as any}
                                sitekey="6LfW4cMeAAAAAGDRPxz2TnR7icFynSSdPC8n8M9F"
                                onChange={(value) => value && setFormValue('captcha', value)}
                            />
                            <PortfolioButton type="submit"> Submit </PortfolioButton>
                        </ContactMeForm>
                    </FormBodySectionContainer>
                </FormSectionContainer>
            </InnerContainer>
        </ContactMeContainer>
    )
})

export default ContactMe;
