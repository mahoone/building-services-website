import React from 'react'
import GoogleMapReact from 'google-map-react';

import {
    MapsContainer,
    ServicesH1
} from "./MapsElements";
const Maps = () => {
    const location = {
        lat: 50.06481898041169,
        lng: 21.2711839010797,
    }
    return (
        <MapsContainer id='locations'>
            <ServicesH1>GDZIE DZIAŁAMY</ServicesH1>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDlp2eb1Zqzv7FTRJLtnR0pod3oUKJKL8E' }}
                defaultCenter={location}
                defaultZoom={10}
                onGoogleApiLoaded={({ map, maps }) =>
                    new maps.Circle({
                        strokeColor: '#151F29',
                        strokeOpacity: 0.0,
                        strokeWeight: 2,
                        fillColor: '#FFC94B',
                        fillOpacity: 0.4,
                        map,
                        center: { lat: location.lat, lng: location.lng },
                        radius: 8000,
                    })}
            >

                {/* <LocationPin
                    lat={50.06481898041169}
                    lng={21.2711839010797}
                /> */}
            </GoogleMapReact>
        </MapsContainer>
    )
}

export default Maps
