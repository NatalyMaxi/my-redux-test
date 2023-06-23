import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import PostsList from '../PostsList/PostsList';
import SinglePostPage from '../SinglePostPage/SinglePostPage';
import EditPostPage from '../EditPostPage/EditPostPage';
import { useEffect } from 'react';
import { fetchPosts } from '../../store/posts/posts-slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const {allPosts} = useSelector((state) => state.posts)
console.log(allPosts)
  return (
    <div className="page">
      <Navbar />
      <div className='page__content'>
        <Routes>
          <Route path='/posts' element={<PostsList />} />
          <Route path='/posts/:postId' element={<SinglePostPage />} />
          <Route path='/editPost/:postId' element={<EditPostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
