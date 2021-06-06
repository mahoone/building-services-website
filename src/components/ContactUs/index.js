import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormLabel,
    FormInput,
    FormButton,
    FormH1,
    ContactUsBtnLinkIcon,
    ReCaptchaWrapper,
    FormTextAreaInput
} from './ContactUsElement';
import { ErrorMessage } from "@hookform/error-message";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { BiLoaderCircle } from 'react-icons/bi';

const ContactUs = ({ submitForm }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isMessage, setIsMessage] = useState(true);
    const [message, setMessage] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm(submitForm);

    // Submit form
    const onSubmit = data => {
        if (isVerified) {
            setIsSubmitting(true);
            axios.post('http://s795895695.websitehome.co.uk/', data)
                .then((response) => {
                    if (response.data.sent) {
                        window.grecaptcha.reset();
                        setIsSubmitting(false);
                        setIsVerified(false);
                        setIsChecked(false);
                        submitForm();
                        reset({});
                    } else {
                        window.grecaptcha.reset();
                        setIsMessage(true);
                        setMessage(response.data.message);
                        setIsSubmitting(false);
                        setIsVerified(false);
                    }
                }).catch((error) => {
                    window.grecaptcha.reset();
                    setMessage(error.message);
                    setIsSubmitting(false);
                    setIsVerified(false);
                })
        } else {
            setIsChecked(true);
        }
    }

    // Check if captcha is valid
    const verifyCaptcha = (response) => {
        if (response) {
            setIsVerified(true);
        }
    }

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"><ContactUsBtnLinkIcon />Powrót</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormH1>Wyślij wiadomość</FormH1>

                            {isMessage && <span style={{ color: "red", paddingBottom: '10px' }}>{message}</span>}

                            <FormLabel htmlFor="for">Adres email</FormLabel>
                            <ErrorMessage errors={errors} name="email" as="span-validation-error" />
                            <FormInput
                                size="30"
                                type='email'
                                {...register("email", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Pole e-mail jest wymagne'
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'Pole e-mail nie może mieć wiecej niż 50 znaków'
                                    }
                                })}

                            />

                            <FormLabel htmlFor="for">Imię i nazwisko</FormLabel>
                            <ErrorMessage errors={errors} name="fullname" as="span-validation-error" />
                            <FormInput
                                type='text'
                                {...register("fullname", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Pole imię i nazwisko jest wymagne'
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'Pole imię i nazwisko nie może mieć wiecej niż 50 znaków'
                                    }
                                })}
                            />

                            <FormLabel htmlFor="for">Numer telefonu</FormLabel>
                            <ErrorMessage errors={errors} name="phoneNo" as="span-validation-error" />
                            <FormInput
                                type='number'
                                {...register("phoneNo", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Pole numer telefonu jest wymagne'
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: 'Pole numer telefonu nie może mieć wiecej niż 15 znaków'
                                    }
                                })}
                            />
                            <FormLabel htmlFor="for">Treść wiadomości</FormLabel>
                            <ErrorMessage errors={errors} name="msg" as="span-validation-error" />
                            <FormTextAreaInput
                                type='text'
                                {...register("msg", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Pole wiadomości jest wymagne'
                                    },
                                    maxLength: {
                                        value: 255,
                                        message: 'Pole wiadomości nie może mieć wiecej niż 255 znaków'
                                    }
                                })}
                            />
                            <FormButton
                                disabled={isSubmitting}
                                type="submit"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                            >
                                {isSubmitting && (
                                    <BiLoaderCircle
                                        className="fa-spin"
                                        style={{ marginRight: "5px" }} />
                                )}
                                {isSubmitting && <span>Wysyłanie wiadomości...</span>}
                                {!isSubmitting && <span>Wyślij</span>}
                            </FormButton>

                            <ReCaptchaWrapper>
                                {isChecked && !isVerified && <span style={{ color: "red" }}>Pole wymaga zaznaczenia</span>}
                                <ReCAPTCHA
                                    style={{ display: "inline-block" }}
                                    sitekey="6LexeZ0aAAAAAF3vnz5cPD7qPqtG3Amm1PtyCZ0l"
                                    onChange={verifyCaptcha}
                                />
                            </ReCaptchaWrapper>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ContactUs;
