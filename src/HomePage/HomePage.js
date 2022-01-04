import React, { useState, useEffect } from 'react'
// import { UserService } from '../services/user.service';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getCurrentUser, getPosts, getUsers } from '../redux/AsyncThunk';
import UserCard from '../UserCard/UserCard';
import UserPosts from '../UserPosts/UserPosts';
import Map from '../Map/Map';
import './HomePage.scss'

export default function HomePage() {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users);
    const user = useSelector(({ currentUser }) => currentUser);

    const deleteCard = (id) => () => {
        dispatch(deleteUser(id))
        if (user.id === id) {
            dispatch(getCurrentUser(null));
        }
    }

    const onUserClick = (user) => () => {
        dispatch(getCurrentUser(user));
    }

    return (
        <div className='homePage row'>
            {users.map((user, index) => (
                <UserCard key={index}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    coordinatesLat={user.coordinates.lat}
                    coordinatesLng={user.coordinates.lng}
                    company={user.company}
                    onClick={onUserClick(user)}>
                    <button className='deleteUserBtn' onClick={deleteCard(user.id)}>X</button>
                </UserCard>
            )
            )}
            {user && <UserPosts user={user} />}
        </div>
    )
}
