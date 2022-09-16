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

export default App;
