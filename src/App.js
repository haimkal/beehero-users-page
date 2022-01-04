import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../src/redux/AsyncThunk';
import HomePage from './HomePage/HomePage';
import Map from './Map/Map';

function App() { //fixing for the layout they asked
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users);

  useEffect(() => {
    async function getCurrentUsers() {
      await dispatch(await getUsers())


    }
    getCurrentUsers();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/map/user/:id" element={<Map />} />
        <Route path="/:userId" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
