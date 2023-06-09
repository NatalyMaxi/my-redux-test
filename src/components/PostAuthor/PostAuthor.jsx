import classes from './PostAuthor.module.css';

import { useSelector } from 'react-redux';

const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  )
  
  return (
    <span className={classes.postAuthor}>
      {author ? author.name : 'Unknown author'}
    </span>
  )
}

export default PostAuthor;
