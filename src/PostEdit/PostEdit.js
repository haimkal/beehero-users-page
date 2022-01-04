import React, { useState, useEffect, useRef } from 'react'
import './PostEdit.scss';

export default function PostEdit({ post, onSavePost }) {

    const [statePost, setStatePost] = useState({ ...post }); // Use destructive to avoid changing the original obj. 
    const [error, setTitleError] = useState({});
    const [bodyError, setBodyError] = useState('');
    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();
        onSavePost(statePost)
    }

    const onCancel = () => {
        setStatePost({ ...post }) // setState uses shallow comparison, that's way I need the ...
        console.log(bodyRef.current.value)
    }

    const onChangeProp = (property) => (e) => {

        setStatePost({ ...statePost, [property]: e.target.value })

        if (!e.target.value.trim()) {
            setTitleError({ ...error, [property]: true });
        }
        else {
            setTitleError({ ...error, [property]: false });
        }
    }

    const onKeyDown = (eize) => (e) => {
        if (e.key === 'Enter') {
            if (eize === 'title') {
                bodyRef.current.focus()
            }
            else {
                titleRef.current.focus()
            }
        }

    }

    return (
        <div style={{ background: '#FFF', width: '400px' }}>
            <form onSubmit={onSubmit} >
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        className={error['title'] ? 'error' : ''}
                        ref={titleRef}
                        type='text' name='title'
                        onKeyDown={onKeyDown('title')}
                        onChange={onChangeProp('title')}
                        value={statePost?.title} />
                    <div className={`error-txt ${error['title'] ? 'danger' : ''}`}>Title cannot be empty</div>
                </div>
                <div>
                    <label htmlFor='body'>Body</label>
                    <input className={error['body'] ? 'error' : ''}
                        ref={bodyRef} type='text' name='body' onKeyDown={onKeyDown('body')} onChange={onChangeProp('body')} value={statePost?.body} />
                    <div className={`error-txt ${error['body'] ? 'danger' : ''}`}>Body cannot be empty</div>
                </div>
                <input type='submit' value='submit' disabled={error['title'] || error['body']} />
                <button onClick={onCancel} >Cancel </button>
            </form >
        </div>




    )
}
