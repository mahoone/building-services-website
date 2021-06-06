import React, { useState } from 'react'
import ContactUs from '../components/ContactUs'
import ScrollToTop from '../components/ScrollToTop'
import ContactUsSuccess from '../components/ContactUs/ContactUsSuccess'

const ContactUsPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);

    }
    return (
        <>
            <ScrollToTop />
            {!isSubmitted ? (<ContactUs submitForm={submitForm} />) : (<ContactUsSuccess />)}
        </>
    )
}

export default ContactUsPage
