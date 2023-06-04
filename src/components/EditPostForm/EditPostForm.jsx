import classes from './EditPostForm.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { postUpdated } from '../../redux/posts/postsSlice';

const EditPostForm = () => {
  const params = useParams()
  const { postId } = params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      navigate(`/posts/${postId}`, { replace: true })
    }
  }

  return (
    <section className={classes.editPostForm}>
      <h2 className={classes.title}>Edit Post</h2>
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

export default EditPostForm;
