import classes from './AddPostForm.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from '../../redux/posts/postsSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section className={classes.addPostForm}>
      <h2 className={classes.title}>Add a New Post</h2>
      <form className={classes.form}>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          className={classes.input}
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea
          className={classes.textarea}
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <button
          className={classes.button}
          type='button'
          onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm;
