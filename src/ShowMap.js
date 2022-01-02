import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '100%'
};

function ShowMap({ lat, lng }) {

    const center = {
        lat: parseInt(lat),
        lng: parseInt(lng)
    }
    // debugger
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBd7QuKs-U9a_cZVOCzkqfNMLYvSyerKTY'
    })

    const [map, setMap] = useState(null)
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])


    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    console.log(isLoaded)
    return isLoaded ? (
        <div style={{ width: '100rem', height: '20rem', position: 'relative', border: '3px solid red' }}>
            hello world
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap >
            hello world
        </div >
    ) : <></>
}

export default React.memo(ShowMap)


