import styled from 'styled-components'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const MapsContainer = styled.div`
    height: 732px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #151F29;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const LocationPin = styled(FaMapMarkerAlt)`
    font-size: 24px;
    color: #151F29;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #FFC94B;
    margin-bottom: 64px;
    margin-top: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;