/* eslint-disable jsx-a11y/heading-has-content */
import Header from '../Header/header'
import Voltar from '../../assets/img/voltar.png'
import Axios from "axios";
import React, { useState } from "react";

const Cadastro_Usuario = () => {
    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    const manda = () => {
        Axios.post(`http://localhost:3001/create/associate`, {
            nome: values.nome,
            email: values.email,
            sexo: values.sexo
        }
        ).then(resp => {
            console.log(values);
        });
    }
    return (
        <>
            <Header />
            <div className="fundo">
            <div className="voltar">
                        <a href="/"><img src={Voltar} alt="Voltar" /></a>
                        <h3>Cadastro de Associados</h3>
                    </div>
                <div className="container">
                        <div className="detail">
                            <div  className="input-box">
                                <span>Nome</span>
                                <input  onChange={pega} name="nome" placeholder="Digite seu Nome Completo"  />
                            </div>
                            <div  className="input-box">
                                <span>Email</span>
                                <input  onChange={pega} name="email" placeholder="Digite seu Email" />
                            </div>
                            <div  className="input-box">
                                <span>Gênero</span>
                                <select name="sexo" onChange={pega} placeholder="Digite seu Nome Completo">
                                    <option value="" disabled selected>Selecione:</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>
                            <div className="botao">
                                <input  onClick={() => manda()} type="submit"value="CADASTRAR" />
                            </div>
                        </div>
                    
                </div>
            </div>

        </>

    )
}

export default Cadastro_Usuario