import classes from './PostsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { postDelete } from '../../redux/posts/postsSlice';

import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

import AddPostForm from '../AddPostForm/AddPostForm';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';
import FilteringPosts from '../FilteringPosts/FilteringPosts';
import MyModal from '../UI/MyModal/MyModal';

const PostsList = () => {
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(false)
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const orderedPosts = useMemo(() => {
    if (filter.sort) {
      return posts.slice().sort((a, b) => b[filter.sort].localeCompare(a[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return orderedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, orderedPosts])

  return (
    <section className={classes.postsPage}>
      <button className={classes.button} onClick={() => setVisible(true)}>vjl</button>
      <MyModal visible={visible} setVisible={setVisible}>
        <AddPostForm setVisible={setVisible} />
      </MyModal>
      <div className={classes.postItems}>
        <FilteringPosts filter={filter} setFilter={setFilter} />
      </div>
      <section className={classes.postsList}>
        {sortedAndSearchedPosts.length !== 0
          ? <div>
            <h2 className={classes.title}>Posts</h2>
            {
              sortedAndSearchedPosts.map(post => (
                <article className={classes.post} key={post.id}>
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
                        onClick={() => {
                          dispatch(postDelete(post))
                        }}>
                        Delete Post
                      </button>
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
          :
          <h3 className={classes.title}>Posts are missing</h3>
        }
      </section>
    </section>
  )
}

export default PostsList;




