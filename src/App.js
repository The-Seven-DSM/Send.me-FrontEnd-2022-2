import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './global.css';
import '../src/components/Table/style.css'
import '../src/components/cadastro_usuario/style.css'
import '../src/components/Editor/style.css'
import '../src/components/Header/style.css'
import '../src/components/Sem-Caderno/style.css'
import '../src/components/login/style.css'
import '../src/components/Hist-Perfil/style.css'
import '../src/components/Hist-Perfil/historico/style.css'
import '../src/components/Lista-assoc/style.css'
import '../src/components/cadastro_backoffice/style.css'

import Table from './components/Table/table';
import Editor from './components/Editor/editor';
import Cadastro_Usuario from './components/cadastro_usuario/cadastro_usuario';
import SemCaderno from './components/Sem-Caderno/sem_caderno';
import Login from './components/login/login';
import Perfil from './components/Hist-Perfil/perfil';
import Lista from './components/Lista-assoc/lista';
import Cadastro_Backoffice from './components/cadastro_backoffice/cadastro_backoffice';


const d = new Date(); 
const dia = 5 // d.getDay()

const App = () => {
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={ dia == 0 || dia == 1 ? <SemCaderno/>:<Table/> } />
        <Route path='/editor' element={<Editor />} />
        <Route path='/cadastro_usuario' element={<Cadastro_Usuario />} />
        <Route path='/' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/Lista' element={<Lista />} />
        <Route path='/cadastro_backoffice' element={<Cadastro_Backoffice />} />
      </Routes>
    </BrowserRouter>
  )

};

export default App;
