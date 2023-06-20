import classes from './PostsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AddPostForm from '../AddPostForm/AddPostForm';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';
import { postDelete } from '../../redux/posts/postsSlice';
import MySelect from '../MySelect/MySelect';
import { useState, useMemo } from 'react';
import PostSearch from '../PostSearch/PostSearch';

const PostsList = () => {
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  const orderedPosts = useMemo(() => {
    console.log('Отработала функция')
    if (selectedSort) {
      return posts.slice().sort((a, b) => b[selectedSort].localeCompare(a[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return orderedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, orderedPosts])

  return (
    <section className={classes.postsPage}>
      <AddPostForm />
      <div className={classes.postItems}>
        <PostSearch
          type='search'
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
          placeholder='Поиск...' />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировать по'
          options={[
            { value: 'date', name: 'времени' },
            { value: 'title', name: 'заголовку' },
            { value: 'content', name: 'содержанию' }
          ]}
        />
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




