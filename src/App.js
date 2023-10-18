import './App.css';
import React, { useState } from 'react';
import Form from './components/form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
