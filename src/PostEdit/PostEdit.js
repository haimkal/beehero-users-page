import React from 'react'

export default function PostEdit({ post, onSavePost }) {

    function onSubmit(e) {
        e.preventDefault();
        let values = {
            id: post.id,
            title: e.target.title.value,
            body: e.target.body.value
        }
        onSavePost(values)

    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' defaultValue={post.title} />
            </div>
            <div>
                <label htmlFor='body'>Body</label>
                <input type='text' name='body' defaultValue={post.body} />
            </div>
            <input type='submit' value='submit' />
        </form >


    )
}
