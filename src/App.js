import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./global.css";

import Editor from "./pages/Editor";
import CreateAssociate from "./pages/CreateAssociate";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AssociateList from "./pages/AssociateList";
import CadastroBackoffice from "./pages/CadastroBackoffice/CadastroBackoffice";

import Home from "./pages/Home";

const date = new Date();
const day = date.getDay();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Home hasNoBook={day === 7 || day === 1} />}
        />
        <Route path="/editor" element={<Editor />} />
        <Route path="/createAssociate" element={<CreateAssociate />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<AssociateList />} />
        <Route path='/cadastro_backoffice' element={<CadastroBackoffice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
