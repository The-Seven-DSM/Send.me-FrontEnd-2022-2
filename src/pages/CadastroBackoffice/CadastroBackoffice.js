/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import "./style.css"
import React, { useState } from "react";
import { createBackoffice } from "../../services/requests";
export default function  CadastroBackoffice() {
    const [values, setValues] = useState([]);
    const pega = (value) => {
        setValues(preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,

        }))
    }
    return (
        <>
            <div className="salve">

                <form  action="/" className='formulario'>
                    <h3>Cadastro</h3>
                    <div className="cadastro">

                        <div className='left'>
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
                        </div>

                        <div className='right'>
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
                        </div>
                    </div>
                    <div className='button'>
                        <button onClick={() => createBackoffice(values)} >Cadastrar</button>
                        <span><a href="/">Voltar</a></span>
                    </div>


                </form>
            </div>

        </>

    )
}
