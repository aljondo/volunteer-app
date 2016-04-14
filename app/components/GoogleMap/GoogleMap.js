import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import styles from './googlemap.scss';

const GoogleMapComponent = (props) => (
    <section className={styles.section}>
        <GoogleMapLoader
            containerElement={
                <div className={styles.container}></div>
            }
            googleMapElement={
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{lat: props.lat, lng: props.lng}}
                    options={{disableDefaultUI: true}}>
                    <Marker position={{lat: props.lat, lng: props.lng}}/>
                </GoogleMap>
            }
        />
    </section>
);

export default GoogleMapComponent