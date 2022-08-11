import React from 'react'
import Image from 'next/image';

import { useState } from 'react'

import { motion } from 'framer-motion';

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut'

const Map = () => {
    const [zoomLevel, setZoomLevel] = useState(1);

    return (
        <div
            style={{
                width: '495px',
                height: '375px',
                position: 'relative',
                border: 'solid 5px #333',
            }}>
            <Image src={zoomLevel === 1 ? '/img/map/map1.jpg' : zoomLevel === 2 ? '/img/map/map2.jpg' : '/img/map/map3.jpg' } layout='fill' objectFit='contain' />
            <div id="cowwalk"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#777',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '31px',
                    height: '61px',
                    zIndex: '15',
                    position: 'absolute',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    borderRadius: '4px',
                }}>
                <motion.div
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        width: '28px',
                        height: '28px',
                        backgroundColor: zoomLevel === 3 ? '#777' : '#CCC',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderRadius: '4px',
                    }}
                    onClick={() => setZoomLevel(zoomLevel === 1 ? 2 : zoomLevel === 2 ? 3 : 3)}>
                    <ZoomInIcon />
                </motion.div>
                <motion.div
                    initial={{ scale: 1 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        width: '28px',
                        height: '28px',
                        backgroundColor: zoomLevel === 1 ? '#777' : '#CCC',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderRadius: '4px',
                    }}
                    onClick={() => setZoomLevel(zoomLevel === 3 ? 2 : zoomLevel === 2 ? 1 : 1)}>
                    <ZoomOutIcon />
                </motion.div>
            </div>
        </div>
    )
}












//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
/*import GoogleMapReact from 'google-map-react';

const LocationPin = ({ text }) => (
    <div className="pin">
        <p className="pin-text">{text}</p>
    </div>
)*/

/*const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
))*/






/*
    const center = {
        lat: 43.10135692695722,
        lng: -81.99155460163013
    }
 
    const zoom = 11;
 
    return (
        <div style={{ width: '800px', height: '800px', }}>
 
            <div style={{ width: '100%', height: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCmOZdEuzIs_hlogBabgBw25V9vLBcqwQg' }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <LocationPin
                        text='89 King St. East'
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
    
}*/

export default Map;