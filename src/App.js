import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserPosts from './UserPosts/UserPosts';
import Feed from './Feed/Feed';
import PostEdit from './PostEdit/PostEdit';

function App() { //fixind for the layout they asked
  return (
    <div className="App">


      <Routes>
        <Route path="/user/posts/:id" element={<UserPosts />} />
        <Route path="/post/:id" element={<PostEdit />} />
        <Route path="/" element={<Feed />} />


      </Routes>


    </div>
  );
}

export default App;
