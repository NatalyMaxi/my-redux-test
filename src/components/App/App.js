import './App.css';
import { Routes, Route } from 'react-router-dom';
import PostsList from '../PostsList/PostsList'
import Navbar from '../Navbar/Navbar';

function App() {

  return (
    <div className="page">
      <Navbar />
      <div className='page__content'>
        <Routes>
          <Route path='/post' element={<PostsList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
