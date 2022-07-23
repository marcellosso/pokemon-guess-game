import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import FirstGenEasy from './views/FirstGenEasy';
import FirstGenHard from './views/FirstGenHard';

const DefaultRouter = () => (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/first-gen-hard" element={<FirstGenHard />}/>
        <Route path="/" element={<FirstGenEasy />}/>
        
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );

export default DefaultRouter;