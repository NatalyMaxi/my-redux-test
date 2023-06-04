import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import PostsList from '../PostsList/PostsList';
import SinglePostPage from '../SinglePostPage/SinglePostPage';
import EditPostForm from '../EditPostForm/EditPostForm';

function App() {

  return (
    <div className="page">
      <Navbar />
      <div className='page__content'>
        <Routes>
          <Route path='/posts' element={<PostsList />} />
          <Route path='/posts/:postId' element={<SinglePostPage />} />
          <Route path='/editPost/:postId' element={<EditPostForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;