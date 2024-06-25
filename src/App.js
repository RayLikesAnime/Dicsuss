import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import Profile from './components/Profile.js';
import {BrowserRouter,HashRouter, Route,Routes,Router} from 'react-router-dom';
import { requireAuth } from './components/AuthService';
import AllCities from './components/AllCities.js';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/cities" element={<AllCities />} />
      <Route path="/profile" element={<Profile />} onEnter={requireAuth} />
      <Route path="/" element={<Main />} />


   </Routes>
   </BrowserRouter>
  )
}

export default App;
