import React from 'react'
import { Link } from 'react-router-dom';
import './UserCard.scss'

export default function UserCard({ onClick, name, username, email, coordinatesLat, coordinatesLng, company, id, children }) {

    function handleClick() {
        onClick();
    }
    return (
        <div className="userCard col-12 col-lg-2 ">
            <div className='userDetails'>
                <div className='nameAndEmail' onClick={handleClick}>
                    {name} <span>{`(${username})`}</span>
                    <div> {email} </div>
                </div>
                <Link to={`/map/user/${id}`} className='linkToMap' >
                    <div className='coordinates'>
                        <div> lat: {coordinatesLat} </div>
                        <div> lng: {coordinatesLng}</div>
                    </div>
                </Link>
                <div> {company} </div>
            </div>
            {children}
        </div >
    )
}
