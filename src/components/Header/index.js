import "./style.css";
import { Component } from 'react'

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    if (localStorage.getItem("token") == null) {
      window.location.href = "/";
    }
    function sair() {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return (
      <nav>
        <a className="logo-text" href="/home">Send.me</a>
        <ul id="nav-list" className={this.state.clicked ? "#nav-list active" : "#nav-list"}>
          <div className='top'>
            <li><a href="/createAssociate">Cadastro de Usuários</a></li>
            {/* <li><a href="/Cadastro_BackOffice">Cadastro de BackOffice</a></li> */}~
            <li><a href="/list">Lista de Usuários</a></li>
          </div>
          <div className='bottom'>
            <li><button className="send-email-home" onClick={() => sair()} >sair</button></li>
          </div>
        </ul>

        <div className='menu-mobile' onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    )
  };
}
export default Header