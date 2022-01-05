import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setCurrentUser} from '../redux/AsyncThunk';
import UserCard from '../UserCard/UserCard';
import UserPosts from '../UserPosts/UserPosts';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './HomePage.scss';


export default function HomePage() {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users);
    const user = useSelector(({ currentUser }) => currentUser);
    let { userId } = useParams();
    const navigate = useNavigate()

    const deleteCard = (id) => () => {
        dispatch(deleteUser(id))
        if (user.id === id) {
            dispatch(setCurrentUser(null));
        }
    }

    const onUserClick = (user) => () => {
        navigate('/' + user.id)
        dispatch(setCurrentUser(user));
    }

    useEffect(() => {
        if (userId && !user) {
            let user = users.find(user => user.id == userId);
            if (user) {
                onUserClick(user)()
            }
        }
    }, [users])

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
