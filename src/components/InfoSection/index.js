import React from 'react'
import { Button } from '../ButtonElement'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    ColumnOne,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    ColumnTwo,
    Ul,
    List,
    ImgClass
} from './InfoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    isButton,
    isList,
    listPoints,
    imgClass
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <ColumnOne>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                {!isList && <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>}
                                {isList && <Ul>
                                    {listPoints.map((item, index) => (
                                        <List darkText={darkText} key={index}>{item}</List>
                                    ))}
                                </Ul>}
                                <BtnWrap>
                                    {isButton && <Button to="/kontakt"
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>}
                                </BtnWrap>
                            </TextWrapper>
                        </ColumnOne>
                        <ColumnTwo>
                            <ImgWrap>
                                {!imgClass && <Img src={img} alt={alt} />}
                                {imgClass && <ImgClass src={img} alt={alt} />}
                            </ImgWrap>
                        </ColumnTwo>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
