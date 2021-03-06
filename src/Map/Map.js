import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import './Map.scss';


const containerStyle = {
    width: '100%',
    height: '100%'
};

function Map() {
    const users = useSelector(({ users }) => users);
    const getUser = (userId) => users.find(user => user.id == userId) || null
    const { id: userId } = useParams()
    const [map, setMap] = useState(null)
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBd7QuKs-U9a_cZVOCzkqfNMLYvSyerKTY'
    })

    if (!users.length) return null;
    const user = getUser(userId)
    const center = {
        lat: parseFloat(user.coordinates.lat),
        lng: parseFloat(user.coordinates.lng)
    }

    const onLoad = function (map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setTimeout(() => map.setCenter(center), 2000) 
        setMap(map)
    }

    const onUnmount = function () {
        setMap(null)
    }

    return isLoaded ? (
        <div className='Map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker position={{ lat: parseFloat(user.coordinates.lat), lng: parseFloat(user.coordinates.lng) }}
                    icon={'https://i.ibb.co/Bs2xB7S/beehero-icon.png'} />
            </GoogleMap >
            <div className="userDetailsMap">
                <div>{user.name}</div>
                <div>
                    lat: {user.coordinates.lat},
                    lng: {user.coordinates.lng}
                </div>
            </div>
        </div >
    ) : <></>
}

export default React.memo(Map)


