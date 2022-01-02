import React, { useState, useRef } from 'react'

export default function PostEdit({ post, onSavePost }) {

    const [statePost, setStatePost] = useState({ ...post }); // Use destructive to avoid changing the original obj. 
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
        statePost[property] = e.target.value
        setStatePost({ ...statePost })
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
        <form onSubmit={onSubmit} className={post ? 'sababa' : 'lo-sababa'}>
            <div>
                <label htmlFor='title'>Title</label>
                <input ref={titleRef} type='text' name='title' onKeyDown={onKeyDown('title')} onChange={onChangeProp('title')} value={statePost?.title} />
            </div>
            <div>
                <label htmlFor='body'>Body</label>
                <input ref={bodyRef} type='text' name='body' onKeyDown={onKeyDown('body')} onChange={onChangeProp('body')} value={statePost?.body} />
            </div>
            <input type='submit' value='submit' />
            <button onClick={onCancel} >Cancel </button>

        </form >


    )
}
