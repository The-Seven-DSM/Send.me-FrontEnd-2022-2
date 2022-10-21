import React from 'react'

function Header() {

  return (
    <nav>
      <a className="logo-text" href="/home">Send.me</a>
      <ul className="nav-list">
        <li><a href="/Cadastro_Usuario">Cadastro de Usuários</a></li>
        <li><a href="/lista">Lista de Usuários</a></li>
      </ul>
    </nav>
  )
};
export default Header