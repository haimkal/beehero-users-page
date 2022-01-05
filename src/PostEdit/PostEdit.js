import React, { useState, useRef } from 'react';
import './PostEdit.scss';

export default function PostEdit({ post, onSavePost }) {

    const [statePost, setStatePost] = useState({ ...post });
    const [error, setError] = useState({});
    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    function onSubmit(e) {
        e.preventDefault();
        onSavePost(statePost);
    }

    const onCancel = () => {
        setStatePost({ ...post });
    }

    const onChangeProp = (property) => (e) => {
        setStatePost({ ...statePost, [property]: e.target.value });

        if (!e.target.value.trim()) {
            setError({ ...error, [property]: true });
        }
        else {
            setError({ ...error, [property]: false });
        }
    }

    const onKeyDown = (property) => (e) => {
        if (e.key === 'Enter') {
            if (property === 'title') {
                bodyRef.current.focus();
            }
            else {
                titleRef.current.focus();
            }
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        className={error['title'] ? 'error' : ''}
                        ref={titleRef}
                        type='text'
                        name='title'
                        onKeyDown={onKeyDown('title')}
                        onChange={onChangeProp('title')}
                        value={statePost?.title} />
                    <div className={`error-txt ${error['title'] ? 'danger' : ''}`}>Title cannot be empty</div>
                </div>
                <div>
                    <label htmlFor='body'>Body</label>
                    <input 
                        className={error['body'] ? 'error' : ''}
                        ref={bodyRef} 
                        type='text' name='body' 
                        onKeyDown={onKeyDown('body')} 
                        onChange={onChangeProp('body')} 
                        value={statePost?.body} />
                    <div className={`error-txt ${error['body'] ? 'danger' : ''}`}>Body cannot be empty</div>
                </div>
                <div className='buttons'>
                    <input className='submit' type='submit' value='submit' disabled={error['title'] || error['body']} />
                    <button className='cancel' onClick={onCancel} >cancel </button>
                </div>
            </form >
        </div>




    )
}
