/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import Header from '../Header/header'
import Voltar from '../../assets/img/voltar.png'
import Axios from "axios";
import React, { useState } from "react";

const Cadastro_Backoffice = () => {
    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    const manda = () => {
        Axios.post(`http://localhost:3001/create/backoffice`, {
            nome: values.nome,
            email: values.email,
            senha: values.senha,
            cpf: values.cpf,
            datanascimento: values.datanascimento,
            telefone: values.telefone,
        }
        ).then(resp => {
            // console.log(values);
        });
        
        
    }
    return (
        <>
            <main className="salve">

                {/* <div className="cadastro">
                    <form action="/home">
                        <div className="detail">

                            <div className="input-box">
                                <p>Nome</p>
                                <input name="nome" placeholder="Digite seu Nome Completo" required />
                            </div>
                            <div className="input-box">
                                <p>CPF</p>
                                <input type="text" name="cpf" maxLength={12} placeholder="Ex: 000000000-00" required />
                            </div>
                            <div className="input-box">
                                <p>Data de Nascimento</p>
                                <input type="date" className="input-nascimento" name="datanascimento" required />
                            </div>
                            <div className="input-box">
                                <p>Telefone</p>
                                <input type='number' name="telefone" maxLength={11} placeholder="Ex: 12 00000-0000" required />
                            </div>
                            <div className="input-box">
                                <p>Escola Vinculada</p>
                                <input type='text' name="escola-vinculado" maxLength={11} placeholder="Digite o nome da escola em que está vinculado" required />
                            </div>
                            
                        </div>

                        <div className="button-registration">
                            <a href='/'>Voltar</a>
                            <input type="submit" value="CADASTRAR" />
                        </div>

                    </form>

                </div> */}
                <form action='/'>
                <div className="cadastro">
                    <h3>Cadastro</h3>

                    <div>
                        <p>Nome</p>
                        <input onChange={pega} name="nome" placeholder="Digite seu Nome Completo" required />
                    </div>
                    <div>
                        <p>Email</p>
                        <input onChange={pega} name="email" placeholder="Digite o Email" required />
                    </div>
                    <div>
                        <p>Senha</p>
                        <input onChange={pega} name="senha" placeholder="Digite a Senha" required />
                    </div>

                    <div>
                        <p>CPF</p>
                        <input onChange={pega} type="text" name="cpf" maxLength={12} placeholder="Ex: 000000000-00" required />
                    </div>
                    <div>
                        <p>Data de Nascimento</p>
                        <input onChange={pega} type="date" className="input-nascimento" name="datanascimento" required />
                    </div>
                    <div>
                        <p>Telefone</p>
                        <input onChange={pega} type='number' name="telefone" maxLength={12} placeholder="Ex: 12 00000-0000" required />
                    </div>
                    
                    <button onClick={() => manda()}>Cadastrar</button>
                <p><a href="/">Voltar</a></p>

                </div>
                </form>
            </main>

        </>

    )
}

export default Cadastro_Backoffice