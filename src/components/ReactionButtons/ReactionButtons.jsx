import classes from './ReactionButtons.module.css';

import { useDispatch } from 'react-redux'

import { reactionAdded } from '../../redux/posts/postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className={classes.reactionButton}
        key={name}
        type='button'
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return (
    <div className={classes.buttonContainer}>{reactionButtons}</div>
  )
}

export default ReactionButtons;
