import React, { useState, useEffect } from 'react'
import { UserService } from '../services/user.service';
import UserCard from './UserCard/UserCard';

export default function Feed() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const users = await UserService.getUsers();
            setUsers(users);
            console.log(users);
        }
        getUsers();
    }, [])

    return (
        <div className='feed row'>
            {users.map(user => (
                <UserCard key={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    coordinatesLat={user.coordinates.lat}
                    coordinatesLng={user.coordinates.lng}
                    company={user.company} />
            )
            )}


        </div>
    )
}
