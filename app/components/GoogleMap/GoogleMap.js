import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const GoogleMapComponent = (props) => (
    <section style={{height: "100%"}}>
        <GoogleMapLoader
            containerElement={
                <div style={{height: "100%"}}></div>
            }
            googleMapElement={
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{lat: props.lat, lng: props.lng}}>
                    <Marker position={{lat: props.lat, lng: props.lng}}/>
                </GoogleMap>
            }
        />
    </section>
);

export default GoogleMapComponent