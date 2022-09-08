import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Table from './components/Table/table';
import './App.css';
import Editor from './components/Editor/editor';

const App = () => {
  return(

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table />} />
        <Route path='/editor' element={<Editor />} />
      </Routes>
    </BrowserRouter>
  )

};

export default App;
