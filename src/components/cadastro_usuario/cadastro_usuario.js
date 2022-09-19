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
            genero: values.genero
        }
        ).then(resp => {
            console.log(values);
        });
    }
    return (
        <>
            <Header />
            <div className="background">
                <div className="back-button-registration">
                    <a href="/"><img src={Voltar} alt="Voltar" /></a>
                    <h3>Cadastro de Associados</h3>
                </div>
                <div className="container">
                    <form action="/">
                        <div className="detail">

                            <div className="input-box">
                                <span>Nome</span>
                                <input onChange={pega} name="nome" placeholder="Digite seu Nome Completo" required />
                            </div>
                            <div className="input-box">
                                <span>Email</span>
                                <input onChange={pega} type="email" name="email" placeholder="Digite seu Email" required />
                            </div>
                            <div className="input-box">
                                <span>Gênero</span>
                                <select name="genero" onChange={pega} placeholder="Digite seu Nome Completo" required>
                                    <option value="" disabled selected>Selecione:</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>
                            
                        </div>
                        
                                <div className="button-registration">
                                    <input onClick={() => manda()} type="submit" value="CADASTRAR" />
                                </div>
                            
                            </form>

                </div>
            </div>

        </>

    )
}

export default Cadastro_Usuario