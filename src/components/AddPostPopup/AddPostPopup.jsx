import classes from './AddPostPopup.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from '../../redux/posts/postsSlice';

import Input from '../UI/inputFields/Input/Input';
import Label from '../UI/inputFields/Label/Label';
import Textarea from '../UI/inputFields/Textarea/Textarea';
import Select from '../UI/inputFields/Select/Select';
import ButtonSubmit from '../UI/button/ButtonSubmit/ButtonSubmit';
import MyModal from '../UI/MyModal/MyModal';
import Form from '../UI/Form/Form';

const AddPostPopup = ({ visible, setVisible }) => {
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
      setVisible(false)
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <MyModal visible={visible} setVisible={setVisible}>
      <Form formTitle='Add a New Post' name='addNewPost'>
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
        <Label htmlFor='postAuthor'>Author:</Label>
        <Select
          id='postAuthor'
          value={userId}
          onChange={onAuthorChanged}>
          <option className={classes.option} disabled value='' />
          {
            users.map(user => (
              <option className={classes.option} key={user.id} value={user.id}>
                {user.name}
              </option>
            ))
          }
        </Select>
        <ButtonSubmit
          type='submit'
          onClick={onSavePostClicked}
          disabled={canSave ? false : true}>
          Save Post
        </ButtonSubmit>
      </Form>
    </MyModal>
  )
}

export default AddPostPopup;
