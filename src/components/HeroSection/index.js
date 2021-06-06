import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroBg,
    HeroContainer,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Usługi i prace ziemne
                </HeroH1>
                <HeroP>Wynajem koparki koparko-ładowarki
                z operatorem na Podkarpaciu
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="/kontakt"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Kontakt {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
