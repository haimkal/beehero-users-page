import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../src/redux/AsyncThunk';
import HomePage from './HomePage/HomePage';
import Map from './Map/Map';
import Header from './Header/Header';
import './App.scss';

function App() { 
  const dispatch = useDispatch();

  useEffect(() => {
    async function setCurrentUsers() {
      await dispatch(await getUsers())
    }
    setCurrentUsers();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/map/user/:id" element={<Map />} />
        <Route path="/:userId" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
