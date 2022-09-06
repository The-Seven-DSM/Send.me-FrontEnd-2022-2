import React from 'react'
import * as C from './styles';

function Header(){
   
    return(
      // <nav>
      //   <a className="logo" href="/">Midall</a>
      //   <div className="mobile-menu">
      //     <div className="line1"></div>
      //     <div className="line2"></div>
      //     <div className="line3"></div>
      //   </div>
      //   <ul className="nav-list">
      //     <li><a href="#">Início</a></li>
      //     <li><a href="#">Histórico</a></li>
      //     <li><a href="#">Usuários</a></li>
      //   </ul>
      // </nav>
      <C.Nav>
        <C.Logo><a href='/'>Midall</a></C.Logo>
        <C.Links>
          <a href='/'>Histórico</a>
          <a href='/'>Usuários</a>
        </C.Links>
        
      </C.Nav>
    )
};
export default Header