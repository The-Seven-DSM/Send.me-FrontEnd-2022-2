import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Table from './components/Table/table';
import './App.css';
import Editor from './components/Editor/editor';
import Cadastro_Usuario from './components/cadastro_usuario/cadastro_usuario';

const App = () => {
  return(

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Table />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/cadastro_usuario' element={<Cadastro_Usuario />} />
      </Routes>
    </BrowserRouter>
  )

};

/* https://www.figma.com/file/ImDcKpkiq1NRpmS9csqIJ7/API-2%C2%BA-Semestre?node-id=38%3A3*/

export default App;
