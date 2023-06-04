import classes from './PostsList.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AddPostForm from '../AddPostForm/AddPostForm';
import PostAuthor from '../PostAuthor/PostAuthor';

const PostsList = () => {
  const posts = useSelector(state => state.posts)

  return (
    <>
      <AddPostForm />
      <section className={classes.postsList}>
        <h2 className={classes.title}>Posts</h2>
        {
          posts.map(post => (
            <article className={classes.post} key={post.id}>
              <div className={classes.postItem}>
                <h3 className={classes.postTitle}>{post.title}</h3>
                <PostAuthor userId={post.user} />
              </div>

              <p className={classes.postContent}>{post.content.substring(0, 130)}</p>

              <Link to={`/posts/${post.id}`}
                className={classes.viewButton}
                type='button'>
                View Post
              </Link>
            </article>
          ))
        }
      </section>
    </>

  )
}

export default PostsList;
