import React, { useState } from 'react';
import {
    Container,
    MessageWrap,
    MessageContent,
    ImageWrapper,
    MessageImage,
} from './ComingSoonElement';
import {
    HeroBtnWrapper,
    ArrowBack,
    ArrowLeft
} from '../../components/HeroSection/HeroElements';
import PageNotFound from '../../images/page_not_found.svg';
import { Button } from '../../components/ButtonElement';

const ContactUsSuccess = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <Container>
                <MessageWrap>
                    <ImageWrapper>
                        <MessageImage src={PageNotFound} />
                    </ImageWrapper>
                    <MessageContent>
                        <h1>Ups!</h1>
                        <p>Strona w budowie albo jeszcze nie istnieje...</p>
                        <HeroBtnWrapper>
                            <Button
                                to="/"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary='false'
                                dark='false'
                            >
                                {hover ? <ArrowBack /> : <ArrowLeft />} Powrót
                            </Button>
                        </HeroBtnWrapper>
                    </MessageContent>
                </MessageWrap>
            </Container>
        </>
    )
}

export default ContactUsSuccess
