import classes from './EditPostForm.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { postUpdated } from '../../redux/posts/postsSlice';

import Input from '../UI/inputFields/Input/Input';
import Label from '../UI/inputFields/Label/Label';
import Textarea from '../UI/inputFields/Textarea/Textarea';
import ButtonSubmit from '../UI/button/ButtonSubmit/ButtonSubmit';

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

  const canSave = Boolean(title) && Boolean(content)

  return (
    <section className={classes.editPostForm}>
      <h2 className={classes.title}>Edit Post</h2>
      <form className={classes.form}>
        <Label htmlFor='postTitle'>Post Title:</Label>
        <Input
          type='text'
          id='postTitle'
          name='postTitle'
          spellheck='true'
          maxLength='70'
          value={title}
          onChange={onTitleChanged}
        />
        <Label htmlFor='postContent'>Content:</Label>
        <Textarea
          id='postContent'
          name='postContent'
          spellheck='true'
          value={content}
          onChange={onContentChanged}
        />
        <ButtonSubmit
          type='submit'
          onClick={onSavePostClicked}
          disabled={canSave ? false : true}>
          Save Post
        </ButtonSubmit>
      </form>
    </section>
  )
}

export default EditPostForm;
