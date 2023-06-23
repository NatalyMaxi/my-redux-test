import classes from './Post.module.css';

import { Link } from 'react-router-dom';

import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';

const Post = ({ post, onClick }) => {

  return (
    <article className={classes.post}>
      <div className={classes.postItems}>
        <h3 className={classes.postTitle}>{post.title}</h3>
        <div className={classes.postItem}>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
      </div>
      <p className={classes.postContent}>{post.content.substring(0, 130)}</p>
      <div className={classes.postItems}>
        <ReactionButtons post={post} />
        <div className={classes.buttonContainer}>
          <Link to={`/posts/${post.id}`}
            className={classes.viewButton}>
            <button
              className={classes.button}
              type='button'
            >
              View Post
            </button>
          </Link>
          <button
            className={classes.button}
            type='button'
            onClick={onClick}>
            Delete Post
          </button>
        </div>
      </div>
    </article>
  )
}

export default Post;
