/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import Header from '../Header/header'

const Cadastro_Usuario = () => {
  return (
    <>
        <Header />
        <div className="fundinho">
            <div className="container">
                <div className="Titulo">
                    <h3>Cadastro de Associados</h3>
                </div>
                <form>
                <div className="detail">
                    <div className="input-box">
                        <span>Nome Completo</span>
                        <input placeholder="Digite seu Nome Completo"/>
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input placeholder="Digite seu Email"/>
                    </div>
                    <div className="input-box">
                        <span>Sexo</span>
                        <select>
                            <option value="0">Selecione</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feeminino</option>
                        </select>
                    </div>
                        <div className="botao">
                            <input type="submit" value="Adicionar"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
       
    </>
    
  )
}

export default Cadastro_Usuario