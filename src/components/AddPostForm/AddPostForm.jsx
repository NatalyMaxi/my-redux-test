import classes from './AddPostForm.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from '../../redux/posts/postsSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <section className={classes.addPostForm}>
      <h2 className={classes.title}>Add a New Post</h2>
      <form className={classes.form}>
        <label
          className={classes.label}
          htmlFor='postTitle'>
          Post Title:
        </label>
        <input
          className={classes.input}
          type='text'
          id='postTitle'
          name='postTitle'
          spellheck='true'
          maxLength='70'
          value={title}
          onChange={onTitleChanged}
        />
        <label
          htmlFor='postContent'
          className={classes.label}>
          Content:
        </label>
        <textarea
          className={classes.textarea}
          id='postContent'
          name='postContent'
          spellheck='true'
          value={content}
          onChange={onContentChanged}
        />
        <label
          htmlFor='postAuthor'
          className={classes.label}>
          Author:
        </label>
        <select
          className={classes.inputSelect}
          id='postAuthor'
          value={userId}
          onChange={onAuthorChanged}>
          <option value=''></option>
          {
            users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))
          }
        </select>
        <button
          className={!canSave ? `${classes.button} ${classes.buttonDisabled}` : classes.button}
          type='button'
          onClick={onSavePostClicked}
          disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm;
