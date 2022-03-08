import {useEffect, useState} from "react";

interface ContactForm {
    name: string
    email: string
    message: string
    captcha: string
}

interface useContactFormReturnValues {
    formIsValid: boolean
    values: ContactForm
    setFormValue: (field_key: keyof ContactForm, field_value: string) => void
}

function useContactForm(initialValue: ContactForm): useContactFormReturnValues {
    const [validForm, setValidForm] = useState(false);
    const [contactForm, setContactForm] = useState<ContactForm>(initialValue);

    const handleFormChange = (field_key: keyof ContactForm, field_value: string) => {
        setContactForm((oldValue) => {
            return {
                ...oldValue,
                [field_key]: field_value
            }
        })
    }

    useEffect(() => {
        const isValidForm = Object.keys(contactForm)
            .reduce((isValid, field_key) => {
                return isValid && !!contactForm[field_key as keyof ContactForm]
            }, true)
        setValidForm(isValidForm)
    }, [contactForm])

    return {
        formIsValid: validForm,
        values: contactForm,
        setFormValue: handleFormChange
    }
}

export default useContactForm;
