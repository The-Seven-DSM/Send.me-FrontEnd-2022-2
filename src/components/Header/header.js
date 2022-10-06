import React from 'react'

function Header(){
   
    return(
      <nav>
        <a className="logo-text" href="/">Send.me</a>
        <ul className="nav-list">
          <li><a href="/Cadastro_Usuario">Cadastro de Usuários</a></li>
          <li><a href="/lista">Lista de Usuários</a></li>
        </ul>
      </nav>
      // <C.Nav>
      //   <C.Logo><a href='/'>Midall</a></C.Logo>
      //   <C.Links>
      //     <a href='/'>Histórico</a>
      //     <a href='/'>Usuários</a>
      //   </C.Links>
        
      // </C.Nav>
    )
};
export default Header