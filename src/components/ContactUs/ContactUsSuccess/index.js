import React, { useState } from 'react';
import {
    Container,
    MessageWrap,
    MessageContent,
    ImageWrapper,
    MessageImage,
} from './ContactUsSucessElement';
import {
    HeroBtnWrapper,
    ArrowBack,
    ArrowLeft
} from '../../HeroSection/HeroElements';
import Icon3 from '../../../images/sent.svg';
import { Button } from '../../ButtonElement';

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
                        <MessageImage src={Icon3} />
                    </ImageWrapper>
                    <MessageContent>
                        <h1>Dziekujemy za wiadomosc</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id finibus mauris. Nam tempor orci tellus, non tempor justo rhoncus quis. Integer diam velit</p>
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
