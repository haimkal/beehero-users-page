import React from 'react'
import { Link } from 'react-router-dom';
import './UserCard.scss'

export default function UserCard({ id, name, username, email, coordinatesLat, coordinatesLng, company, children }) {
    return (
        <div className="userCard col-12 col-lg-2 ">
            <Link to={`/user/posts/${id}`}>
                <div className="userDetails">
                    <div>
                        {name} <span>{`(${username})`}</span>
                    </div>
                    <div> {email} </div>
                    <div className='coordinates'>
                        <div> lat: {coordinatesLat} </div>
                        <div> lng: {coordinatesLng}</div>
                    </div>
                    <div> {company} </div>
                </div>
            </Link>
            {children}
        </div >
    )
}
