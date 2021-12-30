import React from 'react'

export default function UserCard({ name, username, email, coordinatesLat, coordinatesLng, company }) {
    return (
        <div className="userCard col-12 col-md-4 ">
            <div className="userDetails">
                <div>
                    {name} <span>{`(${username})`}</span>
                </div>
                <div> {email} </div>
                <div> {coordinatesLat} </div>
                <div>{coordinatesLng}</div>
                <div> {company} </div>
            </div>
        </div >
    )
}
