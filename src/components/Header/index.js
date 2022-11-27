import React from "react";

import "./style.css";

export default function Header() {
  if (localStorage.getItem("token") == null) {
      window.location.href = "/";
    }
    function sair() {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  return (
    <nav>
      <a className="logo-text" href="/home">
        Send.me
      </a>
      <ul className="nav-list">
        <li>
          <a href="/createAssociate">Cadastro de Usuários</a>
        </li>
        <li>
          <a href="/list">Lista de Usuários</a>
        </li>
        <div className='bottom'>
            <li><button className="send-email-home" onClick={() => sair()}>sair</button></li>
        </div>
      </ul>
    </nav>
  );
}