import React, { useState, useEffect } from 'react'
import { UserService } from '../services/user.service';
import UserCard from '../UserCard/UserCard';
import UserPosts from '../UserPosts/UserPosts';
import ShowMap from '../ShowMap';

export default function Feed() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function getUsers() {
            const users = await UserService.getUsers();
            setUsers(users);
            console.log(users);
        }
        getUsers();
    }, [])

    const deleteCard = (index) => () => {
        const newUsersArr = [...users];
        newUsersArr.splice(index, 1)
        setUsers(newUsersArr);
    }

    const onUserClick = (userId) => () => {
        setUserId(userId);
    }

    const getUser = (userId) => users.find(user => user.id === userId) || null
    const user = getUser(userId)
    return (
        <div className='feed row'>
            {users.map((user, index) => (
                <UserCard key={index}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    coordinatesLat={user.coordinates.lat}
                    coordinatesLng={user.coordinates.lng}
                    company={user.company}
                    onClick={onUserClick(user.id)}>
                    <button className='deleteUser' onClick={deleteCard(index)}>X</button>
                </UserCard>
            )
            )}
            <UserPosts userId={userId} />
            <ShowMap lat={user?.coordinates.lat || 0} lng={user?.coordinates.lng || 0} />
        </div>
    )
}
