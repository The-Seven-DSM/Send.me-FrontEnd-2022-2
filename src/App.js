import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./global.css";

import Editor from "./pages/Editor";
import CreateAssociate from "./pages/CreateAssociate";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AssociateList from "./pages/AssociateList";

import Home from "./pages/Home";

const date = new Date();
const day = date.getDay();

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home hasBook={day === 0 || day === 1} />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/createAssociate" element={<CreateAssociate />} />
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/list" element={<AssociateList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
