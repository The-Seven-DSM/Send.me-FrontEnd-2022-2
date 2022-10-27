import {Component} from 'react'

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){

  return (
    <nav>
      <a className="logo-text" href="/home">Send.me</a>
      <ul id="nav-list" className={this.state.clicked ? "#nav-list active" : "#nav-list"}>
        <li><a href="/Cadastro_Usuario">Cadastro de Usuários</a></li>
        <li><a href="/Cadastro_BackOffice">Cadastro de BackOffice</a></li>
        <li><a href="/lista">Lista de Usuários</a></li>
      </ul>

      <div className='menu-mobile' onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  )
};
}
export default Header