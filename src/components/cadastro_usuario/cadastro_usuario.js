/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import Header from '../Header/header'
import Voltar from '../../assets/img/voltar.png'

const Cadastro_Usuario = () => {
  return (
    <>
        <Header />
        <div className="fundo">
            <div className="container">
                <div className="voltar">
                    <a href="/"><img src={Voltar} alt="Voltar"/></a>
                    <h3>Cadastro de Associados</h3>
                </div>
                <form>
                <div className="detail">
                    <div className="input-box">
                        <span>Nome</span>
                        <input placeholder="Digite seu Nome Completo"/>
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input placeholder="Digite seu Email"/>
                    </div>
                    <div className="input-box">
                        <span>Gênero</span>
                        <select  placeholder="Digite seu Nome Completo">
                            <option value="" disabled selected>Selecione:</option>
                            <option value="0">Masculino</option>
                            <option value="1">Feminino</option>
                        </select>
                    </div>
                        <div className="botao">
                            <input type="submit" value="CADASTRAR"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
       
    </>
    
  )
}

export default Cadastro_Usuario