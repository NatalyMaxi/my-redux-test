import classes from './SinglePostPage.module.css';

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostAuthor from '../PostAuthor/PostAuthor';

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
        <div className={classes.postItem}>
          <h2 className={classes.title}>{post.title}</h2>
          <PostAuthor userId={post.user} />
        </div>
        <p className={classes.postContent}>{post.content}</p>
        <Link to={`/editPost/${post.id}`} className={classes.viewButton}>
          Edit Post
        </Link>
      </article>
    </section>
  )
}

export default SinglePostPage;
