import classes from './PostsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AddPostForm from '../AddPostForm/AddPostForm';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';
import { postDelete } from '../../redux/posts/postsSlice';
import MySelect from '../MySelect/MySelect';
import { useState } from 'react';

const PostsList = () => {
  const [selectedSort, setSelectedSort] = useState('')
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  const getSortingPost = () => {
    if (selectedSort) {
      return posts.slice().sort((a, b) => b[selectedSort].localeCompare(a[selectedSort]))
    }
    return posts;
  }
  const orderedPosts = getSortingPost()

  return (
    <>
      <AddPostForm />
      <section className={classes.postsList}>
        {orderedPosts.length !== 0
          ? <div>
            <div className={classes.container}>
              <h2 className={classes.title}>Posts</h2>
              <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Сортировка по'
                options={[
                  { value: 'date', name: 'по времени' },
                  { value: 'title', name: 'по заголовку' },
                  { value: 'content', name: 'по содержанию' }
                ]}
              />
            </div>
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
    </>
  )
}

export default PostsList;




