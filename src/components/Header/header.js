import React from 'react'

function Header(){
   
    return(
      <nav>
        <a className="logo" href="/">Midall</a>
        <ul className="nav-list">
          <li><a href="/editor">Editar Email</a></li>
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