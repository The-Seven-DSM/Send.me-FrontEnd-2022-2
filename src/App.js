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

/* https://www.figma.com/file/ImDcKpkiq1NRpmS9csqIJ7/API-2%C2%BA-Semestre?node-id=38%3A3*/

export default App;
