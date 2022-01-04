import React, { useState, useEffect, useRef } from 'react'
import './PostEdit.scss';

export default function PostEdit({ post, onSavePost }) {

    const [statePost, setStatePost] = useState({ ...post }); // Use destructive to avoid changing the original obj. 
    const [error, setError] = useState(true);
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
    }

    const onKeyPress = (e) => {
        if(!e.target.value) {
            setError(true);
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
        <div>
            <form onSubmit={onSubmit} >
                <div>
                    <label htmlFor='title'>Title</label>
                    <input ref={titleRef} type='text' name='title' onKeyPress={onKeyPress} onKeyDown={onKeyDown('title')} onChange={onChangeProp('title')} value={statePost?.title} />
                </div>
                <div>
                    <label htmlFor='body'>Body</label>
                    <input ref={bodyRef} type='text' name='body' onKeyPress={onKeyPress} onKeyDown={onKeyDown('body')} onChange={onChangeProp('body')} value={statePost?.body} />
                </div>
                <input type='submit' value='submit' />
                <button onClick={onCancel} >Cancel </button>
            </form >
        </div>




    )
}
