import classes from './SinglePostPage.module.css';

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';

const SinglePostPage = () => {
  const params = useParams()
  const { postId } = params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section className={classes.singlePost}>
      <article className={classes.post}>
        <div className={classes.postItems}>
          <h3 className={classes.postTitle}>{post.title}</h3>
          <div className={classes.postItem}>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </div>
        </div>
        <p className={classes.postContent}>{post.content}</p>
        <Link to={`/editPost/${post.id}`} className={classes.editButton}>
          Edit Post
        </Link>
        <ReactionButtons post={post} />
      </article>
    </section>
  )
}

export default SinglePostPage;
