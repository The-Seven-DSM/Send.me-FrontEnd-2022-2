import React from "react";

import "./style.css";

export default function Header() {
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
          <a href="/lista">Lista de Usuários</a>
        </li>
      </ul>
    </nav>
  );
}
