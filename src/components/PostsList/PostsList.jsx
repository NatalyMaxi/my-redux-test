import classes from './PostsList.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AddPostForm from '../AddPostForm/AddPostForm';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';

const PostsList = () => {
  const posts = useSelector(state => state.posts)

  //сортировка по времени отправки сообщения
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <AddPostForm />
      <section className={classes.postsList}>
        <h2 className={classes.title}>Posts</h2>
        {
          orderedPosts.map(post => (
            <article className={classes.post} key={post.id}>
              <div className={classes.postItems}>
                <h3 className={classes.postTitle}>{post.title}</h3>
                <div className={classes.postItem}>
                  <PostAuthor userId={post.user} />
                  <TimeAgo timestamp={post.date} />
                </div>
              </div>
              <p className={classes.postContent}>{post.content.substring(0, 130)}</p>
              <Link to={`/posts/${post.id}`}
                className={classes.viewButton}
                type='button'>
                View Post
              </Link>
              <ReactionButtons post={post} />
            </article>
          ))
        }
      </section>
    </>

  )
}

export default PostsList;
