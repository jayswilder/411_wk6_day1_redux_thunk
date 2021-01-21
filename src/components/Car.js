import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { Container, Switch } from '@material-ui/core';
import './map.css'

import mapStyles from './mapStyles'

const Car = (props) => {
    const id = Number(props.match.params.id)
    const car = props.cars.find(c => c.id === id)
    const [mapStyling, setMapStyling] = useState(mapStyles.light)
    const [mapMode, setMapMode] = useState(false)

    const handleStyleChange = () => {
        setMapMode((prev) => !prev);
        if (mapStyling === mapStyles.light) {
            setMapStyling(mapStyles.dark)
        }
        if (mapStyling === mapStyles.dark) {
            setMapStyling(mapStyles.light)
        }

    }
    return (
        <Container maxWidth="lg" className="car-container">

            <h2>{car.name}</h2>
            <h4>{car.address}</h4>
            <h4>{car.hours}</h4>
            <h5>{car.description}</h5>
            <div id="mapSwitch">
                <Switch checked={mapMode} onChange={handleStyleChange} /><h6 id='mode'>Color Mode</h6>
            </div>
            <div id="map">

                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_API_KEY,
                        language: 'en',
                    }}
                    center={{ lat: car.latitude, lng: car.longitude }}
                    defaultZoom={17}
                    options={{ styles: mapStyling }}
                >
                </GoogleMapReact>

            </div>

        </Container >
    )
}

export default Car