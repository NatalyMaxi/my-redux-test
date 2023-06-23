import classes from './PostsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { postDelete } from '../../redux/posts/postsSlice';
import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { usePosts } from '../../hooks/usePosts';
import FilteringPosts from '../FilteringPosts/FilteringPosts';
import Post from '../Post/Post';
import AddPostPopup from '../AddPostPopup/AddPostPopup';

const PostsList = () => {
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(false)
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  return (
    <section className={classes.postsPage}>
      <button className={classes.button} onClick={() => setVisible(true)}>vjl</button>
      <AddPostPopup visible={visible} setVisible={setVisible} />
      <div className={classes.postsPageItems}>
        <FilteringPosts filter={filter} setFilter={setFilter} />
      </div>
        {
          sortedAndSearchedPosts.length !== 0
            ? <div> <h2 className={classes.title}>Posts</h2></div>
            : <div>  <h3 className={classes.title}>Posts are missing</h3></div>
        }
      <div className={classes.postsPageList}>
        <TransitionGroup>
          {
            sortedAndSearchedPosts.map(post => (
              <CSSTransition
                key={post.id}
                timeout={500}
                classNames={{ ...classes }}
              >
                <Post post={post} onClick={() => dispatch(postDelete(post))} />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    </section>
  )
}

export default PostsList;




